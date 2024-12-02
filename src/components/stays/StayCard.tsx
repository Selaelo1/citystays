import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Stay } from "../../types/destination";
import type { Destination } from "../../types/destination";

interface StayCardProps {
  stay: Stay;
  location: Destination;
}

export default function StayCard({ stay, location }: StayCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
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
            {location.city}, {location.country}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{stay.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${stay.price}</span>
            <span className="text-gray-500"> / night</span>
          </div>
          <Link
            to={`/stays/${stay.id}/book`}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}