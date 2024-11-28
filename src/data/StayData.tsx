export type Stay = {
  id: string;
  title: string;
  description: string;
  location: {
    city: string;
    country: string;
    coordinates: number[];
  };
  price: number;
  images: string[];
  amenities: string[];
  host: {
    id: string;
    name: string;
    avatar: string;
  };
  rating: number;
  reviews: number;
  maxGuests: number; // Added maxGuests property
};

export const SAMPLE_STAYS: Stay[] = [
  {
    id: "1",
    title: "Luxury Apartment with Eiffel Tower View",
    description: "Beautiful apartment in the heart of Paris with stunning views.",
    location: {
      city: "Paris",
      country: "France",
      coordinates: [48.8566, 2.3522],
    },
    price: 250,
    images: [
      "https://worldinparis.com/wp-content/uploads/2021/03/Apartment-with-Eiffel-Tower-View-Paris.jpg",
      "https://images.squarespace-cdn.com/content/v1/6001ce695a503d6d70ef3775/d936f1e3-b75a-4ff0-9da6-08a19b607708/Appartement-luxe-paris-vue-tour-eiffel.jpg",
      "https://a0.muscache.com/im/pictures/cecd1331-77af-4dbc-87d0-655b55bb40fc.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/25bc32ca-95d9-46e8-ba48-09c7cd3c0216.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/2bca0275-b05f-4a8d-b292-cbd3f78d31f1.jpg?im_w=1200",
    ],
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Washer"],
    host: {
      id: "h1",
      name: "Marie Laurent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    rating: 4.9,
    reviews: 128,
    maxGuests: 4
  },
  {
    id: "2",
    title: "Charming Cottage in Cape Town",
    description: "A cozy cottage with breathtaking mountain views.",
    location: {
      city: "Cape Town",
      country: "South Africa",
      coordinates: [-33.9249, 18.4241],
    },
    price: 120,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1269406264881052324/original/217ccb6b-98f1-4562-ac9e-4ea5bedccfb3.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1270130576842327460/original/04518d0a-3381-4c96-a57d-70c4bbf68960.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI3MDEzMDU3Njg0MjMyNzQ2MA%3D%3D/original/832b457b-e1c7-4dc6-ac37-fb451c6c3aab.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1270130576842327460/original/203e9b72-bc87-4d78-99ed-f6b71f4ecc8a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1270130576842327460/original/b65ad75c-99d4-4760-8391-f544358ff57d.jpeg?im_w=1200",
    ],
    amenities: ["Wifi", "Kitchen", "BBQ grill"],
    host: {
      id: "h2",
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1501292044398-6d73d86b1e5e",
    },
    rating: 4.8,
    reviews: 65,
    maxGuests: 6
  },
  {
    id: "3",
    title: "Modern Apartment in Johannesburg",
    description: "Stylish apartment located in the heart of the city.",
    location: {
      city: "Johannesburg",
      country: "South Africa",
      coordinates: [-26.2041, 28.0473],
    },
    price: 150,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1247839736717240026/original/86a65a50-b92a-4d7c-9cde-89403d625c12.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1261966277038422756/original/daea4c87-5db4-49f0-b87c-219078855690.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1261966277038422756/original/41d402bc-8d0b-46a9-9ada-ebf7b1d94f5c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1261966277038422756/original/0c49cbc0-7f46-4056-8856-b1f8ca0c31b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1261966277038422756/original/5b1c17f9-e855-4efc-b600-45e67f1bc0e1.jpeg?im_w=720",
    ],
    amenities: ["Wifi", "Gym", "Pool"],
    host: {
      id: "h3",
      name: "Linda Jones",
      avatar: "https://images.unsplash.com/photo-1534528741775-558dc91e88d0",
    },
    rating: 4.7,
    reviews: 50,
    maxGuests: 4
  }
];