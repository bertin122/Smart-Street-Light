import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardPage from "../pages/DashboardPage";
import RecentLightsPage from "../pages/RecentLightsPage";
import SettingsPage from "../pages/SettingsPage";
import UsersManagement from "../components/UsersManagement";

const DashboardLayout: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <DashboardPage />;
      case "recent-lights":
        return <RecentLightsPage />;
      case "settings":
        return <SettingsPage />;
      case "users-management":
        return <UsersManagement />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Content area */}
        <main className="p-4">{renderComponent()}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
