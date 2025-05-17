import { useProfile } from "~/context/profileContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import UserView from "~/components/views/userView";

function Profile() {

    useDocumentTitle("Your profile")

    const { profile } = useProfile()

    return <UserView user={profile! as any} isSelf={true} />;
}

export default Profile;