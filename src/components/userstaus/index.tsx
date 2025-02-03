import CircularProgress from "../circularProgress"


const Today = () => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">User Today</h2>
            <div className="flex items-center gap-9">
                <CircularProgress
                    value={573}
                    maxValue={1000}
                    size={180}
                    thickness={16}
                    primaryColor="#FF4D4F"
                    backgroundColor="#F5F5F5"
                    label="user"
                />
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-lg mb-1">Offline</h3>
                        <div>
                            <span className="text-xl font-semibold">394</span>
                            <span className="text-gray-500 ml-1">users</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg mb-1">Online</h3>
                        <div>
                            <span className="text-xl font-semibold">394</span>
                            <span className="text-gray-500 ml-1">users</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Today