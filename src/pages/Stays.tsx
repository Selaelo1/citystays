import { useState } from "react";
import { Link } from "react-router-dom";
import { SAMPLE_STAYS, Stay } from "../data/StayData";
import { Star } from "lucide-react";

function Stays() {
  const [stays] = useState<Stay[]>(SAMPLE_STAYS);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Places to stay</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stays.map((stay) => (
          <Link
            key={stay.id}
            to={`/stays/${stay.id}`}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={stay.images[0]}
              alt={stay.title}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{stay.title}</h2>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="ml-1">
                  {stay.rating} ({stay.reviews} reviews)
                </span>
              </div>
              <p className="mt-1 font-bold">${stay.price} per night</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Stays;
