import { UserFragment } from "~/graphql/generated"
import { displayName } from "~/utils/displayName"
import { getAge } from "~/utils/timeUtils"
import UserImage from "../images/userImage"
import { HiThumbDown, HiThumbUp } from "react-icons/hi"
import { Link } from "react-router-dom"
import { HiCog6Tooth } from "react-icons/hi2"
import BackButton from "../routes/backButton"

function UserView({user, isSelf}: UserViewProps) {

    const name = displayName(user.username, user.firstName, user.lastName)

    return <div className="h-full flex flex-col gap-3">
        <div className="flex mt-8 mb-4">
            {
                isSelf ?
                <Link to="/settings" className="ml-auto">
                   <HiCog6Tooth className="text-3xl self-end" /> 
                </Link> :
                <BackButton />
            }
        </div>
        <div className="flex gap-4">
            <UserImage userId={user.id!} canChange={isSelf} className="aspect-square w-20 rounded-full bg-accent" />
            <div className="h-full flex flex-col">
                <h2 className="main-text !mb-1">{name}</h2>
                <p className="text-accent text-lg">@{user.username}</p>
            </div>
            
        </div>
        <p className="text-lg">
            {user.bio}
        </p>
        <div className="text-accent [&>p]:mr-4 flex">
            { user.dateOfBirth && <p>Age: {getAge(user.dateOfBirth)}</p> }
            { user.gender && <p>{user.gender.toLocaleLowerCase()}</p> }
        </div>
        <div className="flex [&>*]:mr-4 items-center font-medium">
            <p>{user.friendCount} friends</p>
            <div className="flex px-2 py-1 gap-1 items-center text-background rounded-full bg-block-accent">
                <HiThumbUp />
                <span>{user.likes}</span>
            </div>
            <div className="flex px-2 py-1 gap-1 items-center text-background rounded-full bg-block-accent">
                <HiThumbDown />
                <span>{user.dislikes}</span>
            </div>
        </div>
        {
            isSelf && <Link to='/profile-setup'><button>setup profile</button></Link>
        }
    </div>
}

export default UserView

interface UserViewProps {
    user: UserFragment
    isSelf: boolean
}