import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import ExploreOptions from "../components/Exploreoptions";

const africanDestinations = [
  {
    city: "Cape Town",
    country: "South Africa",
    image:
      "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the stunning Table Mountain and vibrant waterfront.",
  },
  {
    city: "Zanzibar",
    country: "Tanzania",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80",
    description: "Discover pristine beaches and historic Stone Town.",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    image:
      "https://images.unsplash.com/photo-1708823081494-3e5bbd2ce931?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the magic of ancient medinas and souks.",
  },
  {
    city: "Victoria Falls",
    country: "Zimbabwe",
    image:
      "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Witness the power of one of the world's largest waterfalls.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Categories */}
      <Categories />

      {/* Featured African Destinations */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Featured African Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {africanDestinations.map((destination) => (
            <Link
              key={destination.city}
              to={`/stays?location=${destination.city}`}
              className="group cursor-pointer relative rounded-xl overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{destination.city}</h3>
                <p className="text-sm opacity-90">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Options */}
      <ExploreOptions />
    </div>
  );
}
