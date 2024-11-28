import { Link } from 'react-router-dom';
import { Calendar, Car, Plane, Map } from 'lucide-react';

const exploreOptions = [
  {
    id: 'events',
    title: 'Local Events',
    description: 'Discover exciting events and activities happening around you',
    icon: Calendar,
    path: '/events'
  },
  {
    id: 'cars',
    title: 'Car Rentals',
    description: 'Find the perfect vehicle for your journey',
    icon: Car,
    path: '/cars'
  },
  {
    id: 'flights',
    title: 'Flight Booking',
    description: 'Search and book flights at the best prices',
    icon: Plane,
    path: '/flights'
  },
  {
    id: 'guides',
    title: 'Local Guides',
    description: 'Connect with experienced local guides',
    icon: Map,
    path: '/guides'
  }
];

export default function ExploreOptions() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Everything You Need</h2>
        <p className="text-lg sm:text-xl text-gray-600">All your travel needs in one place</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {exploreOptions.map((option) => (
          <Link
            key={option.id}
            to={option.path}
            className="group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex sm:flex-col items-center sm:text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-0 sm:mb-6 mr-4 sm:mr-0 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 group-hover:text-black transition-colors" />
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-3">{option.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{option.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}