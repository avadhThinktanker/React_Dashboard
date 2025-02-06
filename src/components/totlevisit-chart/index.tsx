import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const VisitsChart = () => {
    const data = [
        { day: "1", visits: 4000, forecast: 3000 },
        { day: "5", visits: 3000, forecast: 1398 },
        { day: "10", visits: 2000, forecast: 9800 },
        { day: "15", visits: 2780, forecast: 3908 },
        { day: "20", visits: 1890, forecast: 4800 },
        { day: "25", visits: 2390, forecast: 3800 },
        { day: "30", visits: 3490, forecast: 4300 },
    ];

    const formatYAxis = (value: number): string | number => {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}K`;
        }
        return value;
    };

    return (
        <div className="w-full h-[290px] bg-white p-4 rounded-lg shadow-sm lg:col-span-2 ">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                    <h2 className=" font-medium">Total Visits</h2>
                    <span className="text-gray-700 cursor-help hover:text-gray-600 transition-colors">ⓘ</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <span className="text-red-500 font-medium">November 2022</span>
                </div>
            </div>

            <div className="w-full h-[calc(100%-3rem)]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF5961" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#FF5961" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#151718" stopOpacity={0} />
                                <stop offset="95%" stopColor="#151718" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="day"
                            axisLine={true}
                            tickLine={true}
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            tickFormatter={formatYAxis}
                            axisLine={false}
                            tickLine={false}
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="forecast"
                            stroke="#94a3b8"
                            strokeDasharray="5 5"
                            fill="url(#colorForecast)"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="visits"
                            stroke="#ff6b6b"
                            fill="url(#colorVisits)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default VisitsChart;