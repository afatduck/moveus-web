import { useMemo, useState } from "react"
import { RiCheckDoubleLine, RiCheckLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { HashLoader } from "react-spinners"
import UserImage from "~/components/images/userImage"
import { LOADER_COLOR } from "~/constants"
import { useMyChatsQuery, useMyFriendsQuery } from "~/graphql/generated"
import useDocumentTitle from "~/hooks/useDocumentTitle"
import { displayName } from "~/utils/displayName"
import { timeAgo } from "~/utils/timeUtils"

type ChatPageTab = "chats" | "friends"

function ChatPage() {

    useDocumentTitle("Chats")

    const [tab, setTab] = useState<ChatPageTab>("chats")
    
    const { data: unfilteredChats, loading: chatsLoading } = useMyChatsQuery({fetchPolicy: "network-only"})
    const { data: friends, loading: friendsLoading } = useMyFriendsQuery({fetchPolicy: "network-only"})

    const chats = useMemo(() => {
        return unfilteredChats?.myChats?.filter(
            c => c?.lastMessage
        ).sort(
            (a, b) => b!.lastMessage!.timeSent!.getTime() - a!.lastMessage!.timeSent!.getTime()
        )
    }, [unfilteredChats])

    return <div className="vertical">
        <div className="flex border-b border-foreground border-solid text-center justify-between py-2 mb-8">
            <p  onClick={() => setTab("chats")}
                className={(tab === "chats" ? "text-block-accent" : "") + " w-full cursor-pointer font-medium text-lg"}>
                chats
            </p>
            <p  onClick={() => setTab("friends")}
                className={(tab === "friends" ? "text-block-accent" : "") + " w-full cursor-pointer font-medium text-lg"}>
                friends
            </p>
        </div>
        {
            tab === "chats" ?
            (
                chatsLoading ?
                <HashLoader color={LOADER_COLOR} className="mx-auto mt-24" /> :
                <div className="overflow-auto pb-8 flex-1 flex flex-col gap-3">
                    {chats?.length === 0 && <p className="text-center text-sm">no chats</p>}
                    {
                        chats?.map(chat => 
                        <Link key={chat?.id} className="p-6 rounded-[15px] relative bg-block block w-full box-border"
                              to={`/chat/${chat?.members[0]!.user.id}`}>
                            <span className="absolute top-6 right-6 text-[10px] font-medium">{timeAgo(chat?.lastMessage?.timeSent!)}</span>
                            <div className="flex gap-4 font-medium relative items-center">
                                <UserImage canChange={false} userId={chat?.members[0]!.user.id!} className="w-10 h-10 rounded-full" />
                                <div className="max-w-[55%] overflow-hidden">
                                    <h5>
                                        {displayName(chat?.members[0]!.user.username!, chat?.members[0]!.user.firstName!, chat?.members[0]!.user.lastName!)}
                                    </h5>
                                    <p className="text-xs">
                                        {
                                            chat?.lastMessage?.user.id !== chat?.members[0]!.user.id && (
                                                chat!.lastMessage!.timeSent.getTime() > (chat?.members[0]!.lastOpen ?? new Date("1971-01-01")).getTime() ?
                                                <RiCheckLine className={"text-lg inline mr-1"} /> :
                                                <RiCheckDoubleLine className="text-lg inline mr-1" />
                                            )
                                        }
                                        {chat?.lastMessage?.textContent ? chat?.lastMessage?.textContent : <i>'attachment'</i>}
                                    </p>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            )
            :
            friendsLoading ?
            <HashLoader color={LOADER_COLOR} className="mx-auto mt-24" /> :
            <div className="overflow-auto pb-8 flex-1 flex flex-col gap-8">
                {friends?.friends?.length === 0 && <p className="text-center text-sm">no friends</p>}
                {
                    friends?.friends?.map(friend => 
                        <Link key={friend?.user?.id} className="flex gap-4 items-center w-full" to={`/user/${friend?.user?.id}`}>
                            <UserImage canChange={false} userId={friend?.user?.id!} className="w-10 rounded-full" />
                            <div>
                                <h2 className="font-medium">
                                    {displayName(friend?.user?.username!, friend?.user?.firstName!, friend?.user?.lastName!)}
                                </h2>
                                <p className="text-sm mb-1">
                                    @{friend?.user?.username}
                                </p>
                            </div> 
                        </Link>
                    )
                }
            </div>
        }
    </div>
}

export default ChatPage
