import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", value: 2 },
    { month: "Feb", value: 5 },
    { month: "Mar", value: 12 },
    { month: "Apr", value: 10 },
    { month: "May", value: 15 },
    { month: "Jun", value: 18 },
    { month: "Jul", value: 22 },
    { month: "Aug", value: 20 },
    { month: "Sep", value: 17 },
    { month: "Oct", value: 25 },
    { month: "Nov", value: 12 },
    { month: "Dec", value: 50 },
];

const Timeview: React.FC = () => {
    return (
        <div className="border-t border-gray-100 pt-6">
            <h3 className="font-medium mb-4 text-gray-800">Time View</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#eee"
                        />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: "#666" }}
                            tickLine={{ stroke: "#ccc" }}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: "#666" }}
                            tickLine={{ stroke: "#ccc" }}
                            domain={[0, "auto"]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#FF5961"
                            strokeWidth={2}
                            dot={{ fill: "#FF5961", strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Timeview;
