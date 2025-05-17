import { useProfile } from "~/context/profileContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import BackButton from "~/components/routes/backButton";
import { useCallback, useEffect, useState } from "react";
import { PrivacyScope, UpdateAllPrivacySettingsDocument } from "~/graphql/generated";
import Dropdown from "~/components/input/dropdown";
import { apolloClient } from "~/appolo/client";

const privacyScopeOptions: Option<PrivacyScope>[] = [
    {
        name: "Only you",
        value: "NOONE"
    },
    {
        name: "Only friends",
        value: "FRIENDS"
    },
    {
        name: "Everyone",
        value: "EVERYONE"
    }
]

function Settings() {

    useDocumentTitle("Settings")

    const { profile, setProfile } = useProfile()

    const [scope, setScope] = useState<PrivacyScope>(profile!.privacySettings[0].scope as PrivacyScope)

    useEffect(() => {
        setScope((profile!.privacySettings[0].scope as PrivacyScope))
    }, [profile, setScope])

    const handleSetScope = useCallback((newScope: PrivacyScope) => {
        if (scope === newScope) return
        apolloClient.mutate({
            mutation: UpdateAllPrivacySettingsDocument,
            variables: { scope: newScope }
        }).then(() => {
            setProfile(p => {
                const newPrivacySettings = p?.privacySettings.map(setting => {
                    return {
                        ...setting,
                        scope: newScope
                    }
                })
                return {
                    ...p,
                    privacySettings: newPrivacySettings!
                } as any
            })
        }).catch(e => {
            console.error(e)
        })
        setScope(newScope)
    }, [scope, setScope, setProfile])

    return <div>
        <div className="flex items-center my-8 text-3xl gap-4">
            <BackButton />
            <h2>Settings</h2>
        </div>

        <div className="flex items-center justify-between">
            <div>
                <h3 className="text-xl font-medium">Privacy</h3>
                <p className="text-sm text-accent">Who can see your profile info.</p>
            </div>
            <Dropdown options={privacyScopeOptions} value={scope} setValue={handleSetScope} classname="text-nowrap shrink-0"  />
        </div>
    </div>;
}

export default Settings;