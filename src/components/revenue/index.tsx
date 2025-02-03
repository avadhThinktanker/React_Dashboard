import CircularProgress from "../circularProgress"

const TodayRevenue = () => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">Revenue by Location</h2>
            <div className="flex justify-center mb-8">
                <img
                    className="h-[100px] object-contain"
                    src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/react/react-map.png"
                    alt="World map showing revenue distribution"
                />
            </div>
            <div className="flex justify-between px-4">
                <div className="text-center">
                    <CircularProgress
                        value={60}
                        maxValue={100}
                        size={80}
                        thickness={8}
                        type="revenue"
                        label="USA"
                    />
                </div>
                <div className="text-center">
                    <CircularProgress
                        value={8}
                        maxValue={100}
                        size={80}
                        thickness={8}
                        type="revenue"
                        label="ASIA"
                    />
                </div>
                <div className="text-center">
                    <CircularProgress
                        value={33}
                        maxValue={100}
                        size={80}
                        thickness={8}
                        type="revenue"
                        label="EUROPE"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodayRevenue