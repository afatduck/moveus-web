import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Homepage() {

    useDocumentTitle("Homepage")

    return <div>Hello!</div>;
}

export default Homepage;