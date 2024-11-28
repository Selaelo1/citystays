import { useState } from "react";
import { MapPin } from "lucide-react";

const POPULAR_CITIES = [
  "Cape Town, South Africa",
  "Johannesburg, South Africa",
  "Durban, South Africa",
  "Pretoria, South Africa",
  "Port Elizabeth, South Africa",
  "Stellenbosch, South Africa",
  "Kruger National Park, South Africa",
  "Bloemfontein, South Africa"
];

interface LocationSearchProps {
  onSelect: (location: string) => void;
}

export default function LocationSearch({ onSelect }: LocationSearchProps) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCities = POPULAR_CITIES.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
        <MapPin className="text-gray-500" />
        <div className="flex-1">
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
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              {search ? 'Search results' : 'Popular destinations'}
            </h3>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <button
                  key={city}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-md"
                  onClick={() => {
                    setSearch(city);
                    onSelect(city);
                    setShowDropdown(false);
                  }}
                >
                  <MapPin size={16} className="text-gray-400" />
                  <span>{city}</span>
                </button>
              ))
            ) : (
              <div className="text-sm text-gray-500 p-2">
                No destinations found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}