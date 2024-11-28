import { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import DatePicker from './DatePicker';

interface StaySummaryCardProps {
  stay: {
    price: number;
    title: string;
  };
}

export default function StaySummaryCard({ stay }: StaySummaryCardProps) {
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const basePrice = stay.price;
  const nights = dates ? 1 : 0; // This should be calculated based on selected dates
  const subtotal = basePrice * nights;
  const cleaningFee = 50;
  const serviceFee = Math.round(subtotal * 0.12);
  const vat = Math.round((subtotal + cleaningFee + serviceFee) * 0.15);
  const total = subtotal + cleaningFee + serviceFee + vat;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
      <h3 className="text-xl font-bold mb-6">
        ${stay.price} <span className="text-gray-500 text-base">/ night</span>
      </h3>

      <div className="space-y-4 mb-6">
        <div 
          className="border border-gray-300 rounded-lg p-3 cursor-pointer"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <div>
              <div className="text-sm font-medium">Dates</div>
              <div className="text-sm text-gray-500">
                {dates || 'Add dates'}
              </div>
            </div>
          </div>
        </div>

        {showDatePicker && (
          <div className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <DatePicker onSelect={(selectedDates) => {
              setDates(selectedDates);
              setShowDatePicker(false);
            }} />
          </div>
        )}

        <div className="border border-gray-300 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              <div>
                <div className="text-sm font-medium">Guests</div>
                <div className="text-sm text-gray-500">
                  {guests} guest{guests !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-1 border rounded-md"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                -
              </button>
              <span>{guests}</span>
              <button
                className="p-1 border rounded-md"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {dates && (
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>${basePrice} × {nights} night{nights !== 1 ? 's' : ''}</span>
            <span>${subtotal}</span>
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
            <span>VAT (15%)</span>
            <span>${vat}</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button 
        className={`w-full py-3 rounded-lg text-white font-medium ${
          dates ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!dates}
      >
        {dates ? 'Reserve now' : 'Select dates to book'}
      </button>
    </div>
  );
}