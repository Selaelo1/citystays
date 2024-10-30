export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isHost?: boolean;
}

export interface Booking {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  location: string;
}