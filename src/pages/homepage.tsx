import { useProfile } from "~/context/profileContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Homepage() {

    useDocumentTitle("Homepage")

    const { profile } = useProfile()

    return <div>Hello {profile?.username}!</div>;
}

export default Homepage;