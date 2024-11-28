import { format, differenceInDays, isValid, parse } from 'date-fns';

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy');
};

export const calculateNights = (checkIn: Date, checkOut: Date): number => {
  return differenceInDays(checkOut, checkIn);
};

export const formatDateRange = (checkIn: Date, checkOut: Date): string => {
  return `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
};

export const parseDate = (dateString: string, format = 'yyyy-MM-dd'): Date | null => {
  const parsedDate = parse(dateString, format, new Date());
  return isValid(parsedDate) ? parsedDate : null;
};

export const isDateInPast = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};