import { RiShareForwardBoxLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { EventTabFragment } from "~/graphql/generated"
import { prependZero } from "~/utils/timeUtils"

function EventTab({event: { id, title, startTime, location, participantCount }, ongoing = false}: EventTabProps) {
    return <Link to={`/event/${id}`} 
        className={"w-full relative p-6 shrink-0 rounded-[15px] overflow-hidden h-44 font-medium flex flex-col " + (ongoing ? "bg-block-accent text-background" : "bg-block")}>
        <svg viewBox="0 0 239.714 133.748" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            className="absolute -top-4 -right-2 h-[80%]">
            <desc>
                    Created with Pixso.
            </desc>
            <path id="Vector 2" d="M0 0C1.79 20.27 58.68 61.5 108 61.5C159.8 61.5 183.58 85.39 205.5 115.5C223.03 139.58 236.9 134.2 239.71 130.45L232.05 13.82L0 0Z" fill="#60CCF2" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>
        {ongoing && <p className="text-xs font-bold">ongoing</p>}
        <p className="text-sm my-2">participants: {participantCount}</p>
        <h3 className="text-2xl">{title}</h3>
        <div className="flex justify-between mt-auto">
            <div className="event-detail col-span-5">
                <p>date</p>
                <p>{startTime.toDateString().slice(4)}</p>
            </div>
            <div className="event-detail col-span-2 justify-self-end">
                <p>time</p>
                <p>{prependZero(startTime.getHours())}:{prependZero(startTime.getMinutes())}</p>
            </div>
            <div className="event-detail col-span-3 justify-self-end">
                <p>location</p>
                <p className="text-nowrap">
                    <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}>
                        View in Maps<RiShareForwardBoxLine className="ml-1 inline"/>
                    </a>
                </p>
            </div>
        </div>
    </Link>
}

export default EventTab

interface EventTabProps {
    event: EventTabFragment,
    ongoing?: boolean
}