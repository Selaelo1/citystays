import { useState } from "react";
import { MapPin } from "lucide-react";

const POPULAR_CITIES = [
  "New York, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Dubai, UAE",
];

export default function LocationSearch() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
        <MapPin className="text-gray-500" />
        <div>
          <div className="font-medium">Where</div>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
        </div>
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Popular destinations
            </h3>
            {POPULAR_CITIES.map((city) => (
              <button
                key={city}
                className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-md"
                onClick={() => {
                  setSearch(city);
                  setShowDropdown(false);
                }}
              >
                <MapPin size={16} className="text-gray-400" />
                <span>{city}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
