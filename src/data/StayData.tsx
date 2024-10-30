// StayData.tsx

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
};

export const SAMPLE_STAYS: Stay[] = [
  {
    id: "1",
    title: "Luxury Apartment with Eiffel Tower View",
    description:
      "Beautiful apartment in the heart of Paris with stunning views.",
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
  },
  {
    id: "4",
    title: "Luxury Safari Lodge in Kruger Park",
    description: "Experience the wildlife up close in a luxurious lodge.",
    location: {
      city: "Kruger National Park",
      country: "South Africa",
      coordinates: [-23.9884, 31.5505],
    },
    price: 450,
    images: [
      "https://www.go2africa.com/wp-content/uploads/2017/08/Guest-area_Lion-Sands.jpg",
      "https://images.unsplash.com/photo-1603719488952-0dc48d6cd8a4",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1549551559-1a63d4c93e5f",
      "https://images.unsplash.com/photo-1561601031-f9e4900c4b4b",
    ],
    amenities: ["Wifi", "Full board", "Guided tours"],
    host: {
      id: "h4",
      name: "David Baker",
      avatar: "https://images.unsplash.com/photo-1543982426-3b391e41e7b6",
    },
    rating: 5.0,
    reviews: 80,
  },
  {
    id: "5",
    title: "Beachfront Bungalow in Durban",
    description: "Relax in a beautiful bungalow right on the beach.",
    location: {
      city: "Durban",
      country: "South Africa",
      coordinates: [-29.8587, 31.0218],
    },
    price: 200,
    images: [
      "https://www.afristay.com/media/thumbnails/pictures/places/7386/1_HO0Obhb.jpg.1366x768_q85_crop_upscale.jpg",
      "https://images.unsplash.com/photo-1520663873896-35825d8c7f5e",
      "https://images.unsplash.com/photo-1510528962110-3c2c7c7b45b5",
      "https://images.unsplash.com/photo-1576167791051-92e60e2f7b57",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    ],
    amenities: ["Wifi", "Kitchen", "Beach access"],
    host: {
      id: "h5",
      name: "Sarah Patel",
      avatar: "https://images.unsplash.com/photo-1506811671512-8e8d9c836d64",
    },
    rating: 4.6,
    reviews: 40,
  },
  {
    id: "6",
    title: "Chalet in Lesotho Mountains",
    description: "Enjoy a peaceful getaway in the mountains of Lesotho.",
    location: {
      city: "Mokhotlong",
      country: "Lesotho",
      coordinates: [-29.586, 29.161],
    },
    price: 100,
    images: [
      "https://static.wixstatic.com/media/157efe_909a36cb0d1a4d958a5b08515e0e140d~mv2.jpg/v1/fill/w_640,h_770,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/157efe_909a36cb0d1a4d958a5b08515e0e140d~mv2.jpg",
      "https://images.unsplash.com/photo-1580321171800-101be0e3643d",
      "https://images.unsplash.com/photo-1517860283000-8e453af3a86b",
      "https://images.unsplash.com/photo-1582567487168-4d292fdf8d07",
      "https://images.unsplash.com/photo-1604082356452-90dcde22fbd0",
    ],
    amenities: ["Wifi", "Kitchen", "Fireplace"],
    host: {
      id: "h6",
      name: "Thabo Nkosi",
      avatar: "https://images.unsplash.com/photo-1596503877500-bc9ee6d7b1b6",
    },
    rating: 4.5,
    reviews: 30,
  },
  {
    id: "7",
    title: "Luxurious Stay in Gaborone",
    description: "A modern stay in Botswana's capital city.",
    location: {
      city: "Gaborone",
      country: "Botswana",
      coordinates: [-24.6282, 25.9236],
    },
    price: 180,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b4/76/03/exterior.jpg?w=1200&h=-1&s=1",
      "https://images.unsplash.com/photo-1614795546935-29e9e7cdb4aa",
      "https://images.unsplash.com/photo-1584071137273-e33a58979f61",
      "https://images.unsplash.com/photo-1593285001541-f53b34015f58",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    ],
    amenities: ["Wifi", "Air conditioning", "Pool"],
    host: {
      id: "h7",
      name: "Bontle Moyo",
      avatar: "https://images.unsplash.com/photo-1560732174-4dd50f408b93",
    },
    rating: 4.9,
    reviews: 20,
  },
  {
    id: "8",
    title: "Boutique Hotel in Windhoek",
    description: "A stylish boutique hotel in Namibia's capital.",
    location: {
      city: "Windhoek",
      country: "Namibia",
      coordinates: [-22.5597, 17.0833],
    },
    price: 220,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3f/6a/d5/the-windhoek-luxury-suites.jpg?w=700&h=-1&s=1",
      "https://images.unsplash.com/photo-1559081025-2e3d6768da54",
      "https://images.unsplash.com/photo-1564866667326-123456789abc",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1571603389568-d5e4051049b3",
    ],
    amenities: ["Wifi", "Restaurant", "Bar"],
    host: {
      id: "h8",
      name: "Maria van der Merwe",
      avatar: "https://images.unsplash.com/photo-1564866667326-123456789abc",
    },
    rating: 4.8,
    reviews: 75,
  },
];
