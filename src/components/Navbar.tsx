import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User, Globe } from "lucide-react";
import DatePicker from "./DatePicker";
import LocationSearch from "./LocationSearch";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white border-b border-gray-200 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">CityStays</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center w-full border border-gray-300 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-1 flex items-center divide-x divide-gray-300">
                <span className="pr-4">Anywhere</span>
                <span className="px-4">Any week</span>
                <span className="pl-4 text-gray-600">Add guests</span>
              </div>
              <div className="bg-black p-2 rounded-full text-white">
                <Search size={16} />
              </div>
            </button>
          </div>

          {/* Language Selector and User Menu */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 rounded-full hover:shadow-md transition-all">
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-sm">EN</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-all"
              >
                <Menu size={18} />
                <User size={18} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                  <div className="py-1">
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <LocationSearch />
              <DatePicker />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
