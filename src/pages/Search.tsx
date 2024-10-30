import { useLocation } from "react-router-dom";
import { Star, Wifi, Car, Tv, Snowflake, Coffee, Waves } from "lucide-react";

interface SearchState {
  location: string;
  dates: string;
  guests: number;
  dateRange: {
    from: Date;
    to: Date;
  };
  guestDetails: {
    adults: number;
    children: number;
  };
}

const mockListings = [
  {
    id: 1,
    title: "Luxury Villa with Ocean Views",
    location: "Cape Town, South Africa",
    price: 250,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1577093661837-71d73c7ea66c?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "pool", "ac"],
    description:
      "Stunning villa overlooking the Atlantic Ocean with Table Mountain views. Perfect for families and groups.",
  },
  {
    id: 2,
    title: "Modern Sandton Apartment",
    location: "Johannesburg, South Africa",
    price: 180,
    rating: 4.8,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "ac"],
    description:
      "Contemporary apartment in the heart of Sandton, close to shopping and business district.",
  },
  {
    id: 3,
    title: "Beachfront Paradise",
    location: "Durban, South Africa",
    price: 195,
    rating: 4.7,
    reviews: 83,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "pool", "beach"],
    description:
      "Beautiful beachfront property with direct access to the Golden Mile. Perfect for beach lovers.",
  },
  {
    id: 4,
    title: "Safari Lodge Experience",
    location: "Kruger National Park, South Africa",
    price: 450,
    rating: 5.0,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "pool", "safari"],
    description:
      "Luxury safari lodge offering an authentic African wildlife experience with modern comforts.",
  },
  {
    id: 5,
    title: "Wine Country Villa",
    location: "Stellenbosch, South Africa",
    price: 280,
    rating: 4.8,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "pool", "vineyard"],
    description:
      "Charming villa in the heart of wine country with vineyard views and wine tasting experiences.",
  },
  {
    id: 6,
    title: "Garden Route Retreat",
    location: "Knysna, South Africa",
    price: 220,
    rating: 4.9,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    amenities: ["wifi", "parking", "tv", "kitchen", "pool", "nature"],
    description:
      "Peaceful retreat overlooking the Knysna Lagoon with access to nature trails and water activities.",
  },
];

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  tv: Tv,
  ac: Snowflake,
  beach: Waves,
  coffee: Coffee,
};

export default function Search() {
  const location = useLocation();
  const searchParams = location.state as SearchState;

  // If no location is specified, show all South African listings
  const filteredListings = searchParams?.location
    ? mockListings.filter((listing) =>
        listing.location
          .toLowerCase()
          .includes(searchParams.location.toLowerCase())
      )
    : mockListings;

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {searchParams?.location
            ? `Stays in ${searchParams.location}`
            : "Popular Stays in South Africa"}
        </h1>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            {searchParams?.dates && `${searchParams.dates} · `}
            {searchParams?.guests && `${searchParams.guests} guests`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={listing.image}
                alt={listing.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{listing.title}</h3>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-current" />
                  <span>{listing.rating}</span>
                  <span className="text-gray-500">({listing.reviews})</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{listing.description}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {listing.amenities.map((amenity) => {
                  const Icon =
                    amenityIcons[amenity as keyof typeof amenityIcons];
                  return Icon ? (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-sm text-gray-600"
                    >
                      <Icon size={16} />
                      <span className="capitalize">{amenity}</span>
                    </div>
                  ) : null;
                })}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">${listing.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
