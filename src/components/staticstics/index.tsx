import CircularProgress from "../circularProgress"
import TimeView from "../timechart"

const Statistics = () => {
    return (
        <div className="bg-white p-6 rounded-lg">
            <div>
                <h1 className="text-lg font-semibold">Staticstics</h1>
            </div>
            <div className="flex justify-around p-4">
                <div className="flex flex-col items-center">
                    <CircularProgress value={500} thickness={12} />
                    <div className="text-center">
                        <p>Subscribes</p>
                        <b>14567</b>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <CircularProgress value={200} thickness={12} />
                    <div className="text-center">
                        <p>View</p>
                        <b>213456</b>
                    </div>
                </div>
            </div>
            <hr />
            <TimeView />
        </div>
    )
}

export default Statistics