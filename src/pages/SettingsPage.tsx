import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dashboard Theme
              </label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Refresh Rate
              </label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Every 10 seconds</option>
                <option>Every 30 seconds</option>
                <option>Every minute</option>
                <option>Every 5 minutes</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="email-notif" className="mr-2" />
              <label htmlFor="email-notif">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="push-notif" className="mr-2" />
              <label htmlFor="push-notif">Push Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="alert-faulty" className="mr-2" />
              <label htmlFor="alert-faulty">Alert on Faulty Lights</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
