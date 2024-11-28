import { z } from 'zod';

const API_URL = 'https://api.citystays.com/v1';

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }

  return response.json();
}

// API Schema Validations
export const StaySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  location: z.object({
    city: z.string(),
    country: z.string(),
    coordinates: z.array(z.number()).length(2),
  }),
  images: z.array(z.string().url()),
  amenities: z.array(z.string()),
  host: z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string().url().optional(),
  }),
  rating: z.number(),
  reviews: z.number(),
  maxGuests: z.number(),
});

export type Stay = z.infer<typeof StaySchema>;

export const BookingSchema = z.object({
  id: z.string(),
  stayId: z.string(),
  userId: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number(),
  totalPrice: z.number(),
  status: z.enum(['pending', 'confirmed', 'cancelled']),
});

export type Booking = z.infer<typeof BookingSchema>;

// API Functions
export const api = {
  stays: {
    list: () => fetchAPI<Stay[]>('/stays'),
    get: (id: string) => fetchAPI<Stay>(`/stays/${id}`),
    search: (params: {
      location?: string;
      checkIn?: string;
      checkOut?: string;
      guests?: number;
    }) => fetchAPI<Stay[]>('/stays/search', {
      method: 'POST',
      body: JSON.stringify(params),
    }),
  },
  bookings: {
    create: (data: Omit<Booking, 'id' | 'status'>) =>
      fetchAPI<Booking>('/bookings', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    list: (userId: string) =>
      fetchAPI<Booking[]>(`/bookings/user/${userId}`),
    cancel: (id: string) =>
      fetchAPI<void>(`/bookings/${id}/cancel`, {
        method: 'POST',
      }),
  },
};