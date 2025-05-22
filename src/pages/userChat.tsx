import { Fragment, useCallback, useEffect, useMemo, useState } from "react"
import { RiCheckDoubleLine, RiCheckLine } from "react-icons/ri"
import { useParams } from "react-router-dom"
import { HashLoader } from "react-spinners"
import UserImage from "~/components/images/userImage"
import SendMessage from "~/components/misc/sendMessage"
import BackButton from "~/components/routes/backButton"
import { LOADER_COLOR } from "~/constants"
import { useChatMessagesSubscription, useGetUserChatQuery, useLastOpenSubscription, WsChatMessageType } from "~/graphql/generated"
import { setDocumentTitle } from "~/hooks/useDocumentTitle"
import { displayName } from "~/utils/displayName"
import { prependZero } from "~/utils/timeUtils"

function UserChat () {

    const { userId } = useParams()
    const { data, loading } = useGetUserChatQuery({
        variables: { userId: parseInt(userId!) },
        skip: !userId
    })
    
    const [messages, setMessages] = useState<WsChatMessageType[]>([])
    const [lastOpen, setLastOpen] = useState(new Date("1971-01-01"))

    const chat = useMemo(() => {
        return data?.userChat
    }, [data])

    const member = useMemo(() => {
        if (chat?.members) {
            const member = chat.members[0]
            setDocumentTitle(displayName(member?.user.username!, member?.user.firstName!, member?.user.lastName!) + " - Chat")
            return member
        }
    }, [chat])

    const { data: messageSubData, loading: messageSubLoading } = useChatMessagesSubscription({
        variables: { chatId: chat?.id! },
        skip: !chat?.id 
    })

    const { data: lastOpenData, loading: lastOpenLoading } = useLastOpenSubscription({
        variables: { chatId: chat?.id! },
        skip: !chat?.id 
    })

    const addNewMessage = useCallback((message: WsChatMessageType) => {
        setMessages(p => [...p, message])
    }, [setMessages])

    useEffect(() => {
        if (Array.isArray(messageSubData?.chatMessages)) {
            setMessages(p => [...p.filter(m => m.id !== null), ...messageSubData!.chatMessages as any])
        }
    }, [messageSubData, setMessages])

    useEffect(() => {
        if (lastOpenData?.chatLastOpen && lastOpenData.chatLastOpen[0]?.userId === member?.user.id) {
            setLastOpen(lastOpenData.chatLastOpen[0]?.lastOpen!)
        }
    }, [lastOpenData, setLastOpen, member])

    let lastDate = new Date("1971-01-01")

    const messageElements = messages.map(message => {
                            const dateElement = 
                                message.timeSent!.toDateString() !== lastDate.toDateString() ?
                                <p className="self-center text-sm font-medium" key={message.id + "date"}>{message.timeSent!.toDateString()}</p> :
                                <></>
                            lastDate = message.timeSent!
                            return <Fragment key={message.id}>
                                {
                                message.userId === member?.user.id ?
                                <div className="flex gap-4">
                                    <UserImage canChange={false} userId={message.userId!} className="w-10 h-10 rounded-full" />
                                    <div className="relative p-[10px] pr-12 font-medium bg-block max-w-[75%] break-words rounded-[15px]">
                                        <p>{message.textContent}</p>
                                        <span className="text-xs absolute right-[10px] bottom-[10px]">
                                            {`${prependZero(message.timeSent!.getHours())}:${prependZero(message.timeSent!.getMinutes())}`}
                                        </span>
                                        {message.attachmentUrl && <img src={message.attachmentUrl} alt={message.id!+""} className="rounded-[15px] mt-2" />}
                                    </div>
                                </div>
                                :
                                <div className="relative p-[10px] font-medium bg-accent text-background pr-16 self-end max-w-[75%] break-words rounded-[15px]">
                                    <p>{message.textContent}</p>
                                    <span className="text-xs absolute right-[10px] bottom-[10px]">
                                        {`${prependZero(message.timeSent!.getHours())}:${prependZero(message.timeSent!.getMinutes())}`}
                                        {
                                            lastOpen.getTime() > message.timeSent!.getTime() ?
                                            <RiCheckDoubleLine className="inline ml-[2px]"/> :
                                            <RiCheckLine className={"inline ml-[2px] " + (message.id === null && "text-foreground")} />
                                        }
                                    </span>
                                    {message.attachmentUrl && <img src={message.attachmentUrl} alt={message.id!+""} className="rounded-[15px] mt-2" />}
                                </div>
                                }
                                {dateElement}
                            </Fragment>
                        })

    return <div className="vertical">
        <nav className="my-8 grid grid-cols-8">
            <BackButton />
            {
                member && 
                <h2 className="text-center text-2xl col-span-6">
                    {displayName(member.user.username, member.user.firstName, member.user.lastName)}
                </h2>
            }
        </nav>
        {
            loading || messageSubLoading || lastOpenLoading ?
            <div className="vertical justify-center items-center">
                <HashLoader color={LOADER_COLOR} />
            </div> :
            <div className="vertical">
                <div className="vertical gap-4">
                    <div className="grow overflow-y-auto flex flex-col-reverse gap-4">
                    {
                        messageElements.reverse()
                    }
                    </div>
                </div>
                <SendMessage chatId={chat?.id!} addMessage={addNewMessage} />
            </div>
        }
    </div>
}

export default UserChat