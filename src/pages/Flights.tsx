import { Plane, Calendar, Clock, Luggage } from "lucide-react";

const flights = [
  {
    id: 1,
    from: "Cape Town",
    to: "Johannesburg",
    airline: "South African Airways",
    departure: "08:00",
    arrival: "10:00",
    price: 120,
    duration: "2h",
    luggage: "23kg",
  },
  {
    id: 2,
    from: "Johannesburg",
    to: "Durban",
    airline: "Kulula",
    departure: "14:30",
    arrival: "15:45",
    price: 85,
    duration: "1h 15m",
    luggage: "20kg",
  },
];

export default function Flights() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Flight Booking</h1>

      <div className="grid gap-8">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-bold">{flight.from}</h2>
                  <Plane className="w-5 h-5 mx-4 text-gray-400" />
                  <h2 className="text-2xl font-bold">{flight.to}</h2>
                </div>

                <p className="text-gray-600 mb-4">{flight.airline}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Today</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>
                      {flight.departure} - {flight.arrival}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Luggage className="w-5 h-5 mr-2" />
                    <span>{flight.luggage}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-bold mb-4">${flight.price}</div>
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Book Flight
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
