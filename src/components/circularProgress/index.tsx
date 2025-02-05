import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface CircularProgressProps {
    value: number;
    maxValue?: number;
    size?: number;
    thickness?: number;
    primaryColor?: string;
    backgroundColor?: string;
    label?: string;
    labelClassName?: string;
    type?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    type,
    maxValue = 1000,
    size = 100,
    thickness = 20,
    primaryColor = "#FF5961",
    backgroundColor = "#EDEFF1",
    label = "",
}) => {
    const percentage = (value / maxValue) * 100;

    const data = [
        { name: "progress", value: percentage },
        { name: "remaining", value: 100 - percentage },
    ];

    return (
        <div className=" inline-block justify-center items-center ">
            {type === "revenue" && <h1 className="text-center ">{label}</h1>}
            <div className=" relative inline-flex justify-center items-center ">
                <PieChart width={size + 10} height={size + 10}>
                    <Pie
                        data={data}
                        cx={size / 2}
                        cy={size / 2}
                        innerRadius={size / 2 - thickness}
                        outerRadius={size / 2}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        cornerRadius={20}
                    >
                        <Cell fill={primaryColor} />
                        <Cell fill={backgroundColor} />
                    </Pie>
                </PieChart>
                {type === "revenue" && (
                    <div className="absolute  text-center">
                        <div className="text-sm">
                            {value}%
                        </div>
                    </div>
                )}
                {
                    !type && (
                        <div className="absolute  text-center">
                            <div className="text-2xl font-semibold">
                                {value}

                            </div>
                            <div className="text-gray-500 text-sm ">{label}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CircularProgress;
