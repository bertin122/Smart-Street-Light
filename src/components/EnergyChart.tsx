import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const energyData = [
  { time: "00:00", value: 30 },
  { time: "02:00", value: 45 },
  { time: "04:00", value: 30 },
  { time: "06:00", value: 55 },
  { time: "08:00", value: 40 },
  { time: "10:00", value: 30 },
  { time: "12:00", value: 20 },
  { time: "14:00", value: 40 },
  { time: "16:00", value: 60 },
  { time: "18:00", value: 70 },
  { time: "20:00", value: 60 },
  { time: "22:00", value: 50 },
];

const EnergyChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Energy Consumption</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              domain={[0, 100]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 4, fill: "#6366F1", stroke: "white", strokeWidth: 2 }}
              activeDot={{
                r: 6,
                fill: "#6366F1",
                stroke: "white",
                strokeWidth: 2,
              }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 bg-blue-600 text-white rounded-lg p-2 inline-block">
          <p className="text-xs">Users</p>
          <p className="text-lg font-bold">2,678</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyChart;
