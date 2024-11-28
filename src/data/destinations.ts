import type { Destination } from '../types/destination';

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    city: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the stunning Table Mountain and vibrant waterfront.",
    stays: [
      {
        id: "ct1",
        title: "Luxury Waterfront Apartment",
        description: "Modern apartment with stunning views of Table Mountain and the V&A Waterfront",
        price: 250,
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 124
      },
      {
        id: "ct2",
        title: "Camps Bay Villa",
        description: "Beachfront villa with private pool and mountain views",
        price: 450,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 98
      }
    ]
  },
  {
    city: "Zanzibar",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80",
    description: "Discover pristine beaches and historic Stone Town.",
    stays: [
      {
        id: "zb1",
        title: "Beach Villa Resort",
        description: "Private villa with direct beach access",
        price: 320,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 145
      },
      {
        id: "zb2",
        title: "Stone Town Heritage Hotel",
        description: "Historic hotel in the heart of Stone Town",
        price: 180,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        rating: 4.7,
        reviews: 92
      }
    ]
  },
  {
    city: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1708823081494-3e5bbd2ce931?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the magic of ancient medinas and souks.",
    stays: [
      {
        id: "mr1",
        title: "Traditional Riad",
        description: "Authentic riad with courtyard and pool",
        price: 200,
        image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 178
      },
      {
        id: "mr2",
        title: "Medina Palace Suite",
        description: "Luxury suite in restored palace",
        price: 350,
        image: "https://images.unsplash.com/photo-1520821147572-3df5f1b7c3d1?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 156
      }
    ]
  },
  {
    city: "Victoria Falls",
    country: "Zimbabwe",
    image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Witness the power of one of the world's largest waterfalls.",
    stays: [
      {
        id: "vf1",
        title: "Riverside Lodge",
        description: "Luxury lodge with falls view",
        price: 450,
        image: "https://images.unsplash.com/photo-1614667227975-ea8a8d62f4d8?auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 167
      },
      {
        id: "vf2",
        title: "Safari Camp",
        description: "Tented camp with wildlife views",
        price: 380,
        image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 143
      }
    ]
  }
];