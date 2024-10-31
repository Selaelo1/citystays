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
        comment:
          "Sarah's knowledge of Cape Town's history is incredible. She made our tour both educational and entertaining!",
        tourType: "Historical Walking Tour",
      },
      {
        id: 2,
        userName: "Maria S.",
        rating: 5,
        date: "2024-02-10",
        comment:
          "Amazing food tour! Sarah knows all the hidden gems and local favorites.",
        tourType: "Food Tour",
      },
      {
        id: 3,
        userName: "David R.",
        rating: 4,
        date: "2024-02-05",
        comment:
          "Very knowledgeable guide. Would highly recommend for cultural tours.",
        tourType: "Cultural Tour",
      },
    ],
  },
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
        comment:
          "David's expertise in wildlife photography is outstanding. He helped me capture amazing shots!",
        tourType: "Photography Safari",
      },
      {
        id: 2,
        userName: "Michael K.",
        rating: 5,
        date: "2024-02-12",
        comment:
          "Incredible safari experience. David knows exactly where to find the animals.",
        tourType: "Wildlife Safari",
      },
    ],
  },
  {
    id: 3,
    name: "Lina Chen",
    specialties: ["Culture", "Art", "Cuisine"],
    languages: ["English", "Mandarin"],
    location: "Beijing",
    rating: 4.7,
    reviews: 80,
    pricePerHour: 40,
    experience: "10 years",
    reviewsList: [
      {
        id: 1,
        userName: "Tom A.",
        rating: 5,
        date: "2024-02-20",
        comment:
          "Lina provided a fantastic overview of Beijing's art scene. Highly recommended!",
        tourType: "Art Tour",
      },
      {
        id: 2,
        userName: "Sophia P.",
        rating: 4,
        date: "2024-02-15",
        comment:
          "Great food recommendations, but the pace was a bit fast for me.",
        tourType: "Culinary Tour",
      },
    ],
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    specialties: ["History", "Architecture"],
    languages: ["English", "Spanish"],
    location: "Barcelona",
    rating: 4.9,
    reviews: 150,
    pricePerHour: 50,
    experience: "15 years",
    reviewsList: [
      {
        id: 1,
        userName: "Isabella L.",
        rating: 5,
        date: "2024-02-22",
        comment:
          "Carlos knows everything about Barcelona’s architecture! Fantastic guide!",
        tourType: "Architectural Tour",
      },
      {
        id: 2,
        userName: "Jake B.",
        rating: 4,
        date: "2024-02-19",
        comment:
          "Very informative, but would have liked more personal stories.",
        tourType: "Historical Tour",
      },
    ],
  },
  {
    id: 5,
    name: "Aisha Patel",
    specialties: ["Nature", "Photography", "Adventure"],
    languages: ["English", "Hindi"],
    location: "Nairobi",
    rating: 4.6,
    reviews: 60,
    pricePerHour: 65,
    experience: "6 years",
    reviewsList: [
      {
        id: 1,
        userName: "Alex S.",
        rating: 5,
        date: "2024-02-25",
        comment: "Aisha's photography skills are top-notch. Highly recommend!",
        tourType: "Nature Photography Tour",
      },
      {
        id: 2,
        userName: "Linda M.",
        rating: 4,
        date: "2024-02-21",
        comment: "Great experience, but the wildlife was a bit scarce.",
        tourType: "Safari Tour",
      },
    ],
  },
  {
    id: 6,
    name: "Samuel Kim",
    specialties: ["History", "Technology"],
    languages: ["English", "Korean"],
    location: "Seoul",
    rating: 4.8,
    reviews: 45,
    pricePerHour: 55,
    experience: "7 years",
    reviewsList: [
      {
        id: 1,
        userName: "Daniel T.",
        rating: 5,
        date: "2024-02-28",
        comment:
          "Samuel's knowledge of Seoul's history is impressive! Highly engaging.",
        tourType: "Historical Tour",
      },
      {
        id: 2,
        userName: "Emma R.",
        rating: 4,
        date: "2024-02-26",
        comment: "Enjoyed the tour, but wanted more focus on modern tech.",
        tourType: "Tech Tour",
      },
    ],
  },
  {
    id: 7,
    name: "Fatima Al-Mansoori",
    specialties: ["Culture", "Food"],
    languages: ["Arabic", "English"],
    location: "Dubai",
    rating: 4.9,
    reviews: 70,
    pricePerHour: 70,
    experience: "5 years",
    reviewsList: [
      {
        id: 1,
        userName: "Ali H.",
        rating: 5,
        date: "2024-03-01",
        comment: "Fatima was wonderful! Her food recommendations were perfect.",
        tourType: "Culinary Tour",
      },
      {
        id: 2,
        userName: "Sara J.",
        rating: 5,
        date: "2024-02-29",
        comment: "A great way to explore the culture through food!",
        tourType: "Cultural Food Tour",
      },
    ],
  },
  {
    id: 8,
    name: "Jack Thompson",
    specialties: ["Adventure", "Sports"],
    languages: ["English"],
    location: "New Zealand",
    rating: 4.8,
    reviews: 85,
    pricePerHour: 60,
    experience: "9 years",
    reviewsList: [
      {
        id: 1,
        userName: "Olivia C.",
        rating: 5,
        date: "2024-03-03",
        comment:
          "Jack is an amazing guide for adventure sports. Highly recommended!",
        tourType: "Adventure Tour",
      },
      {
        id: 2,
        userName: "Liam K.",
        rating: 4,
        date: "2024-03-02",
        comment: "Great experience but could be more organized.",
        tourType: "Sports Tour",
      },
    ],
  },
  {
    id: 9,
    name: "Nina Rosen",
    specialties: ["Arts", "History"],
    languages: ["English", "German"],
    location: "Berlin",
    rating: 4.7,
    reviews: 92,
    pricePerHour: 50,
    experience: "11 years",
    reviewsList: [
      {
        id: 1,
        userName: "Matthew P.",
        rating: 5,
        date: "2024-03-04",
        comment: "Nina's art history knowledge is incredible. Loved the tour!",
        tourType: "Art History Tour",
      },
      {
        id: 2,
        userName: "Sophia B.",
        rating: 4,
        date: "2024-03-05",
        comment: "A little too much information at times, but overall great!",
        tourType: "Historical Tour",
      },
    ],
  },
  {
    id: 10,
    name: "Omar Khaled",
    specialties: ["Desert Tours", "Culture"],
    languages: ["Arabic", "English"],
    location: "Marrakech",
    rating: 4.8,
    reviews: 75,
    pricePerHour: 55,
    experience: "10 years",
    reviewsList: [
      {
        id: 1,
        userName: "Rachel M.",
        rating: 5,
        date: "2024-03-06",
        comment:
          "Omar is an excellent guide! The desert tour was unforgettable.",
        tourType: "Desert Tour",
      },
      {
        id: 2,
        userName: "David G.",
        rating: 4,
        date: "2024-03-07",
        comment: "Very informative, but could improve on timing.",
        tourType: "Cultural Tour",
      },
    ],
  },
];
