import { Link } from "react-router-dom";
import { Calendar, Car, Plane, Map } from "lucide-react";

const exploreOptions = [
  {
    id: "events",
    title: "Local Events",
    description: "Discover exciting events and activities happening around you",
    icon: Calendar,
    path: "/events",
  },
  {
    id: "cars",
    title: "Car Rentals",
    description: "Find the perfect vehicle for your journey",
    icon: Car,
    path: "/cars",
  },
  {
    id: "flights",
    title: "Flight Booking",
    description: "Search and book flights at the best prices",
    icon: Plane,
    path: "/flights",
  },
  {
    id: "guides",
    title: "Local Guides",
    description: "Connect with experienced local guides",
    icon: Map,
    path: "/guides",
  },
];

export default function ExploreOptions() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
        <p className="text-xl text-gray-600">
          All your travel needs in one place
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {exploreOptions.map((option) => (
          <Link
            key={option.id}
            to={option.path}
            className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <option.icon className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
