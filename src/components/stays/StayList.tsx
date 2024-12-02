import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Stay } from "../../data/StayData";

interface StayListProps {
  stays: Stay[];
}

export default function StayList({ stays }: StayListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stays.map((stay) => (
        <Link
          key={stay.id}
          to={`/stays/${stay.id}`}
          className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <img
            src={stay.images[0]}
            alt={stay.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{stay.title}</h2>
            <div className="flex items-center mb-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="ml-1">
                {stay.rating} ({stay.reviews} reviews)
              </span>
            </div>
            <p className="font-bold">${stay.price} per night</p>
          </div>
        </Link>
      ))}
    </div>
  );
}