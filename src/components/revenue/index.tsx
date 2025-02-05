import CircularProgress from "../circularProgress"
import map from "../../../public/svg/map.svg"

const TodayRevenue = () => {
    return (
        <div className="bg-white rounded-lg p-4 ">
            <h2 className="font-medium">Revenue by Location</h2>
            <div className="flex justify-center mt-3">
                <img
                    className=""
                    src={map}
                    alt="World map showing revenue distribution"
                />
            </div>
            <div className="flex justify-around mt-6">
                <div className="text-center">
                    <CircularProgress
                        value={60}
                        maxValue={100}
                        size={50}
                        thickness={6}
                        type="revenue"
                        label="Usa"
                    />
                </div>
                <div className="text-center">
                    <CircularProgress
                        value={8}
                        maxValue={100}
                        size={50}
                        thickness={6}
                        type="revenue"
                        label="Asia"
                    />
                </div>
                <div className="text-center">
                    <CircularProgress
                        value={33}
                        maxValue={100}
                        size={50}
                        thickness={6}
                        type="revenue"
                        label="Europe"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodayRevenue