import FeaturedDestinationCard from './FeaturedDestinationCard';
import { FEATURED_DESTINATIONS } from '../../data/destinations';

export default function FeaturedDestinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Featured African Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {FEATURED_DESTINATIONS.map((destination) => (
          <FeaturedDestinationCard key={destination.city} destination={destination} />
        ))}
      </div>
    </div>
  );
}