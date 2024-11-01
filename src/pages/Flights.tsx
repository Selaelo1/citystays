import { useState } from "react";
import {
  Plane,
  Calendar,
  Clock,
  Luggage,
  Users,
  ArrowRight,
} from "lucide-react";
import { airlines } from "../data/FlightData";
import SeatMap from "../components/SeatMap";

type TravelClass = "economy" | "business" | "firstClass";

export default function Flights() {
  const [tripType, setTripType] = useState<"one-way" | "return">("one-way");
  const [selectedAirline, setSelectedAirline] = useState(airlines[0]);
  const [selectedRoute, setSelectedRoute] = useState(selectedAirline.routes[0]);
  const [selectedTime, setSelectedTime] = useState(selectedRoute.times[0]);
  const [returnTime, setReturnTime] = useState(selectedRoute.times[0]);
  const [extraLuggage, setExtraLuggage] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [returnSelectedSeats, setReturnSelectedSeats] = useState<string[]>([]);
  const [currentSelection, setCurrentSelection] = useState<
    "outbound" | "return"
  >("outbound");
  const [travelClass, setTravelClass] = useState<TravelClass>("economy");

  const handleSeatSelect = (seat: string) => {
    if (currentSelection === "outbound") {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    } else {
      setReturnSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    }
  };

  const calculatePrice = () => {
    const pricing = selectedRoute.pricing[travelClass];
    const basePrice = pricing.base;
    const tax = pricing.tax;
    const luggagePrice =
      travelClass === "economy" && extraLuggage ? pricing.luggage : 0;
    const total = (basePrice + tax + luggagePrice) * passengers;
    return tripType === "return" ? total * 2 : total;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Flight Booking</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Trip Type</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={tripType}
              onChange={(e) =>
                setTripType(e.target.value as "one-way" | "return")
              }
            >
              <option value="one-way">One Way</option>
              <option value="return">Return</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Travel Class
            </label>
            <select
              className="w-full p-2 border rounded-lg"
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value as TravelClass)}
            >
              <option value="economy">Economy</option>
              <option value="business">Business Class</option>
              <option value="firstClass">First Class</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Airline</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={selectedAirline.id}
              onChange={(e) => {
                const airline = airlines.find(
                  (a) => a.id === Number(e.target.value)
                );
                if (airline) {
                  setSelectedAirline(airline);
                  setSelectedRoute(airline.routes[0]);
                  setSelectedTime(airline.routes[0].times[0]);
                  setReturnTime(airline.routes[0].times[0]);
                }
              }}
            >
              {airlines.map((airline) => (
                <option key={airline.id} value={airline.id}>
                  {airline.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Route</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={`${selectedRoute.from}-${selectedRoute.to}`}
              onChange={(e) => {
                const [from, to] = e.target.value.split("-");
                const route = selectedAirline.routes.find(
                  (r) => r.from === from && r.to === to
                );
                if (route) {
                  setSelectedRoute(route);
                  setSelectedTime(route.times[0]);
                  setReturnTime(route.times[0]);
                }
              }}
            >
              {selectedAirline.routes.map((route) => (
                <option
                  key={`${route.from}-${route.to}`}
                  value={`${route.from}-${route.to}`}
                >
                  {route.from} → {route.to}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Departure Time
            </label>
            <select
              className="w-full p-2 border rounded-lg"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {selectedRoute.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {tripType === "return" && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Return Time
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
              >
                {selectedRoute.times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Passengers</label>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 border rounded-lg"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
              >
                -
              </button>
              <span>{passengers}</span>
              <button
                className="p-2 border rounded-lg"
                onClick={() => setPassengers(passengers + 1)}
              >
                +
              </button>
            </div>
          </div>

          {travelClass === "economy" && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Extra Luggage
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={extraLuggage}
                  onChange={(e) => setExtraLuggage(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span>
                  Add extra luggage (+
                  {formatPrice(selectedRoute.pricing.economy.luggage)})
                </span>
              </label>
            </div>
          )}

          <div className="flex items-end">
            <div className="bg-gray-50 p-4 rounded-lg w-full">
              <div className="text-sm text-gray-600 mb-1">Total Price</div>
              <div className="text-3xl font-bold">
                {formatPrice(calculatePrice())}
              </div>
              <div className="text-xs text-gray-500">
                Including taxes and fees
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowSeatMap(true)}
            className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Select Seats ({selectedSeats.length + returnSelectedSeats.length}/
            {passengers * (tripType === "return" ? 2 : 1)})
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
            <span>Book Flight</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showSeatMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Select Your Seats ({travelClass})
              </h2>
              <button
                onClick={() => setShowSeatMap(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>

            {tripType === "return" && (
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  onClick={() => setCurrentSelection("outbound")}
                  className={`px-4 py-2 rounded-lg ${
                    currentSelection === "outbound"
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Outbound Flight
                </button>
                <button
                  onClick={() => setCurrentSelection("return")}
                  className={`px-4 py-2 rounded-lg ${
                    currentSelection === "return"
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Return Flight
                </button>
              </div>
            )}

            <SeatMap
              selectedSeats={
                currentSelection === "outbound"
                  ? selectedSeats
                  : returnSelectedSeats
              }
              onSeatSelect={handleSeatSelect}
              maxSeats={passengers}
              travelClass={travelClass}
            />
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Flight Details</h2>
            <p className="text-gray-600">
              {selectedAirline.name} -{" "}
              {travelClass.replace(/([A-Z])/g, " $1").trim()}
            </p>
          </div>
          <img
            src={selectedAirline.logo}
            alt={selectedAirline.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>Duration: {selectedRoute.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Departure: {selectedTime}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Plane className="w-5 h-5 mr-2" />
            <span>
              {selectedRoute.from} → {selectedRoute.to}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Luggage className="w-5 h-5 mr-2" />
            <span>
              {travelClass === "economy"
                ? extraLuggage
                  ? "2x 23kg"
                  : "1x 23kg"
                : "Unlimited baggage"}
            </span>
          </div>
          {selectedSeats.length > 0 && (
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>Selected Seats: {selectedSeats.join(", ")}</span>
            </div>
          )}
          {tripType === "return" && returnSelectedSeats.length > 0 && (
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>Return Seats: {returnSelectedSeats.join(", ")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
