import CircularProgress from "../circularProgress"

const Today = () => {
    const onlineUser: number = 179;
    const offlineUser: number = 394
    return (
        <div className="bg-white rounded-lg p-4 w-full">
            <h2 className=" font-medium ">User Today</h2>
            <div className="flex mt-8 justify-center items-center gap-6">
                <CircularProgress
                    value={573}
                    size={160}
                    thickness={16}
                    label="user"
                />
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <div className="w-[13px] h-[50px] bg-[#EDEFF1] rounded-md "></div>
                        <div>
                            <h3 className=" mb-1">Offline</h3>
                            <div className="flex gap-1">

                                <span className="font-semibold">{offlineUser}</span>
                                <span className="text-gray-500 ">users</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[13px] h-[50px] bg-[#FF5961] rounded-md "></div>
                        <div>
                            <h3 className=" mb-1">Online</h3>
                            <div className="flex gap-1">

                                <span className="font-semibold">{onlineUser}</span>
                                <span className="text-gray-500 ">users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Today