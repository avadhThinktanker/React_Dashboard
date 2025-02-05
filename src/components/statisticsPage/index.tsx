import TodayRevenue from "../revenue";
import Statistics from "../staticstics";
import VisitsChart from "../totlevisit-chart";
import Today from "../userstaus";

const StatisticsPage = () => {
    return (
        <div className="w-full bg-gray-100 min-h-screen p-4 overflow-hidden ">
            <div className=" grid grid-cols-1  lg:grid-cols-3 gap-4 ">
                <Today />
                <TodayRevenue />
                <Statistics />
                <VisitsChart />
            </div>
        </div>
    );
};

export default StatisticsPage;
