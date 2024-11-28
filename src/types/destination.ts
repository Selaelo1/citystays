export interface Destination {
  city: string;
  country: string;
  image: string;
  description: string;
  stays: Stay[];
}

export interface Stay {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}