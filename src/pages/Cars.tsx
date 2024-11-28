import { useState } from "react";
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Car,
  Users,
  Fuel,
  Cog,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Calendar,
  MapPin,
  Truck,
  AlertCircle,
} from "lucide-react";

const rentalCompanies = [
  {
    id: 1,
    name: "Safari Wheels",
    logo: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&q=80",
    cars: [
      {
        id: 1,
        name: "Toyota Corolla Quest",
        type: "Entry Level Sedan",
        seats: 5,
        transmission: "Manual",
        fuelType: "Petrol",
        basePrice: 450,
        deposit: 5000,
        location: "Cape Town International Airport",
        image:
          "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        name: "Volkswagen Polo",
        type: "Economy Hatchback",
        seats: 5,
        transmission: "Manual",
        fuelType: "Petrol",
        basePrice: 350,
        deposit: 4000,
        location: "Cape Town Downtown",
        image:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        name: "BMW M4 Competition",
        type: "Sports Car",
        seats: 4,
        transmission: "Automatic",
        fuelType: "Petrol",
        basePrice: 2500,
        deposit: 25000,
        location: "Cape Town V&A Waterfront",
        image:
          "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "African Motors",
    logo: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&q=80",
    cars: [
      {
        id: 4,
        name: "Toyota Fortuner",
        type: "Premium SUV",
        seats: 7,
        transmission: "Automatic",
        fuelType: "Diesel",
        basePrice: 950,
        deposit: 15000,
        location: "Johannesburg OR Tambo Airport",
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
      },
      {
        id: 5,
        name: "Porsche 911 Carrera",
        type: "Luxury Sports",
        seats: 2,
        transmission: "Automatic",
        fuelType: "Petrol",
        basePrice: 3500,
        deposit: 35000,
        location: "Sandton City",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      },
      {
        id: 6,
        name: "Hyundai Grand i10",
        type: "Economy",
        seats: 5,
        transmission: "Manual",
        fuelType: "Petrol",
        basePrice: 300,
        deposit: 3500,
        location: "Johannesburg Downtown",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      },
    ],
  },
];

const deliveryOptions = [
  { id: "pickup", name: "Self Pickup", price: 0 },
  { id: "delivery", name: "Door-to-Door Delivery", price: 350 },
];

export default function Cars() {
  const [selectedCompany, setSelectedCompany] = useState(rentalCompanies[0]);
  const [selectedCar, setSelectedCar] = useState(selectedCompany.cars[0]);
  const [days, setDays] = useState(1);
  const [insurance, setInsurance] = useState(false);
  const [gps, setGps] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [deliveryOption, setDeliveryOption] = useState(deliveryOptions[0]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const calculatePrice = () => {
    const basePrice = selectedCar.basePrice * days;
    const insurancePrice = insurance ? 150 * days : 0;
    const gpsPrice = gps ? 50 * days : 0;
    const deliveryPrice =
      deliveryOption.id === "delivery" ? deliveryOption.price * 2 : 0; // *2 for pickup and return
    return basePrice + insurancePrice + gpsPrice + deliveryPrice;
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
                  {car.name} - {car.type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Pickup Date
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded-lg"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Return Date
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded-lg"
              value={returnDate}
              onChange={(e) => {
                setReturnDate(e.target.value);
                const start = new Date(pickupDate);
                const end = new Date(e.target.value);
                const diffTime = Math.abs(end.getTime() - start.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                setDays(diffDays || 1);
              }}
              min={pickupDate}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Delivery Option
            </label>
            <select
              className="w-full p-2 border rounded-lg"
              value={deliveryOption.id}
              onChange={(e) => {
                const option = deliveryOptions.find(
                  (o) => o.id === e.target.value
                );
                if (option) setDeliveryOption(option);
              }}
            >
              {deliveryOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name} (
                  {option.price === 0 ? "Free" : formatPrice(option.price)})
                </option>
              ))}
            </select>
          </div>

          {deliveryOption.id === "delivery" && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Delivery Address
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter delivery address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium mb-2">Add-ons</label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={insurance}
                onChange={(e) => setInsurance(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span>Insurance (+R150/day)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={gps}
                onChange={(e) => setGps(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span>GPS Navigation (+R50/day)</span>
            </label>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-yellow-800 font-medium">
                  Required Deposit: {formatPrice(selectedCar.deposit)}
                </p>
                <p className="text-xs text-yellow-700 mt-1">
                  Refundable upon return if vehicle is in original condition
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Total Price</div>
            <div className="text-3xl font-bold">
              {formatPrice(calculatePrice())}
            </div>
            <div className="text-xs text-gray-500">
              Including selected add-ons
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="text-gray-600 hover:text-gray-800 text-sm underline"
          >
            View Terms & Conditions
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Reserve Now
          </button>
        </div>

        {showTerms && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
            <h3 className="font-bold mb-2">Terms & Conditions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • Full payment (rental + deposit of{" "}
                {formatPrice(selectedCar.deposit)}) required before vehicle
                collection
              </li>
              <li>• Vehicle must be returned with a full tank of fuel</li>
              <li>
                • Deposit will be forfeited for:
                <ul className="ml-4 mt-1">
                  <li>- Any damage to the vehicle</li>
                  <li>- Returning the vehicle with less than a full tank</li>
                  <li>- Late returns (R500/hour after grace period)</li>
                </ul>
              </li>
              <li>• Valid driver's license and credit card required</li>
              <li>• Minimum driver age: 23 years</li>
              <li>• Unlimited mileage included</li>
              <li>• 1-hour grace period for returns</li>
            </ul>
          </div>
        )}
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
            {deliveryOption.id === "delivery" && (
              <div className="flex items-center text-gray-600 col-span-2">
                <Truck className="w-5 h-5 mr-2" />
                <span>Door-to-door delivery available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
