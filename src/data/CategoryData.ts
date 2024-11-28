import { LucideIcon, Compass, Palmtree, Mountain, Building, Coffee, Utensils, Bike, Music } from 'lucide-react';

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
}

export const CATEGORIES: Category[] = [
  {
    id: 'adventure',
    name: 'Adventure',
    icon: Compass,
    description: 'Thrilling outdoor activities and extreme sports',
    activities: [
      {
        id: 'skydiving',
        title: 'Tandem Skydiving Experience',
        description: 'Experience the ultimate adrenaline rush with a professional instructor',
        image: 'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?auto=format&fit=crop&q=80',
        price: 299,
        duration: '3 hours',
        location: 'Cape Town, South Africa',
        rating: 4.9,
        reviews: 156
      },
      {
        id: 'safari',
        title: 'Big Five Safari Experience',
        description: "Track and photograph Africa's most iconic wildlife",
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
        price: 199,
        duration: '8 hours',
        location: 'Kruger National Park',
        rating: 4.8,
        reviews: 234
      }
    ]
  },
  {
    id: 'beach',
    name: 'Beach',
    icon: Palmtree,
    description: 'Relaxing coastal activities and water sports',
    activities: [
      {
        id: 'surfing',
        title: 'Beginner Surf Lesson',
        description: 'Learn to surf with professional instructors on pristine beaches',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
        price: 80,
        duration: '2 hours',
        location: 'Durban, South Africa',
        rating: 4.7,
        reviews: 89
      },
      {
        id: 'snorkeling',
        title: 'Coral Reef Snorkeling',
        description: 'Explore vibrant marine life in crystal clear waters',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
        price: 65,
        duration: '3 hours',
        location: 'Sodwana Bay',
        rating: 4.9,
        reviews: 167
      }
    ]
  },
  {
    id: 'mountain',
    name: 'Mountain',
    icon: Mountain,
    description: 'Hiking and mountain adventures',
    activities: [
      {
        id: 'table-mountain',
        title: 'Table Mountain Hike',
        description: 'Guided hike to the iconic Table Mountain summit',
        image: 'https://images.unsplash.com/photo-1578758803946-2c4f6738df87?auto=format&fit=crop&q=80',
        price: 45,
        duration: '4 hours',
        location: 'Cape Town, South Africa',
        rating: 4.8,
        reviews: 312
      },
      {
        id: 'drakensberg',
        title: 'Drakensberg Trek',
        description: 'Multi-day trek through dramatic mountain landscapes',
        image: 'https://images.unsplash.com/photo-1686987427051-7fd3c6c16087?auto=format&fit=crop&q=80',
        price: 299,
        duration: '2 days',
        location: 'Drakensberg',
        rating: 4.9,
        reviews: 78
      }
    ]
  },
  {
    id: 'city',
    name: 'City',
    icon: Building,
    description: 'Urban exploration and cultural experiences',
    activities: [
      {
        id: 'food-tour',
        title: 'Cape Town Food Tour',
        description: 'Taste your way through local cuisine and culture',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
        price: 89,
        duration: '4 hours',
        location: 'Cape Town, South Africa',
        rating: 4.7,
        reviews: 156
      },
      {
        id: 'art-gallery',
        title: 'Contemporary Art Tour',
        description: 'Explore the vibrant local art scene with an expert guide',
        image: 'https://images.unsplash.com/photo-1594784053295-2116b0c6fd1c?auto=format&fit=crop&q=80',
        price: 35,
        duration: '2 hours',
        location: 'Johannesburg',
        rating: 4.6,
        reviews: 92
      }
    ]
  }
];