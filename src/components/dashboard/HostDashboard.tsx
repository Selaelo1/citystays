import { User } from "../../types/auth";
import { Home, Users, DollarSign, Star, Calendar, Bell } from "lucide-react";

interface HostDashboardProps {
  user: User;
}

// Mock data
const properties = [
  {
    id: 1,
    name: "Luxury Waterfront Apartment",
    location: "Cape Town, South Africa",
    status: "active",
    bookings: 15,
    rating: 4.9,
    revenue: 12500,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "City Bowl Penthouse",
    location: "Cape Town, South Africa",
    status: "active",
    bookings: 12,
    rating: 4.8,
    revenue: 9800,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
  },
];

const upcomingBookings = [
  {
    id: 1,
    guest: "John Smith",
    property: "Luxury Waterfront Apartment",
    checkIn: "2024-03-15",
    checkOut: "2024-03-20",
    guests: 2,
    status: "confirmed",
  },
  {
    id: 2,
    guest: "Emma Wilson",
    property: "City Bowl Penthouse",
    checkIn: "2024-03-18",
    checkOut: "2024-03-25",
    guests: 3,
    status: "pending",
  },
];

const notifications = [
  {
    id: 1,
    type: "booking",
    message: "New booking request from Sarah for Luxury Waterfront Apartment",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "review",
    message: "New 5-star review for City Bowl Penthouse",
    time: "5 hours ago",
  },
];

export default function HostDashboard({ user }: HostDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Host Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}</p>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Properties</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <Home className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Bookings</p>
              <p className="text-2xl font-bold">27</p>
            </div>
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$22,300</p>
            </div>
            <DollarSign className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Avg Rating</p>
              <p className="text-2xl font-bold">4.85</p>
            </div>
            <Star className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Properties Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{property.name}</h3>
                    <p className="text-gray-600">{property.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {property.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500">Bookings</p>
                    <p className="font-bold">{property.bookings}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rating</p>
                    <p className="font-bold">{property.rating}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Revenue</p>
                    <p className="font-bold">${property.revenue}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Bookings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Bookings</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {upcomingBookings.map((booking, index) => (
              <div
                key={booking.id}
                className={`p-4 ${
                  index !== upcomingBookings.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{booking.property}</h3>
                    <p className="text-sm text-gray-500">{booking.guest}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {booking.checkIn} - {booking.checkOut}
                  </span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>{booking.guests} guests</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Notifications</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`p-4 flex items-start ${
                  index !== notifications.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <Bell className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
