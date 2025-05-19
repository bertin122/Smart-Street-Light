import React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <header className="bg-white p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="p-1 mr-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full text-sm w-64"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-1 relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center ml-4">
          <div className="w-8 h-8 rounded-full bg-blue-200 mr-2">
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Nikhil Ray</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
