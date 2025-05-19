import { useState } from "react";

export default function UserManagement() {
  const [users] = useState([
    {
      id: 1,
      name: "Leslie Maya",
      email: "leslie@gmail.com",
      location: "Los Angeles,CA",
      joined: "October 2, 2010",
      permissions: "Admin",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Josie Deck",
      email: "josie@gmail.com",
      location: "Cheyenne,WY",
      joined: "October 3, 2011",
      permissions: "Admin",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Alex Pfeiffer",
      email: "alex@gmail.com",
      location: "Cheyenne,WY",
      joined: "May 20, 2015",
      permissions: "Admin",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      name: "Mike Dean",
      email: "mike@gmail.com",
      location: "Syracuse,NY",
      joined: "July 14, 2015",
      permissions: "Technician",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 5,
      name: "Mateus Cunha",
      email: "cunha@gmail.com",
      location: "Luanda,AN",
      joined: "October, 2016",
      permissions: "Technician",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      name: "Nzola Uemo",
      email: "nzola@gmail.com",
      location: "Lagos,NG",
      joined: "June 5, 2016",
      permissions: "Viewer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 7,
      name: "Antony Mack",
      email: "mack@gmail.com",
      location: "London,ENG",
      joined: "June 15, 2015",
      permissions: "Technician",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 8,
      name: "André da Silva",
      email: "andré@gmail.com",
      location: "São Paulo,BR",
      joined: "March 13, 2018",
      permissions: "Technician",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 9,
      name: "Jorge Ferreira",
      email: "jorge@gmail.com",
      location: "Huambo,Angola",
      joined: "March 14, 2018",
      permissions: "Technician",
      avatar: "/api/placeholder/40/40",
    },
  ]);

  const getPermissionColor = (permission: string) => {
    switch (permission) {
      case "Admin":
        return "bg-blue-500";
      case "Technician":
        return "bg-blue-400";
      case "Viewer":
        return "bg-blue-300";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Management
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <span className="mr-1">+</span>
          New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Email Address</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Joined</th>
              <th className="py-3 px-4 text-left">Permissions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  {user.name}
                </td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-gray-800 rounded-full mr-2"></span>
                    {user.location}
                  </div>
                </td>
                <td className="py-3 px-4">{user.joined}</td>
                <td className="py-3 px-4">
                  <span
                    className={`${getPermissionColor(
                      user.permissions
                    )} text-white px-2 py-1 rounded text-sm`}
                  >
                    {user.permissions}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
