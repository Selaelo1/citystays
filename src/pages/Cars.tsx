import { Car, Users, Fuel, Cog } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 45,
    location: "Cape Town International Airport",
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    type: "Hatchback",
    seats: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    pricePerDay: 35,
    location: "Johannesburg OR Tambo Airport",
  },
];

export default function Cars() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Car Rentals</h1>

      <div className="grid gap-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
                <p className="text-gray-600 mb-4">{car.type}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{car.seats} seats</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Cog className="w-5 h-5 mr-2" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="w-5 h-5 mr-2" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Car className="w-5 h-5 mr-2" />
                    <span>{car.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-bold mb-4">
                  ${car.pricePerDay}
                </div>
                <div className="text-sm text-gray-600 mb-4">per day</div>
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
