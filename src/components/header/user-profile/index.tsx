interface UserProfileProps {
    userImg: string,
    userName: string,
    userClass: string
}

const UserProfile = ({ userImg = "", userName = "John Deo", userClass = "" }: UserProfileProps) => {

    return (
        <div className="flex gap-5 items-center ">
            <div>
                <img className="rounded-full" src={userImg} alt="user-image" width={40} />
            </div>
            <div>
                <h1 className="text-[#151718] text-pretty">{userName.toUpperCase()}</h1>
                <hr />
                <p className="text-[#5B6176] text-[8px]">{userClass.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default UserProfile