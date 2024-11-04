import { useParams } from "react-router-dom";
import { FEATURED_DESTINATIONS } from "../components/FeaturedDestinations";
import { Star, MapPin } from "lucide-react";

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
          <div
            key={stay.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{stay.title}</h3>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="ml-1">{stay.rating}</span>
                  <span className="text-gray-500 ml-1">({stay.reviews})</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {destination.city}, {destination.country}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{stay.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${stay.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
