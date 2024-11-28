import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('Please enter a valid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  );

export const bookingValidationSchema = z.object({
  checkIn: z.date(),
  checkOut: z.date(),
  guests: z.number().min(1, 'Must have at least 1 guest'),
  stayId: z.string(),
});

export const profileValidationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  phone: z.string().regex(/^\+?[\d\s-]+$/, 'Invalid phone number'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

export type BookingValidation = z.infer<typeof bookingValidationSchema>;
export type ProfileValidation = z.infer<typeof profileValidationSchema>;