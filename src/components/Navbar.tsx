import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, User, Globe } from "lucide-react";
import DatePicker from "./DatePicker";
import LocationSearch from "./LocationSearch";

export default function Navbar() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchParams, setSearchParams] = useState({
    location: "",
    dates: "",
    guests: 1,
  });

  const handleSearch = () => {
    navigate("/search", {
      state: searchParams,
    });
    setShowSearch(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <div
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center w-full border border-gray-300 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex-1 flex items-center divide-x divide-gray-300">
                <span className="pr-4">
                  {searchParams.location || "Anywhere"}
                </span>
                <span className="px-4">{searchParams.dates || "Any week"}</span>
                <span className="pl-4 text-gray-600">
                  {searchParams.guests} guest
                  {searchParams.guests !== 1 ? "s" : ""}
                </span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleSearch();
                }}
                className="bg-black p-2 rounded-full text-white cursor-pointer"
              >
                <Search size={16} />
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div
            className="md:hidden flex items-center space-x-2 border border-gray-300 rounded-full p-2 cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </div>

          {/* Language Selector and User Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center px-4 py-2 rounded-full hover:shadow-md transition-all cursor-pointer">
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-sm">EN</span>
            </div>

            <div className="relative">
              <div
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-all cursor-pointer"
              >
                <Menu size={18} />
                <User size={18} />
              </div>

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
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-lg">
          <div className="max-w-3xl mx-auto space-y-4">
            <LocationSearch
              onSelect={(location) =>
                setSearchParams((prev) => ({ ...prev, location }))
              }
            />
            <DatePicker
              onSelect={(dates) =>
                setSearchParams((prev) => ({ ...prev, dates }))
              }
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Guests</label>
                <div className="flex items-center space-x-2">
                  <button
                    className="p-1 border rounded-md"
                    onClick={() =>
                      setSearchParams((prev) => ({
                        ...prev,
                        guests: Math.max(1, prev.guests - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <span>{searchParams.guests}</span>
                  <button
                    className="p-1 border rounded-md"
                    onClick={() =>
                      setSearchParams((prev) => ({
                        ...prev,
                        guests: prev.guests + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
