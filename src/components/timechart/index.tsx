import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const TimeView = () => {
    const data = [
        { month: 'Jan', value: 0 },
        { month: 'Feb', value: 18 },
        { month: 'Mar', value: 22 },
        { month: 'Apr', value: 25 },
        { month: 'May', value: 30 },
        { month: 'Jun', value: 35 },
        { month: 'Jul', value: 32 },
        { month: 'Aug', value: 38 },
        { month: 'Sep', value: 28 },
        { month: 'Oct', value: 35 },
        { month: 'Nov', value: 30 },
        { month: 'Dec', value: 25 }
    ];

    return (
        <div className='mt-4' >
            <div className=" mb-4">
                <h2 className="text-lg font-semibold">Time View</h2>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#666', fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={true}
                            tickLine={false}
                            tick={{ fill: '#666', fontSize: 12 }}
                            ticks={[15, 20, 25, 30, 35, 40]}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#FF4D4F"
                            strokeWidth={2}
                            dot={true}
                            activeDot={{ r: 6, fill: "#FF4D4F" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TimeView;