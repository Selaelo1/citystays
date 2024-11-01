import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Car, Users, Fuel, Cog, Calendar, MapPin } from "lucide-react";

const rentalCompanies = [
  {
    id: 1,
    name: "Safari Wheels",
    logo: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&q=80",
    cars: [
      {
        id: 1,
        name: "Toyota Corolla",
        type: "Sedan",
        seats: 5,
        transmission: "Automatic",
        fuelType: "Petrol",
        basePrice: 45,
        location: "Cape Town International Airport",
        image:
          "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        name: "Volkswagen Polo",
        type: "Hatchback",
        seats: 5,
        transmission: "Manual",
        fuelType: "Petrol",
        basePrice: 35,
        location: "Cape Town Downtown",
        image:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "African Motors",
    logo: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&q=80",
    cars: [
      {
        id: 3,
        name: "Toyota Fortuner",
        type: "SUV",
        seats: 7,
        transmission: "Automatic",
        fuelType: "Diesel",
        basePrice: 75,
        location: "Johannesburg OR Tambo Airport",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        name: "Ford Ranger",
        type: "Pickup",
        seats: 5,
        transmission: "Automatic",
        fuelType: "Diesel",
        basePrice: 65,
        location: "Johannesburg Downtown",
        image:
          "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80",
      },
    ],
  },
];

export default function Cars() {
  const [selectedCompany, setSelectedCompany] = useState(rentalCompanies[0]);
  const [selectedCar, setSelectedCar] = useState(selectedCompany.cars[0]);
  const [days, setDays] = useState(1);
  const [insurance, setInsurance] = useState(false);
  const [gps, setGps] = useState(false);

  const calculatePrice = () => {
    const basePrice = selectedCar.basePrice * days;
    const insurancePrice = insurance ? 15 * days : 0;
    const gpsPrice = gps ? 5 * days : 0;
    return basePrice + insurancePrice + gpsPrice;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Car Rentals</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Rental Company
            </label>
            <select
              className="w-full p-2 border rounded-lg"
              value={selectedCompany.id}
              onChange={(e) => {
                const company = rentalCompanies.find(
                  (c) => c.id === Number(e.target.value)
                );
                if (company) {
                  setSelectedCompany(company);
                  setSelectedCar(company.cars[0]);
                }
              }}
            >
              {rentalCompanies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Car Model</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={selectedCar.id}
              onChange={(e) => {
                const car = selectedCompany.cars.find(
                  (c) => c.id === Number(e.target.value)
                );
                if (car) setSelectedCar(car);
              }}
            >
              {selectedCompany.cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Rental Days
            </label>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 border rounded-lg"
                onClick={() => setDays(Math.max(1, days - 1))}
              >
                -
              </button>
              <span>
                {days} {days === 1 ? "day" : "days"}
              </span>
              <button
                className="p-2 border rounded-lg"
                onClick={() => setDays(days + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium mb-2">Add-ons</label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={insurance}
                onChange={(e) => setInsurance(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span>Insurance (+$15/day)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={gps}
                onChange={(e) => setGps(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span>GPS Navigation (+$5/day)</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Total Price</div>
            <div className="text-3xl font-bold">${calculatePrice()}</div>
            <div className="text-xs text-gray-500">
              Including selected add-ons
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Reserve Now
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={selectedCar.image}
          alt={selectedCar.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedCar.name}</h2>
              <p className="text-gray-600">{selectedCar.type}</p>
            </div>
            <img
              src={selectedCompany.logo}
              alt={selectedCompany.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>{selectedCar.seats} seats</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Cog className="w-5 h-5 mr-2" />
              <span>{selectedCar.transmission}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Fuel className="w-5 h-5 mr-2" />
              <span>{selectedCar.fuelType}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{selectedCar.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
