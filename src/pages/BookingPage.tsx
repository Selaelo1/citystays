import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Users, Info } from "lucide-react";
import { SAMPLE_STAYS } from "../data/StayData";
import BookingSummary from "../components/booking/BookingSummary";
import DateRangePicker from "../components/booking/DateRangePicker";
import { calculateNights } from "../utils/date";

export default function BookingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const stay = SAMPLE_STAYS.find((s) => s.id === id);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  useEffect(() => {
    if (!stay) {
      navigate("/stays");
    }
  }, [stay, navigate]);

  if (!stay) return null;

  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;
  const basePrice = stay.price * nights;
  const cleaningFee = nights > 0 ? 85 : 0;
  const serviceFee = Math.round(basePrice * 0.12);
  const tax = Math.round((basePrice + cleaningFee + serviceFee) * 0.15);
  const total = basePrice + cleaningFee + serviceFee + tax;

  const handleDateSelect = (dates: { start: Date; end: Date }) => {
    setCheckIn(dates.start);
    setCheckOut(dates.end);
    setIsDatePickerOpen(false);
  };

  const handleBooking = () => {
    // Implement booking logic here
    console.log("Booking confirmed", {
      stayId: stay.id,
      checkIn,
      checkOut,
      guests,
      total
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Stay Details & Booking Form */}
        <div>
          <h1 className="text-3xl font-bold mb-6">{stay.title}</h1>
          <img
            src={stay.images[0]}
            alt={stay.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-6">
            {/* Date Selection */}
            <div className="relative">
              <button
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                className="w-full p-4 border rounded-lg flex items-center justify-between hover:border-black transition-colors"
              >
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>
                    {checkIn && checkOut
                      ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`
                      : "Select dates"}
                  </span>
                </div>
                <span className="text-gray-500">{nights} nights</span>
              </button>

              {isDatePickerOpen && (
                <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4">
                  <DateRangePicker onSelect={handleDateSelect} />
                </div>
              )}
            </div>

            {/* Guest Selection */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Guests</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="p-2 border rounded-md"
                  >
                    -
                  </button>
                  <span>{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(stay.maxGuests, guests + 1))}
                    className="p-2 border rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Maximum {stay.maxGuests} guests
              </p>
            </div>

            {/* House Rules */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                House Rules
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Check-in after 3:00 PM</li>
                <li>• Checkout before 11:00 AM</li>
                <li>• No smoking</li>
                <li>• No pets</li>
                <li>• No parties or events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Summary */}
        <div className="lg:pl-8">
          <BookingSummary
            stay={stay}
            nights={nights}
            basePrice={basePrice}
            cleaningFee={cleaningFee}
            serviceFee={serviceFee}
            tax={tax}
            total={total}
            onBook={handleBooking}
            isValid={!!checkIn && !!checkOut && guests > 0}
          />
        </div>
      </div>
    </div>
  );
}