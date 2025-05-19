import React from "react";

const RecentLightsPage: React.FC = () => {
  const recentLights = [
    {
      id: 1,
      name: "Entrance Light",
      status: "Active",
      lastUpdated: "5 mins ago",
    },
    {
      id: 2,
      name: "Kitchen Light",
      status: "Inactive",
      lastUpdated: "10 mins ago",
    },
    {
      id: 3,
      name: "Living Room Light",
      status: "Active",
      lastUpdated: "15 mins ago",
    },
    {
      id: 4,
      name: "Bedroom Light",
      status: "Faulty",
      lastUpdated: "1 hour ago",
    },
    {
      id: 5,
      name: "Bathroom Light",
      status: "Active",
      lastUpdated: "2 hours ago",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recent Lights</h2>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {recentLights.map((light) => (
              <tr key={light.id} className="border-b">
                <td className="py-3 px-4">{light.name}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      light.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : light.status === "Faulty"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {light.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{light.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentLightsPage;
