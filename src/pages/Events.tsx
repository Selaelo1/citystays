import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Cape Town Jazz Festival",
    date: "2024-04-15",
    time: "18:00",
    location: "Cape Town International Convention Centre",
    price: 75,
    capacity: 200,
    description:
      "Annual jazz festival featuring local and international artists",
  },
  {
    id: 2,
    title: "Wine & Food Festival",
    date: "2024-05-20",
    time: "12:00",
    location: "Stellenbosch Wine Route",
    price: 120,
    capacity: 150,
    description: "Explore the finest wines and cuisine of the Cape Winelands",
  },
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Local Events</h1>

      <div className="grid gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString()}, {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>3 hours</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.capacity} spots available</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-bold mb-4">${event.price}</div>
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
