import { useParams } from "react-router-dom";
import { FEATURED_DESTINATIONS } from "../data/destinations";
import { Star, MapPin } from "lucide-react";
import StayCard from "../components/stays/StayCard";

export default function DestinationStays() {
  const { city } = useParams<{ city: string }>();
  const destination = FEATURED_DESTINATIONS.find(
    (d) => d.city.toLowerCase().replace(" ", "-") === city
  );

  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Stays in {destination.city}, {destination.country}
        </h1>
        <p className="text-gray-600">{destination.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destination.stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} location={destination} />
        ))}
      </div>
    </div>
  );
}