import { Home, Calendar, Car, Plane, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Unique Stays",
    description: "Find and book the perfect accommodation for your journey",
    path: "/search",
  },
  {
    icon: Calendar,
    title: "Local Events",
    description: "Discover and experience exclusive events in your destination",
    path: "/events",
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Get the best deals on car rentals worldwide",
    path: "/cars",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book flights at competitive prices to anywhere in the world",
    path: "/flights",
  },
  {
    icon: Map,
    title: "Local Guides",
    description:
      "Connect with experienced local guides for authentic experiences",
    path: "/guides",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-600 text-lg">
            All your travel needs in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
