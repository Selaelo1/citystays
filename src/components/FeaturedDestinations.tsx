import { Link } from "react-router-dom";

export interface Destination {
  city: string;
  country: string;
  image: string;
  description: string;
  stays: Stay[];
}

interface Stay {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    city: "Cape Town",
    country: "South Africa",
    image:
      "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the stunning Table Mountain and vibrant waterfront.",
    stays: [
      {
        id: "ct1",
        title: "Luxury Waterfront Apartment",
        description:
          "Modern apartment with stunning views of Table Mountain and the V&A Waterfront",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 124,
      },
      {
        id: "ct2",
        title: "Camps Bay Villa",
        description: "Beachfront villa with private pool and mountain views",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 98,
      },
      {
        id: "ct3",
        title: "City Bowl Penthouse",
        description: "Stylish penthouse in the heart of Cape Town",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 156,
      },
      {
        id: "ct4",
        title: "Green Point Modern Suite",
        description: "Contemporary suite near Cape Town Stadium",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
        rating: 4.6,
        reviews: 89,
      },
      {
        id: "ct5",
        title: "Sea Point Oceanview",
        description: "Beachfront apartment with panoramic ocean views",
        price: 220,
        image:
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 112,
      },
      {
        id: "ct6",
        title: "Woodstock Artist Loft",
        description: "Creative space in Cape Town's art district",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 76,
      },
    ],
  },
  {
    city: "Zanzibar",
    country: "Tanzania",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80",
    description: "Discover pristine beaches and historic Stone Town.",
    stays: [
      {
        id: "zb1",
        title: "Beach Villa Resort",
        description: "Private villa with direct beach access",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 145,
      },
      {
        id: "zb2",
        title: "Stone Town Heritage Hotel",
        description: "Historic hotel in the heart of Stone Town",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 92,
      },
      {
        id: "zb3",
        title: "Tropical Paradise Resort",
        description: "Luxury resort with private beach",
        price: 400,
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 167,
      },
      {
        id: "zb4",
        title: "Ocean View Bungalow",
        description: "Traditional bungalow with modern amenities",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        rating: 4.6,
        reviews: 78,
      },
      {
        id: "zb5",
        title: "Spice Garden Retreat",
        description: "Peaceful retreat surrounded by spice plantations",
        price: 220,
        image:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 104,
      },
      {
        id: "zb6",
        title: "Beachfront Suite",
        description: "Modern suite steps from the Indian Ocean",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 123,
      },
    ],
  },
  {
    city: "Marrakech",
    country: "Morocco",
    image:
      "https://images.unsplash.com/photo-1708823081494-3e5bbd2ce931?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the magic of ancient medinas and souks.",
    stays: [
      {
        id: "mr1",
        title: "Traditional Riad",
        description: "Authentic riad with courtyard and pool",
        price: 200,
        image:
          "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 178,
      },
      {
        id: "mr2",
        title: "Medina Palace Suite",
        description: "Luxury suite in restored palace",
        price: 350,
        image:
          "https://images.unsplash.com/photo-1520821147572-3df5f1b7c3d1?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 156,
      },
      {
        id: "mr3",
        title: "Desert View Villa",
        description: "Modern villa with Atlas Mountains view",
        price: 400,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 134,
      },
      {
        id: "mr4",
        title: "Souk Apartment",
        description: "Charming apartment near the markets",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
        rating: 4.6,
        reviews: 92,
      },
      {
        id: "mr5",
        title: "Garden Riad",
        description: "Peaceful riad with lush gardens",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1548137612-4034b9e3b5ea?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 145,
      },
      {
        id: "mr6",
        title: "Kasbah Suite",
        description: "Elegant suite in historic kasbah",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 112,
      },
    ],
  },
  {
    city: "Victoria Falls",
    country: "Zimbabwe",
    image:
      "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Witness the power of one of the world's largest waterfalls.",
    stays: [
      {
        id: "vf1",
        title: "Riverside Lodge",
        description: "Luxury lodge with falls view",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1614667227975-ea8a8d62f4d8?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 167,
      },
      {
        id: "vf2",
        title: "Safari Camp",
        description: "Tented camp with wildlife views",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 143,
      },
      {
        id: "vf3",
        title: "River View Hotel",
        description: "Modern hotel overlooking Zambezi",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 124,
      },
      {
        id: "vf4",
        title: "Adventure Lodge",
        description: "Eco-friendly lodge with activities",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80",
        rating: 4.6,
        reviews: 98,
      },
      {
        id: "vf5",
        title: "Luxury Tree House",
        description: "Unique stay in nature",
        price: 420,
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 156,
      },
      {
        id: "vf6",
        title: "Heritage Hotel",
        description: "Colonial-style hotel with gardens",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 134,
      },
    ],
  },
];

export default function FeaturedDestinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured African Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURED_DESTINATIONS.map((destination) => (
          <Link
            key={destination.city}
            to={`/destination/${destination.city
              .toLowerCase()
              .replace(" ", "-")}`}
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
  );
}
