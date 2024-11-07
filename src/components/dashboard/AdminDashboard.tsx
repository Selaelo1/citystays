import { User } from "../../types/auth";
import {
  Users,
  Home,
  DollarSign,
  AlertCircle,
  Activity,
  Flag,
} from "lucide-react";

interface AdminDashboardProps {
  user: User;
}

// Mock data
const recentUsers = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "client",
    joined: "2024-02-28",
    status: "active",
  },
  {
    id: 2,
    name: "James Brown",
    email: "james@example.com",
    role: "host",
    joined: "2024-02-27",
    status: "pending",
  },
];

const reportedListings = [
  {
    id: 1,
    property: "Luxury Villa",
    host: "Sarah Johnson",
    reason: "Inaccurate photos",
    date: "2024-02-28",
    status: "pending",
  },
  {
    id: 2,
    property: "City Apartment",
    host: "Michael Smith",
    reason: "Misleading description",
    date: "2024-02-27",
    status: "resolved",
  },
];

const systemMetrics = [
  {
    label: "Total Users",
    value: "2,543",
    change: "+12%",
    icon: Users,
  },
  {
    label: "Active Listings",
    value: "1,234",
    change: "+8%",
    icon: Home,
  },
  {
    label: "Monthly Revenue",
    value: "$125,430",
    change: "+15%",
    icon: DollarSign,
  },
  {
    label: "Open Reports",
    value: "23",
    change: "-5%",
    icon: Flag,
  },
];

export default function AdminDashboard({ user }: AdminDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">System overview and management</p>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {systemMetrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="w-8 h-8 text-gray-400" />
              <span
                className={`text-sm ${
                  metric.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <p className="text-gray-500">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recent Users */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Users</h2>
            <button className="text-sm text-gray-600 hover:text-black">
              View all
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {recentUsers.map((user, index) => (
              <div
                key={user.id}
                className={`p-4 ${
                  index !== recentUsers.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <span className="capitalize">{user.role}</span>
                  <span className="mx-2">•</span>
                  <span>Joined {user.joined}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reported Listings */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Reported Listings</h2>
            <button className="text-sm text-gray-600 hover:text-black">
              View all
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {reportedListings.map((listing, index) => (
              <div
                key={listing.id}
                className={`p-4 ${
                  index !== reportedListings.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{listing.property}</h3>
                    <p className="text-sm text-gray-500">
                      Host: {listing.host}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      listing.status === "resolved"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {listing.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>{listing.reason}</span>
                  <span className="mx-2">•</span>
                  <span>{listing.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Activity */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">System Activity</h2>
          <button className="text-sm text-gray-600 hover:text-black">
            View all
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-2">
              <h3 className="font-medium">System Performance</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">
                    Server Status: Online
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">
                    Response Time: 120ms
                  </span>
                </div>
              </div>
            </div>
            <Activity className="w-8 h-8 text-gray-400" />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">CPU Usage</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Memory Usage</span>
                <span className="font-medium">62%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-purple-500 rounded-full"
                  style={{ width: "62%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Storage Usage</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-yellow-500 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
