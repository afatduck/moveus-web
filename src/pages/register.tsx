import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { ContextProfileFragment, useSignupUserMutation } from "~/graphql/generated"
import TextInput from "~/components/textInput";
import { HashLoader } from "react-spinners";
import { LOADER_COLOR } from "~/constants";
import { useProfile } from "~/context/profileContext";
import { usernameValidator, usernameTaken } from "~/utils/validators/usernameValidator";
import { emailTaken, emailValidator } from "~/utils/validators/emailValidator";
import { passwordValidator } from "~/utils/validators/passwordValidator";

export function Register() {

    useDocumentTitle("Register")

    const { setProfile } = useProfile()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [login, {loading, error}] = useSignupUserMutation()
    const navigate = useNavigate()

    const [taken, setTaken] = useState({
        username: false,
        email: false
    })

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        if (
            !username || !password || !email ||
            usernameValidator(username) || emailValidator(email) || passwordValidator(password) ||
            Object.values(taken).includes(true)
        ) return

        login({
            variables: { username, email, password }
        }).then(response => {
            setProfile(response.data?.signup?.myProfile as ContextProfileFragment)
            navigate("/profile-setup")
        }).catch(error => {})

    }, [username, email, password, setProfile, navigate, login, taken])

    const handleIsTaken = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget

        if (name === "username" && usernameValidator(value) === undefined) {
            usernameTaken(value).then(isTaken => {
                setTaken(p => {
                    return {
                        ...p,
                        username: isTaken
                    }
                })
            })
        }
        else if (emailValidator(value) === undefined) {
            emailTaken(value).then(isTaken => {
                    setTaken(p => {
                        return {
                            ...p,
                            email: isTaken
                        }
                    })
                })
        }
    }, [setTaken])

    const onTakenChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setTaken(p => {
            return {
                ...p,
                [name]: false
            }
        })
        if (name === "username") setUsername(value.toLowerCase())
    }

    return (
        <div className="container-center">
            <h2 className="text-3xl font-medium mb-4">So nice to have you here!</h2>
            <form className="block w-full" onSubmit={handleSubmit}>

                <TextInput name="username" setValue={setUsername}
                    value={username} label="Username" onBlur={handleIsTaken} onChange={onTakenChange}
                    validate={taken.username ? () => "Username already taken." : usernameValidator} />

                <TextInput name="email" setValue={setEmail}
                    value={email} label="Email" type="email" onBlur={handleIsTaken} onChange={onTakenChange}
                    validate={taken.email ? () => "Email already taken." : emailValidator} />

                <TextInput name="password" setValue={setPassword}
                    value={password} label="Password" type="password"
                    validate={passwordValidator}  />

                <p className="text-error">{error?.message}</p>
                {
                    loading ?
                    <HashLoader className="mx-auto mt-8" color={LOADER_COLOR} /> :
                    <button type="submit" className="mt-6">Register</button> 
                }
            </form>
        </div>
    );
}

export default Register;