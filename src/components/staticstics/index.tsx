import CircularProgress from "../circularProgress";
import TimeView from "../timechart";

const Statistics = () => {
    const subscriber = 14855;
    const views = 211456;
    return (
        <div className="bg-white p-4 rounded-lg max-h-[570px] lg:row-span-2">
            <div>
                <h1 className="font-medium">Staticstics</h1>
            </div>
            <div className="flex justify-around p-4 xl:justify-center gap-10">
                <div className="flex flex-col items-center">
                    <CircularProgress value={500} thickness={8} size={78} />
                    <div className="text-center py-4">
                        <p className="text-[#5B6176] text-sm">Subscribes</p>
                        <p className="font-semibold">{subscriber.toLocaleString("en-US")}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <CircularProgress value={200} thickness={8} size={78} />
                    <div className="text-center py-4">
                        <p className="text-[#5B6176] text-sm">View</p>
                        <p className="font-semibold">{views.toLocaleString('en-US')}</p>
                    </div>
                </div>
            </div>
            <hr className="border-t text-[#F4F4F5]" />
            <div className="h-fit w-full">
                <TimeView />
            </div>
        </div>
    );
};

export default Statistics;
