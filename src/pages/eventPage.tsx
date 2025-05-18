import { useProfile } from "~/context/profileContext";
import useDocumentTitle, { setDocumentTitle } from "../hooks/useDocumentTitle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { apolloClient } from "~/appolo/client";
import { GetEventDocument } from "~/graphql/generated";

function EventPage() {

    const { profile } = useProfile()
    const { eventId } = useParams()

    useEffect(() => {
        if (!eventId) return;
        apolloClient.query({
            query: GetEventDocument,
            variables: { eventId: parseInt(eventId) }
        }).then(result => {
            setDocumentTitle(result.data.event.title)
        })
    }, [eventId])

    return <div>Hello!</div>;
}

export default EventPage;