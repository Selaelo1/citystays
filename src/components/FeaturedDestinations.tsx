import { Link } from 'react-router-dom';
import { FEATURED_DESTINATIONS } from '../data/destinations';

export default function FeaturedDestinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Featured African Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {FEATURED_DESTINATIONS.map((destination) => (
          <Link
            key={destination.city}
            to={`/destination/${destination.city.toLowerCase().replace(' ', '-')}`}
            className="group cursor-pointer relative rounded-xl overflow-hidden"
          >
            <div className="aspect-w-3 aspect-h-4 sm:aspect-w-1 sm:aspect-h-1">
              <img
                src={destination.image}
                alt={destination.city}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <div className="text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{destination.city}</h3>
                  <p className="text-sm sm:text-base opacity-90 line-clamp-2">{destination.description}</p>
                  <div className="mt-2 sm:mt-3 inline-flex items-center text-sm">
                    <span className="text-white/90">{destination.stays.length} properties</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}