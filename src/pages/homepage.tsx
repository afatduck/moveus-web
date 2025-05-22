import { useProfile } from "~/context/profileContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGetHomeEventsQuery } from "~/graphql/generated";
import { useMemo } from "react";
import EventTab from "~/components/event/eventTab";
import { HashLoader } from "react-spinners";
import { LOADER_COLOR } from "~/constants";

function Homepage() {

    useDocumentTitle("Homepage")

    const { profile } = useProfile()

    const { data, loading } = useGetHomeEventsQuery({fetchPolicy: "network-only"})

    const upcoming = useMemo(() => data?.futureJoinedEvents?.filter(e => e !== null) || [], [data])
    const ongoing = useMemo(() => data?.ongoingJoinedEvents?.filter(e => e !== null) || [], [data])

    return <div className="vertical pb-8">
        <div className="main-text">Hello {profile?.firstName ? profile.firstName : profile?.username}!</div>
        {
            loading ? <HashLoader color={LOADER_COLOR} className="my-24 mx-auto" /> :
            (upcoming.length + ongoing.length === 0 ?
            <p>No upcoming events</p> :
            <div className="flex flex-col grow overflow-y-auto gap-4">
                {
                    ongoing.map(e => <EventTab event={e!} key={e?.id} />)
                }
                <p className="font-medium">Upcoming events: </p>
                {
                    upcoming.map(e => <EventTab event={e!} key={e?.id} />)
                }
            </div>)
        }
    </div>
}

export default Homepage;