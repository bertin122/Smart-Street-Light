import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isUp: boolean;
  period: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isUp,
  period,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <div className="flex items-center text-xs">
        <span
          className={`${
            isUp ? "text-green-500" : "text-red-500"
          } flex items-center`}
        >
          {isUp ? "↑" : "↓"} {Math.abs(change)}%
        </span>
        <span className="text-gray-500 ml-1">from {period}</span>
      </div>
    </div>
  );
};

export default StatCard;
