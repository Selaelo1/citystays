import { useParams } from "react-router-dom";
import { SAMPLE_STAYS, Stay } from "../data/StayData";
import { Star, MapPin, Share, Heart } from "lucide-react";

function StayDetails() {
  const { id } = useParams<{ id: string }>();
  const stay: Stay | undefined = SAMPLE_STAYS.find((stay) => stay.id === id);

  if (!stay) {
    return <div>Stay not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{stay.title}</h1>
      <div className="flex">
        {/* Main Image */}
        <img
          src={stay.images[0]}
          alt={stay.title}
          className="w-1/2 h-9/10 object-cover rounded-lg mr-4"
        />

        {/* Additional Images */}
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {stay.images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${stay.title} - ${index + 1}`}
              className="h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-500" />
        <span className="ml-1">
          {stay.rating} ({stay.reviews} reviews)
        </span>
      </div>
      <p className="text-lg mb-4">{stay.description}</p>
      <p className="text-lg font-bold">${stay.price} per night</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Host</h2>
        <div className="flex items-center">
          <img
            src={stay.host.avatar}
            alt={stay.host.name}
            className="w-12 h-12 rounded-full mr-2"
          />
          <span>{stay.host.name}</span>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-500" />
          <span className="ml-1">
            {stay.location.city}, {stay.location.country}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="list-disc ml-5">
          {stay.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Book Now
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded">
          <Heart className="h-4 w-4 inline" /> Save
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded">
          <Share className="h-4 w-4 inline" /> Share
        </button>
      </div>
    </div>
  );
}

export default StayDetails;
