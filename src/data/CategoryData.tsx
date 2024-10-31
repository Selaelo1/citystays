import {
  LucideIcon,
  Compass,
  Palmtree,
  Mountain,
  Building,
  Car,
  Trees,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  reviews: number;
  reviewsList: Review[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "adventure",
    name: "Adventure",
    icon: Compass,
    description: "Thrilling outdoor activities and extreme sports",
    activities: [
      {
        id: "skydiving",
        title: "Tandem Skydiving Experience",
        description:
          "Experience the ultimate adrenaline rush with a professional instructor",
        image:
          "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?auto=format&fit=crop&q=80",
        price: 299,
        duration: "3 hours",
        location: "Cape Town, South Africa",
        rating: 4.9,
        reviews: 156,
        reviewsList: [
          {
            id: 1,
            userName: "Alice K.",
            rating: 5,
            date: "2024-03-01",
            comment: "Absolutely exhilarating! The instructors were top-notch.",
          },
          {
            id: 2,
            userName: "Mark T.",
            rating: 4,
            date: "2024-02-28",
            comment:
              "A thrilling experience, but a bit nerve-wracking at first!",
          },
        ],
      },
      {
        id: "safari",
        title: "Big Five Safari Experience",
        description: "Track and photograph Africa's most iconic wildlife",
        image:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
        price: 199,
        duration: "8 hours",
        location: "Kruger National Park",
        rating: 4.8,
        reviews: 234,
        reviewsList: [
          {
            id: 1,
            userName: "John D.",
            rating: 5,
            date: "2024-02-15",
            comment: "The best experience of my life! Saw all the Big Five!",
          },
          {
            id: 2,
            userName: "Emma W.",
            rating: 4.5,
            date: "2024-02-10",
            comment: "Great day out, knowledgeable guide!",
          },
        ],
      },
      // New activities added
      {
        id: "bungee-jumping",
        title: "Bungee Jumping Adventure",
        description:
          "Take a leap from one of the world's highest bungee jumps.",
        image:
          "https://images.unsplash.com/photo-1544017892-7fd16b84f012?auto=format&fit=crop&q=80",
        price: 250,
        duration: "1 hour",
        location: "Victoria Falls, Zimbabwe",
        rating: 4.9,
        reviews: 45,
        reviewsList: [],
      },
      {
        id: "paragliding",
        title: "Paragliding Experience",
        description: "Soar through the skies with breathtaking views.",
        image:
          "https://images.unsplash.com/photo-1562957333-77c066cd1f60?auto=format&fit=crop&q=80",
        price: 180,
        duration: "2 hours",
        location: "Interlaken, Switzerland",
        rating: 4.8,
        reviews: 120,
        reviewsList: [],
      },
      {
        id: "white-water-rafting",
        title: "White Water Rafting Expedition",
        description: "Experience thrilling rapids in a guided rafting tour.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        price: 150,
        duration: "4 hours",
        location: "Colorado River, USA",
        rating: 4.7,
        reviews: 60,
        reviewsList: [],
      },
      {
        id: "caving",
        title: "Caving Expedition",
        description: "Explore the wonders of underground caves.",
        image:
          "https://images.unsplash.com/photo-1562498916842-26f8d4782226?auto=format&fit=crop&q=80",
        price: 120,
        duration: "3 hours",
        location: "Waitomo, New Zealand",
        rating: 4.9,
        reviews: 75,
        reviewsList: [],
      },
      {
        id: "mountain-biking",
        title: "Mountain Biking Tour",
        description: "Ride through scenic trails and stunning landscapes.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        price: 90,
        duration: "3 hours",
        location: "Moab, Utah, USA",
        rating: 4.8,
        reviews: 95,
        reviewsList: [],
      },
      {
        id: "kitesurfing",
        title: "Kitesurfing Lessons",
        description:
          "Learn to kitesurf with expert instructors on beautiful beaches.",
        image:
          "https://images.unsplash.com/photo-1560827985-e0095e788ab7?auto=format&fit=crop&q=80",
        price: 120,
        duration: "2 hours",
        location: "Maui, Hawaii, USA",
        rating: 4.9,
        reviews: 85,
        reviewsList: [],
      },
    ],
  },
  {
    id: "beach",
    name: "Beach",
    icon: Palmtree,
    description: "Relaxing coastal activities and water sports",
    activities: [
      {
        id: "surfing",
        title: "Beginner Surf Lesson",
        description:
          "Learn to surf with professional instructors on pristine beaches",
        image:
          "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
        price: 80,
        duration: "2 hours",
        location: "Durban, South Africa",
        rating: 4.7,
        reviews: 89,
        reviewsList: [
          {
            id: 1,
            userName: "Sarah L.",
            rating: 5,
            date: "2024-03-05",
            comment: "Had a fantastic time! Instructors were really patient.",
          },
          {
            id: 2,
            userName: "Tom R.",
            rating: 4,
            date: "2024-03-02",
            comment: "Great experience, but it took me a while to get up!",
          },
        ],
      },
      {
        id: "snorkeling",
        title: "Coral Reef Snorkeling",
        description: "Explore vibrant marine life in crystal clear waters",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
        price: 65,
        duration: "3 hours",
        location: "Sodwana Bay",
        rating: 4.9,
        reviews: 167,
        reviewsList: [
          {
            id: 1,
            userName: "Jessica H.",
            rating: 5,
            date: "2024-02-20",
            comment: "Amazing experience! The underwater world was stunning!",
          },
          {
            id: 2,
            userName: "Leo B.",
            rating: 4.8,
            date: "2024-02-18",
            comment: "Best snorkeling I've ever done!",
          },
        ],
      },
      // New activities added
      {
        id: "beach-volleyball",
        title: "Beach Volleyball Game",
        description: "Join a fun game of beach volleyball with friends.",
        image:
          "https://images.unsplash.com/photo-1533707567311-f6b2aaebd99d?auto=format&fit=crop&q=80",
        price: 10,
        duration: "2 hours",
        location: "Santa Monica, California, USA",
        rating: 4.6,
        reviews: 45,
        reviewsList: [],
      },
      {
        id: "jet-skiing",
        title: "Jet Ski Adventure",
        description: "Ride the waves on an exciting jet ski tour.",
        image:
          "https://images.unsplash.com/photo-1592000123730-3d30399e587b?auto=format&fit=crop&q=80",
        price: 150,
        duration: "1 hour",
        location: "Miami, Florida, USA",
        rating: 4.8,
        reviews: 120,
        reviewsList: [],
      },
      {
        id: "beach-cleanup",
        title: "Beach Cleanup Activity",
        description: "Join a community effort to clean up the beach.",
        image:
          "https://images.unsplash.com/photo-1511561921355-d597ef00e1d1?auto=format&fit=crop&q=80",
        price: 0,
        duration: "2 hours",
        location: "Bondi Beach, Australia",
        rating: 4.9,
        reviews: 60,
        reviewsList: [],
      },
      {
        id: "yoga-on-the-beach",
        title: "Beach Yoga Session",
        description: "Relax and rejuvenate with yoga by the sea.",
        image:
          "https://images.unsplash.com/photo-1502300331372-d6c5a4c9438e?auto=format&fit=crop&q=80",
        price: 20,
        duration: "1 hour",
        location: "Tulum, Mexico",
        rating: 4.7,
        reviews: 55,
        reviewsList: [],
      },
      {
        id: "parasailing",
        title: "Parasailing Adventure",
        description: "Get a bird's-eye view while being towed behind a boat.",
        image:
          "https://images.unsplash.com/photo-1592548476670-805a59de041c?auto=format&fit=crop&q=80",
        price: 120,
        duration: "30 minutes",
        location: "Cancun, Mexico",
        rating: 4.8,
        reviews: 90,
        reviewsList: [],
      },
    ],
  },
  {
    id: "mountain",
    name: "Mountain",
    icon: Mountain,
    description: "Hiking and mountain adventures",
    activities: [
      {
        id: "table-mountain",
        title: "Table Mountain Hike",
        description: "Guided hike to the iconic Table Mountain summit",
        image:
          "https://images.unsplash.com/photo-1578758803946-2c4f6738df87?auto=format&fit=crop&q=80",
        price: 45,
        duration: "4 hours",
        location: "Cape Town, South Africa",
        rating: 4.8,
        reviews: 312,
        reviewsList: [
          {
            id: 1,
            userName: "Anna P.",
            rating: 5,
            date: "2024-03-03",
            comment: "A breathtaking hike with stunning views at the top!",
          },
          {
            id: 2,
            userName: "Chris D.",
            rating: 4.5,
            date: "2024-02-25",
            comment: "Challenging but worth it. Highly recommended!",
          },
        ],
      },
      {
        id: "drakensberg",
        title: "Drakensberg Trek",
        description: "Multi-day trek through dramatic mountain landscapes",
        image:
          "https://images.unsplash.com/photo-1686987427051-7fd3c6c16087?auto=format&fit=crop&q=80",
        price: 299,
        duration: "2 days",
        location: "Drakensberg",
        rating: 4.9,
        reviews: 78,
        reviewsList: [
          {
            id: 1,
            userName: "Sam K.",
            rating: 5,
            date: "2024-03-01",
            comment: "An unforgettable adventure with spectacular scenery!",
          },
          {
            id: 2,
            userName: "Mia L.",
            rating: 4.9,
            date: "2024-02-28",
            comment: "A true nature lover's paradise!",
          },
        ],
      },
      // New activities added
      {
        id: "mountain-climbing",
        title: "Mountain Climbing Expedition",
        description: "Challenge yourself with a guided climbing adventure.",
        image:
          "https://images.unsplash.com/photo-1555121674-7a90fbd89d7c?auto=format&fit=crop&q=80",
        price: 250,
        duration: "5 hours",
        location: "Kilimanjaro, Tanzania",
        rating: 4.9,
        reviews: 50,
        reviewsList: [],
      },
      {
        id: "rock-climbing",
        title: "Indoor Rock Climbing",
        description:
          "Learn rock climbing techniques in a safe indoor environment.",
        image:
          "https://images.unsplash.com/photo-1572501313292-d01ac1ee052e?auto=format&fit=crop&q=80",
        price: 30,
        duration: "2 hours",
        location: "Local Climbing Gym",
        rating: 4.8,
        reviews: 70,
        reviewsList: [],
      },
      {
        id: "canyon-hiking",
        title: "Canyon Hiking Adventure",
        description: "Explore breathtaking canyons and unique rock formations.",
        image:
          "https://images.unsplash.com/photo-1506825742226-f745c0ec60f7?auto=format&fit=crop&q=80",
        price: 80,
        duration: "6 hours",
        location: "Grand Canyon, USA",
        rating: 4.7,
        reviews: 65,
        reviewsList: [],
      },
      {
        id: "wildlife-photography",
        title: "Wildlife Photography Workshop",
        description: "Capture stunning mountain landscapes and wildlife.",
        image:
          "https://images.unsplash.com/photo-1495563733125-67a4d91f1d8c?auto=format&fit=crop&q=80",
        price: 100,
        duration: "4 hours",
        location: "Rocky Mountain National Park, USA",
        rating: 4.8,
        reviews: 40,
        reviewsList: [],
      },
      {
        id: "nature-painting",
        title: "Nature Painting Class",
        description:
          "Create beautiful art inspired by nature in the mountains.",
        image:
          "https://images.unsplash.com/photo-1593519212132-cf5c299d8a69?auto=format&fit=crop&q=80",
        price: 60,
        duration: "3 hours",
        location: "Lake Tahoe, USA",
        rating: 4.9,
        reviews: 30,
        reviewsList: [],
      },
    ],
  },
  {
    id: "city",
    name: "City",
    icon: Building,
    description: "Urban exploration and cultural experiences",
    activities: [
      {
        id: "food-tour",
        title: "Cape Town Food Tour",
        description: "Taste your way through local cuisine and culture",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
        price: 89,
        duration: "4 hours",
        location: "Cape Town, South Africa",
        rating: 4.7,
        reviews: 156,
        reviewsList: [
          {
            id: 1,
            userName: "Karen J.",
            rating: 5,
            date: "2024-03-02",
            comment: "Delicious food and a knowledgeable guide!",
          },
          {
            id: 2,
            userName: "Luke N.",
            rating: 4.5,
            date: "2024-02-28",
            comment: "Great variety of local dishes. Highly enjoyable!",
          },
        ],
      },
      {
        id: "art-gallery",
        title: "Contemporary Art Tour",
        description: "Explore the vibrant local art scene with an expert guide",
        image:
          "https://images.unsplash.com/photo-1594784053295-2116b0c6fd1c?auto=format&fit=crop&q=80",
        price: 35,
        duration: "2 hours",
        location: "Johannesburg",
        rating: 4.6,
        reviews: 92,
        reviewsList: [
          {
            id: 1,
            userName: "Sophie W.",
            rating: 5,
            date: "2024-03-04",
            comment: "Incredible art and fascinating insights from the guide!",
          },
          {
            id: 2,
            userName: "James C.",
            rating: 4.5,
            date: "2024-02-29",
            comment: "A lovely way to spend an afternoon!",
          },
        ],
      },
      // New activities added
      {
        id: "historical-walking-tour",
        title: "Historical City Walking Tour",
        description:
          "Discover the rich history of the city with a guided tour.",
        image:
          "https://images.unsplash.com/photo-1518371014193-b2b9c0c94eae?auto=format&fit=crop&q=80",
        price: 25,
        duration: "3 hours",
        location: "Philadelphia, USA",
        rating: 4.7,
        reviews: 50,
        reviewsList: [],
      },
      {
        id: "street-food-tour",
        title: "Street Food Tour",
        description: "Sample delicious street food from local vendors.",
        image:
          "https://images.unsplash.com/photo-1527531912140-d03b1dcb3377?auto=format&fit=crop&q=80",
        price: 45,
        duration: "2 hours",
        location: "Bangkok, Thailand",
        rating: 4.8,
        reviews: 80,
        reviewsList: [],
      },
      {
        id: "local-culture-workshop",
        title: "Local Culture Workshop",
        description: "Participate in a workshop to learn about local crafts.",
        image:
          "https://images.unsplash.com/photo-1580281060574-72e375206482?auto=format&fit=crop&q=80",
        price: 40,
        duration: "2 hours",
        location: "Lisbon, Portugal",
        rating: 4.6,
        reviews: 30,
        reviewsList: [],
      },
      {
        id: "nightlife-tour",
        title: "City Nightlife Tour",
        description: "Experience the vibrant nightlife with a guided tour.",
        image:
          "https://images.unsplash.com/photo-1555564216-7e576a124eeb?auto=format&fit=crop&q=80",
        price: 50,
        duration: "3 hours",
        location: "New York City, USA",
        rating: 4.8,
        reviews: 45,
        reviewsList: [],
      },
      {
        id: "cultural-festival",
        title: "Local Cultural Festival",
        description: "Join in the fun at a local cultural festival.",
        image:
          "https://images.unsplash.com/photo-1508423939696-f742b15247a3?auto=format&fit=crop&q=80",
        price: 0,
        duration: "All day",
        location: "Mexico City, Mexico",
        rating: 4.9,
        reviews: 60,
        reviewsList: [],
      },
    ],
  },
  {
    id: "nature",
    name: "Nature",
    icon: Trees,
    description: "Explore the great outdoors and experience nature's beauty",
    activities: [
      {
        id: "nature-walk",
        title: "Guided Nature Walk",
        description: "Discover local flora and fauna with an expert guide",
        image:
          "https://images.unsplash.com/photo-1567020054504-3654f2c84c89?auto=format&fit=crop&q=80",
        price: 30,
        duration: "2 hours",
        location: "Garden Route, South Africa",
        rating: 4.8,
        reviews: 101,
        reviewsList: [
          {
            id: 1,
            userName: "Oliver S.",
            rating: 5,
            date: "2024-03-05",
            comment: "A delightful experience, perfect for nature lovers!",
          },
          {
            id: 2,
            userName: "Rachel A.",
            rating: 4.5,
            date: "2024-02-24",
            comment: "Learned so much about local plants and animals.",
          },
        ],
      },
      {
        id: "bird-watching",
        title: "Bird Watching Tour",
        description:
          "Join an expert for a day of birdwatching in diverse habitats",
        image:
          "https://images.unsplash.com/photo-1585310377383-c3545cfdbba0?auto=format&fit=crop&q=80",
        price: 50,
        duration: "4 hours",
        location: "Addo National Park, South Africa",
        rating: 4.7,
        reviews: 95,
        reviewsList: [
          {
            id: 1,
            userName: "Emily T.",
            rating: 5,
            date: "2024-03-01",
            comment: "A fantastic day out! Saw so many beautiful birds.",
          },
          {
            id: 2,
            userName: "Noah G.",
            rating: 4.8,
            date: "2024-02-27",
            comment: "Great guide and a wonderful experience!",
          },
        ],
      },
      // New activities added
      {
        id: "nature-photography",
        title: "Nature Photography Workshop",
        description:
          "Learn to capture the beauty of nature through photography.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        price: 75,
        duration: "3 hours",
        location: "Yosemite National Park, USA",
        rating: 4.8,
        reviews: 55,
        reviewsList: [],
      },
      {
        id: "wildflower-hike",
        title: "Wildflower Hike",
        description: "Hike through stunning wildflower fields in bloom.",
        image:
          "https://images.unsplash.com/photo-1524941932018-7c4e92be8659?auto=format&fit=crop&q=80",
        price: 40,
        duration: "3 hours",
        location: "Mount Rainier National Park, USA",
        rating: 4.9,
        reviews: 60,
        reviewsList: [],
      },
      {
        id: "stargazing-tour",
        title: "Stargazing Tour",
        description: "Explore the night sky with an expert astronomer.",
        image:
          "https://images.unsplash.com/photo-1516792263538-6e2c2c64d7a3?auto=format&fit=crop&q=80",
        price: 50,
        duration: "2 hours",
        location: "Sedona, Arizona, USA",
        rating: 4.9,
        reviews: 45,
        reviewsList: [],
      },
      {
        id: "camping-adventure",
        title: "Camping Adventure",
        description:
          "Experience the great outdoors with a guided camping trip.",
        image:
          "https://images.unsplash.com/photo-1496194120771-bd5937c7761a?auto=format&fit=crop&q=80",
        price: 200,
        duration: "2 days",
        location: "Great Smoky Mountains, USA",
        rating: 4.8,
        reviews: 40,
        reviewsList: [],
      },
      {
        id: "eco-tour",
        title: "Eco Tour Experience",
        description: "Learn about conservation efforts in a natural setting.",
        image:
          "https://images.unsplash.com/photo-1541550171-7d354b50c831?auto=format&fit=crop&q=80",
        price: 60,
        duration: "4 hours",
        location: "Everglades National Park, USA",
        rating: 4.8,
        reviews: 35,
        reviewsList: [],
      },
    ],
  },
  {
    id: "road-trip",
    name: "Road Trip",
    icon: Car,
    description: "Exciting journeys through scenic landscapes",
    activities: [
      {
        id: "garden-route",
        title: "Garden Route Road Trip",
        description: "Experience stunning coastal views on this scenic route",
        image:
          "https://images.unsplash.com/photo-1572989511515-276540f40d5c?auto=format&fit=crop&q=80",
        price: 199,
        duration: "1 day",
        location: "Garden Route, South Africa",
        rating: 4.9,
        reviews: 120,
        reviewsList: [
          {
            id: 1,
            userName: "Liam P.",
            rating: 5,
            date: "2024-02-20",
            comment: "A breathtaking experience! The views were unreal!",
          },
          {
            id: 2,
            userName: "Sophia J.",
            rating: 4.7,
            date: "2024-02-15",
            comment: "Perfect day trip with stunning scenery.",
          },
        ],
      },
      {
        id: "cape-peninsula",
        title: "Cape Peninsula Tour",
        description:
          "Explore the breathtaking Cape Peninsula with a local guide",
        image:
          "https://images.unsplash.com/photo-1561811110-e0cfcf7458e3?auto=format&fit=crop&q=80",
        price: 150,
        duration: "8 hours",
        location: "Cape Town, South Africa",
        rating: 4.8,
        reviews: 80,
        reviewsList: [
          {
            id: 1,
            userName: "Zoe M.",
            rating: 5,
            date: "2024-03-03",
            comment: "An amazing tour! Saw stunning landscapes and wildlife.",
          },
          {
            id: 2,
            userName: "Ethan H.",
            rating: 4.5,
            date: "2024-02-22",
            comment: "Great day with lots of beautiful sights!",
          },
        ],
      },
      // New activities added
      {
        id: "coastal-road-trip",
        title: "Coastal Road Trip",
        description: "Discover beautiful coastal towns on this scenic drive.",
        image:
          "https://images.unsplash.com/photo-1519743243712-2f243e4de5cc?auto=format&fit=crop&q=80",
        price: 120,
        duration: "1 day",
        location: "California Coast, USA",
        rating: 4.8,
        reviews: 70,
        reviewsList: [],
      },
      {
        id: "national-park-tour",
        title: "National Park Road Trip",
        description: "Visit multiple national parks in a single trip.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        price: 350,
        duration: "5 days",
        location: "USA",
        rating: 4.9,
        reviews: 80,
        reviewsList: [],
      },
      {
        id: "fall-foliage-trip",
        title: "Fall Foliage Road Trip",
        description: "Experience stunning fall colors on this scenic route.",
        image:
          "https://images.unsplash.com/photo-1472506789578-2605c6a8b8de?auto=format&fit=crop&q=80",
        price: 180,
        duration: "3 days",
        location: "New England, USA",
        rating: 4.7,
        reviews: 60,
        reviewsList: [],
      },
      {
        id: "wine-country-tour",
        title: "Wine Country Road Trip",
        description:
          "Explore beautiful vineyards and wine-tasting experiences.",
        image:
          "https://images.unsplash.com/photo-1491603603862-20216c9c49f1?auto=format&fit=crop&q=80",
        price: 220,
        duration: "2 days",
        location: "Napa Valley, USA",
        rating: 4.9,
        reviews: 45,
        reviewsList: [],
      },
      {
        id: "desert-adventure",
        title: "Desert Road Trip",
        description: "Explore unique desert landscapes and wildlife.",
        image:
          "https://images.unsplash.com/photo-1528898121794-92e9b8c92b43?auto=format&fit=crop&q=80",
        price: 250,
        duration: "4 days",
        location: "Death Valley, USA",
        rating: 4.8,
        reviews: 30,
        reviewsList: [],
      },
    ],
  },
  {
    id: "adventure",
    name: "Adventure",
    icon: Compass,
    description: "Thrilling activities for the adrenaline junkie",
    activities: [
      {
        id: "bungee-jumping",
        title: "Bungee Jumping Experience",
        description: "Take the leap from a breathtaking height!",
        image:
          "https://images.unsplash.com/photo-1561178597-b999c1b8f8a5?auto=format&fit=crop&q=80",
        price: 199,
        duration: "1 hour",
        location: "Victoria Falls, Zimbabwe",
        rating: 4.9,
        reviews: 80,
        reviewsList: [
          {
            id: 1,
            userName: "James K.",
            rating: 5,
            date: "2024-02-15",
            comment: "The most exhilarating experience of my life!",
          },
          {
            id: 2,
            userName: "Emma S.",
            rating: 4.8,
            date: "2024-02-10",
            comment: "Incredible thrill! Highly recommended.",
          },
        ],
      },
      {
        id: "zip-lining",
        title: "Zip Lining Adventure",
        description:
          "Soar through the treetops on a thrilling zip line course.",
        image:
          "https://images.unsplash.com/photo-1533481906853-155adac10f95?auto=format&fit=crop&q=80",
        price: 85,
        duration: "2 hours",
        location: "Costa Rica",
        rating: 4.8,
        reviews: 65,
        reviewsList: [
          {
            id: 1,
            userName: "Lucas R.",
            rating: 5,
            date: "2024-03-02",
            comment: "Such an adrenaline rush! Loved every second.",
          },
          {
            id: 2,
            userName: "Isabella L.",
            rating: 4.6,
            date: "2024-02-27",
            comment: "An awesome experience with great views.",
          },
        ],
      },
      // New activities added
      {
        id: "white-water-rafting",
        title: "White Water Rafting",
        description:
          "Navigate through thrilling rapids on this rafting adventure.",
        image:
          "https://images.unsplash.com/photo-1502021011017-7b6ee04c7d83?auto=format&fit=crop&q=80",
        price: 150,
        duration: "4 hours",
        location: "Colorado River, USA",
        rating: 4.9,
        reviews: 50,
        reviewsList: [],
      },
      {
        id: "skydiving",
        title: "Skydiving Experience",
        description:
          "Experience the ultimate thrill of free-falling from the sky.",
        image:
          "https://images.unsplash.com/photo-1607349621101-04e52c8596d4?auto=format&fit=crop&q=80",
        price: 300,
        duration: "2 hours",
        location: "Dubai, UAE",
        rating: 4.9,
        reviews: 55,
        reviewsList: [],
      },
      {
        id: "caving-adventure",
        title: "Caving Adventure",
        description: "Explore underground caves in a thrilling guided tour.",
        image:
          "https://images.unsplash.com/photo-1547436310-c22583b5478b?auto=format&fit=crop&q=80",
        price: 120,
        duration: "3 hours",
        location: "Waitomo Caves, New Zealand",
        rating: 4.8,
        reviews: 40,
        reviewsList: [],
      },
      {
        id: "scuba-diving",
        title: "Scuba Diving Experience",
        description: "Dive into the underwater world and explore marine life.",
        image:
          "https://images.unsplash.com/photo-1567691398788-59c4ab303b00?auto=format&fit=crop&q=80",
        price: 250,
        duration: "3 hours",
        location: "Great Barrier Reef, Australia",
        rating: 4.9,
        reviews: 50,
        reviewsList: [],
      },
      {
        id: "kite-surfing",
        title: "Kite Surfing Adventure",
        description:
          "Ride the waves with an exhilarating kite surfing experience.",
        image:
          "https://images.unsplash.com/photo-1581915835331-0b27e4e3e964?auto=format&fit=crop&q=80",
        price: 200,
        duration: "2 hours",
        location: "Hawaii, USA",
        rating: 4.8,
        reviews: 35,
        reviewsList: [],
      },
    ],
  },
];
