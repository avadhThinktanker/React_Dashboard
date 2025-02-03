import TodayRevenue from "../revenue";
import Statistics from "../staticstics";
import Today from "../userstaus";

const StatisticsPage = () => {
    return (
        <div className="w-full bg-gray-100 min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Today />
                    <TodayRevenue />
                    <Statistics />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
