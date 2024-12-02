import { Star } from "lucide-react";
import type { Stay } from "../../data/StayData";

interface BookingSummaryProps {
  stay: Stay;
  nights: number;
  basePrice: number;
  cleaningFee: number;
  serviceFee: number;
  tax: number;
  total: number;
  onBook: () => void;
  isValid: boolean;
}

export default function BookingSummary({
  stay,
  nights,
  basePrice,
  cleaningFee,
  serviceFee,
  tax,
  total,
  onBook,
  isValid
}: BookingSummaryProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-2xl font-bold">${stay.price}</div>
          <div className="text-gray-500">per night</div>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="ml-1">{stay.rating}</span>
          <span className="text-gray-500 ml-1">({stay.reviews} reviews)</span>
        </div>
      </div>

      {nights > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>${stay.price} × {nights} nights</span>
            <span>${basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes (15%)</span>
            <span>${tax}</span>
          </div>
          <div className="pt-4 border-t flex justify-between font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button
        onClick={onBook}
        disabled={!isValid}
        className={`w-full py-3 rounded-lg text-white font-medium mt-6 
          ${isValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}
        `}
      >
        {isValid ? 'Reserve now' : 'Select dates to book'}
      </button>

      {isValid && (
        <p className="text-center text-sm text-gray-500 mt-4">
          You won't be charged yet
        </p>
      )}
    </div>
  );
}