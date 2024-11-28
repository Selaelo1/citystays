export interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  tourType: string;
}

export interface Guide {
  id: number;
  name: string;
  specialties: string[];
  languages: string[];
  location: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
  experience: string;
  reviewsList: Review[];
}

export const GUIDES: Guide[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialties: ["History", "Culture", "Food"],
    languages: ["English", "Zulu", "Afrikaans"],
    location: "Cape Town",
    rating: 4.9,
    reviews: 127,
    pricePerHour: 45,
    experience: "8 years",
    reviewsList: [
      {
        id: 1,
        userName: "John D.",
        rating: 5,
        date: "2024-02-15",
        comment: "Sarah's knowledge of Cape Town's history is incredible. She made our tour both educational and entertaining!",
        tourType: "Historical Walking Tour"
      },
      {
        id: 2,
        userName: "Maria S.",
        rating: 5,
        date: "2024-02-10",
        comment: "Amazing food tour! Sarah knows all the hidden gems and local favorites.",
        tourType: "Food Tour"
      },
      {
        id: 3,
        userName: "David R.",
        rating: 4,
        date: "2024-02-05",
        comment: "Very knowledgeable guide. Would highly recommend for cultural tours.",
        tourType: "Cultural Tour"
      }
    ]
  },
  // Add reviewsList to other guides similarly
  {
    id: 2,
    name: "David Ndlovu",
    specialties: ["Wildlife", "Photography", "Adventure"],
    languages: ["English", "Xhosa", "German"],
    location: "Kruger National Park",
    rating: 4.8,
    reviews: 95,
    pricePerHour: 55,
    experience: "12 years",
    reviewsList: [
      {
        id: 1,
        userName: "Emma W.",
        rating: 5,
        date: "2024-02-18",
        comment: "David's expertise in wildlife photography is outstanding. He helped me capture amazing shots!",
        tourType: "Photography Safari"
      },
      {
        id: 2,
        userName: "Michael K.",
        rating: 5,
        date: "2024-02-12",
        comment: "Incredible safari experience. David knows exactly where to find the animals.",
        tourType: "Wildlife Safari"
      }
    ]
  }
  // ... rest of the guides
];