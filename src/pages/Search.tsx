import { useLocation, Link } from "react-router-dom";
import { Star, Wifi, Car, Tv, Snowflake, Coffee, Waves, MapPin, Calendar, Users } from "lucide-react";
import { SAMPLE_STAYS } from "../data/StayData";

interface SearchState {
  location: string;
  dates: string;
  guests: number;
}

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  tv: Tv,
  ac: Snowflake,
  coffee: Coffee,
  beach: Waves,
};

export default function Search() {
  const location = useLocation();
  const searchParams = location.state as SearchState;

  // Filter stays based on search parameters
  const filteredStays = SAMPLE_STAYS.filter((stay) => {
    const locationMatch = !searchParams?.location || 
      stay.location.city.toLowerCase().includes(searchParams.location.split(',')[0].toLowerCase());
    const guestsMatch = !searchParams?.guests || 
      stay.maxGuests >= searchParams.guests;
    return locationMatch && guestsMatch;
  });

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Search Summary */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {searchParams?.location
            ? `Stays in ${searchParams.location}`
            : "All Stays"}
        </h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex flex-wrap gap-4">
            {searchParams?.location && (
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                <span>{searchParams.location}</span>
              </div>
            )}
            {searchParams?.dates && (
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                <span>{searchParams.dates}</span>
              </div>
            )}
            {searchParams?.guests && (
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-1 text-gray-500" />
                <span>{searchParams.guests} guest{searchParams.guests !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        {filteredStays.length} stays found
      </p>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStays.map((stay) => (
          <Link
            key={stay.id}
            to={`/stays/${stay.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Image Carousel */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={stay.images[0]}
                alt={stay.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{stay.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span>{stay.rating}</span>
                  <span className="text-gray-500">({stay.reviews})</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{stay.description}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {stay.amenities.slice(0, 4).map((amenity) => {
                  const Icon = amenityIcons[amenity.toLowerCase() as keyof typeof amenityIcons];
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-sm text-gray-600"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${stay.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
                <div className="text-sm text-gray-600">
                  Up to {stay.maxGuests} guests
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredStays.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No stays found</h2>
          <p className="text-gray-600">
            Try adjusting your search criteria or exploring different dates
          </p>
        </div>
      )}
    </div>
  );
}