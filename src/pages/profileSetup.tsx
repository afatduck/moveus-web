import { useProfile } from "~/context/profileContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useCallback, useEffect, useRef, useState } from "react";
import QuestionSlider from "~/components/views/questionSlider";
import { Link } from "react-router-dom";
import { BasicInfoFragment, ContextProfileFragment, Gender, SurveyFragment, SurveyFragmentDoc, UpdateProfileBasicInfoDocument, UpdateProfileSurveyInfoDocument } from "~/graphql/generated";
import { pick } from "~/utils/pick";
import FirstLastName from "~/components/basicinfo/firstLastName";
import SingleChoice from "~/components/input/singleChoice";
import { enumToOptions } from "~/utils/enumToOptions";
import ProfileBio from "~/components/basicinfo/profileBio";
import DateOfBirth from "~/components/basicinfo/dateOfBirth";
import { apolloClient } from "~/appolo/client";
import { error } from "console";
import MultiChoice from "~/components/input/multiChoice";
import { surveyInfoKeyToOptions, surveyInfoKeyToTitle } from "~/utils/maps/surveryInfoMaps";

enum ProfileSetupState {
    START,
    BASIC_INFO,
    MIDDLE,
    SURVEY,
    END
}

function ProfileSetup() {

    useDocumentTitle("Setup your profile")

    const [state, setState] = useState<ProfileSetupState>(ProfileSetupState.START)
    const [currentQuestion, setCurrentQuestion] = useState(0) 

    const { profile, setProfile } = useProfile()

    const [basicInfo, setBasicInfo] = useState<BasicInfoFragment | null>(null)
    const [surveyInfo, setSurveyInfo] = useState<SurveyFragment | null>(null)
    
    useEffect(() => {
        if (!profile) return
        setBasicInfo(pick(profile, ['firstName', 'lastName', 'bio', 'dateOfBirth', 'gender']));
        setSurveyInfo(pick(profile, [
            'formedRelationshipTypes', 'frequencyOfPhysicalActivity', 
            'genderPreference', 'matchedParticipationLikelihood',
            'physicalActivitySatisfaction', 'preferredPartnerCharacteristics',
            'preferredPartySize', 'preferredTimeOfTheDay', 'mainInterest'
        ]))
    }, [profile, setBasicInfo])

    const questionCount = useRef<number>(0)

    const handleNext = useCallback(() => {
        
        if (state === ProfileSetupState.BASIC_INFO) {
            if (currentQuestion !== questionCount.current! - 1) setCurrentQuestion(p => p + 1)
            else {
                setState(ProfileSetupState.MIDDLE)
                apolloClient.mutate({
                    mutation: UpdateProfileBasicInfoDocument,
                    variables: {
                        ...basicInfo!,
                        dateOfBirth: basicInfo!.dateOfBirth?.toISOString().slice(0, 10)
                    }
                }).then(() => {
                    setProfile(p => {
                        return {
                            ...p, ...basicInfo
                        } as any
                    })
                }).catch(error => {
                    console.error(error)
                })
                setCurrentQuestion(0)
            }
        }
        else if (state === ProfileSetupState.SURVEY) {
            if (currentQuestion !== questionCount.current! - 1) setCurrentQuestion(p => p + 1)
            else {
                setState(ProfileSetupState.END)
                setCurrentQuestion(0)
                apolloClient.mutate({
                    mutation: UpdateProfileSurveyInfoDocument,
                    variables: surveyInfo!
                }).then(() => {
                    setProfile(p => {
                        return {
                            ...p, ...surveyInfo
                        } as any
                    })
                }).catch(error => {
                    console.error(error)
                })
                setCurrentQuestion(0)
            }
        }
    }, [currentQuestion, setCurrentQuestion, setState, state, questionCount, basicInfo])

    const handlePrev = useCallback(() => {
        if (currentQuestion) setCurrentQuestion(p => p - 1)
    }, [currentQuestion])

    const handleSkip = useCallback(() => {
        if (state === ProfileSetupState.BASIC_INFO) {
            setState(ProfileSetupState.MIDDLE)
            return
        }
        else {
            setState(ProfileSetupState.END)
        }
        setCurrentQuestion(0)
    }, [setCurrentQuestion, setState, state])

    const getBasicInfoSetter = useCallback((name: keyof BasicInfoFragment) => {
        return (value: any) => {
            setBasicInfo(p => {
                return {
                    ...p,
                    [name]: value
                } as any
            })
        }
    }, [setBasicInfo])

    const getSurveyInfoSetter = useCallback((name: keyof SurveyFragment) => {
        return (value: string | string[]) => {
            setSurveyInfo(p => {
                return {
                    ...p,
                    [name]: value
                } as any
            })
        }
    }, [setBasicInfo])

    switch (state) {
        case ProfileSetupState.START: return <div className="container-center">
            <h2 className="text-3xl font-medium mb-4 self-start">Let us get to know you...</h2>
            <button onClick={() => setState(ProfileSetupState.BASIC_INFO)}>
                Continue
            </button>
            <Link to="/profile" className="text-accent mt-3 self-end mr-3">
            ...or go to your profile
            </Link>
        </div>

        case ProfileSetupState.BASIC_INFO: 
            return <QuestionSlider currentQuestion={currentQuestion} total={questionCount}
                name="Basic info" next={handleNext} prev={handlePrev} skip={handleSkip} >
                    
                        <FirstLastName firstname={basicInfo?.firstName ?? ""}
                                lastname={basicInfo?.lastName ?? ""}
                                setFirstname={getBasicInfoSetter("firstName")}
                                setLastname={getBasicInfoSetter("lastName")} />

                        <div>
                            <h2 className="main-text">What is your gender?</h2>
                            <SingleChoice options={enumToOptions(Gender)} 
                                setValue={getBasicInfoSetter("gender") as any}
                                value={basicInfo?.gender} /> 
                        </div>

                        <ProfileBio bio={basicInfo?.bio ?? ""}
                                setBio={getBasicInfoSetter("bio")} />

                        <DateOfBirth dob={basicInfo?.dateOfBirth ?? null}
                                setDob={getBasicInfoSetter("dateOfBirth")} />
                    </QuestionSlider>

        case ProfileSetupState.MIDDLE: return <div className="container-center">
            <h2 className="text-3xl font-medium mb-4 self-start">Help us get better matches for you...</h2>
            <button onClick={() => setState(ProfileSetupState.SURVEY)}>
                Continue
            </button>
            <Link to="/profile" className="text-accent mt-3 self-end mr-3">
            ...or go to your profile
            </Link>
        </div>

        case ProfileSetupState.SURVEY: 
            return <QuestionSlider currentQuestion={currentQuestion} total={questionCount}
                name="Habits and preferences" next={handleNext} prev={handlePrev} skip={handleSkip} >
                        {
                            Object.entries(surveyInfo!).map(([key, value]) => <div key={key}>
                                <h2 className="main-text">{surveyInfoKeyToTitle(key as any)}</h2>
                                {
                                    Array.isArray(value) ?
                                    <MultiChoice options={surveyInfoKeyToOptions(key as any)}
                                    value={value} setValue={getSurveyInfoSetter(key as any) as any} /> :
                                    <SingleChoice options={surveyInfoKeyToOptions(key as any)} 
                                    value={value} setValue={getSurveyInfoSetter(key as any) as any} /> 
                                }
                            </div>
                            )
                        }
                    </QuestionSlider>

        case ProfileSetupState.END: return <div className="container-center">
            <h2 className="text-3xl font-medium mb-4 self-start">That's it, thank you for sharing!</h2>
            
            <Link to="/profile" className="block w-full">
                <button onClick={() => setState(ProfileSetupState.SURVEY)}>
                    Return to profile
                </button>
            </Link>

            <img src={process.env.PUBLIC_URL + "/duck/happy.svg"} alt="Happy duck"
                className="fixed right-6 h-[30vh] bottom-2" />
        </div>
    }
}

export default ProfileSetup;