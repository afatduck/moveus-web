import { useMemo } from "react"
import { HashLoader } from "react-spinners"
import UserImage from "~/components/images/userImage"
import { LOADER_COLOR } from "~/constants"
import { useGetFeedQuery } from "~/graphql/generated"
import useDocumentTitle from "~/hooks/useDocumentTitle"
import { displayName } from "~/utils/displayName"
import { timeAgo } from "~/utils/timeUtils"

function FeedPage() {

    useDocumentTitle("Feed")

    const { data, loading } = useGetFeedQuery({fetchPolicy: "network-only"})

    const posts = useMemo(() => data?.joinedEvents?.map(
        e => e?.posts.map(p => {
            return {
                ...p,
                organizer: e.organizer
            }
        })
    ).flat().sort((a, b) => b!.timePosted!.getTime() - a!.timePosted!.getTime()), [data])

    return <div className="vertical">
        {
            loading ?
            <div className="grow flex justify-center items-center">
                <HashLoader color={LOADER_COLOR} />
            </div> :
            (
                posts?.length === 0 ?
                <p className="text-center mt-8 text-sm">feed empty</p> :
                <div className="grow overflow-y-auto gap-4 flex flex-col pb-8">{
                    posts?.map(post => post && <div key={post.id} className="rounded-[15px] box-border p-6 bg-block relative">
                        <p className="text-sm absolute top-6 right-6">{timeAgo(post.timePosted)}</p>
                        <div className="usertab mt-auto mb-8">
                            <UserImage canChange={false} userId={post.organizer!.user.id!} className="inline-block"/>
                            <div className="inner">
                                <div className="tags">
                                    <p>organizer</p>
                                </div>
                                <h4>{displayName(post.organizer!.user.username, post.organizer!.user.firstName, post.organizer!.user.lastName )}</h4>
                                <p className="username">@{post.organizer!.user.username}</p>
                            </div>
                        </div>
                        <h2 className="main-text">{post.title}</h2>
                        <img src={`${process.env.REACT_APP_BUCKET_URL}post-pictures/${post.id}`} alt="Post" 
                            onError={e => e.currentTarget.style.display = "none"} className="my-4" />
                        <p>{post.content}</p>
                    </div>)}
                </div>
            )
        }
    </div>
}

export default FeedPage