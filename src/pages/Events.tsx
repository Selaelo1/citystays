import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Info, X } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  description: string;
  ageRestriction: string;
  category: string;
  image: string;
  terms: string[];
  organizer: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Cape Town Jazz Festival",
    date: "2024-04-15",
    time: "18:00",
    location: "Cape Town International Convention Centre",
    price: 750,
    capacity: 200,
    description:
      "Annual jazz festival featuring local and international artists. Experience world-class performances across multiple stages.",
    ageRestriction: "18+",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    terms: [
      "No refunds unless event is cancelled",
      "Valid ID required for entry",
      "No outside food or beverages",
      "Professional cameras require media pass",
    ],
    organizer: "espAfrika",
  },
  {
    id: 2,
    title: "Wine & Food Festival",
    date: "2024-05-20",
    time: "12:00",
    location: "Stellenbosch Wine Route",
    price: 1200,
    capacity: 150,
    description:
      "Explore the finest wines and cuisine of the Cape Winelands. Includes wine tasting, gourmet food pairings, and live entertainment.",
    ageRestriction: "18+",
    category: "Food & Wine",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
    terms: [
      "No driving after wine tasting",
      "Shuttle service available",
      "Designated driver tickets available at reduced price",
      "Food allergies must be disclosed in advance",
    ],
    organizer: "Stellenbosch Wine Routes",
  },
  {
    id: 3,
    title: "Comic Con Africa",
    date: "2024-06-10",
    time: "10:00",
    location: "Johannesburg Expo Centre",
    price: 450,
    capacity: 500,
    description:
      "The biggest pop culture event in Africa featuring cosplay, gaming, comics, and special guest appearances.",
    ageRestriction: "All ages",
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0822045d23?auto=format&fit=crop&q=80",
    terms: [
      "Costume weapons must be peace-bonded",
      "Photography allowed except where prohibited",
      "Children under 12 must be accompanied by an adult",
      "No refunds on autograph or photo-op tickets",
    ],
    organizer: "Reed Exhibitions",
  },
  {
    id: 4,
    title: "Ultra South Africa",
    date: "2024-07-15",
    time: "14:00",
    location: "Cape Town Stadium",
    price: 950,
    capacity: 1000,
    description:
      "Premier electronic music festival featuring top international DJs and spectacular production.",
    ageRestriction: "18+",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    terms: [
      "No re-entry allowed",
      "RFID wristband required for entry",
      "No backpacks or large bags",
      "Weather-related cancellations non-refundable",
    ],
    organizer: "Ultra Worldwide",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
      <h1 className="text-3xl font-bold mb-8">Local Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-48 relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-full text-sm">
                {event.category}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-ZA")} at{" "}
                    {event.time}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.capacity} spots available</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {formatPrice(event.price)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {event.ageRestriction}
                  </div>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">About the Event</h3>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Event Details</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {new Date(selectedEvent.date).toLocaleDateString(
                            "en-ZA"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requirements</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Age Restriction: {selectedEvent.ageRestriction}</p>
                      <p>Organizer: {selectedEvent.organizer}</p>
                      <p>Capacity: {selectedEvent.capacity} people</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Terms & Conditions</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {selectedEvent.terms.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold">
                      {formatPrice(selectedEvent.price)}
                    </div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
