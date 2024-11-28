import { create } from 'zustand';

interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  setDates: (checkIn: Date | null, checkOut: Date | null) => void;
  setGuests: (guests: number) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  checkIn: null,
  checkOut: null,
  guests: 1,
  setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),
  setGuests: (guests) => set({ guests }),
  reset: () => set({ checkIn: null, checkOut: null, guests: 1 }),
}));