import { User } from "../../types/auth";
import { Calendar, MapPin, Clock, CreditCard } from "lucide-react";

interface ClientDashboardProps {
  user: User;
}

// Mock data
const upcomingBookings = [
  {
    id: 1,
    property: "Luxury Waterfront Apartment",
    location: "Cape Town, South Africa",
    checkIn: "2024-03-15",
    checkOut: "2024-03-20",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    property: "Beach Villa Resort",
    location: "Zanzibar, Tanzania",
    checkIn: "2024-04-10",
    checkOut: "2024-04-15",
    price: 1600,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "booking",
    description: "Booked Luxury Waterfront Apartment",
    date: "2024-02-28",
  },
  {
    id: 2,
    type: "review",
    description: "Left a review for Stone Town Heritage Hotel",
    date: "2024-02-25",
  },
  {
    id: 3,
    type: "payment",
    description: "Payment processed for Beach Villa Resort",
    date: "2024-02-20",
  },
];

export default function ClientDashboard({ user }: ClientDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
          <p className="text-gray-600">Manage your bookings and account</p>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Bookings</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Countries Visited</p>
              <p className="text-2xl font-bold">4</p>
            </div>
            <MapPin className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Nights Booked</p>
              <p className="text-2xl font-bold">45</p>
            </div>
            <Clock className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Stays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={booking.image}
                  alt={booking.property}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{booking.property}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{booking.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <p>Check-in: {booking.checkIn}</p>
                    <p>Check-out: {booking.checkOut}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-black font-bold text-lg">
                      ${booking.price}
                    </p>
                    <p>Total</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {recentActivity.map((activity, index) => (
            <div
              key={activity.id}
              className={`p-4 flex items-center justify-between ${
                index !== recentActivity.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div className="flex items-center">
                {activity.type === "booking" && (
                  <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                )}
                {activity.type === "review" && (
                  <Clock className="w-5 h-5 text-green-500 mr-3" />
                )}
                {activity.type === "payment" && (
                  <CreditCard className="w-5 h-5 text-purple-500 mr-3" />
                )}
                <div>
                  <p className="font-medium">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
