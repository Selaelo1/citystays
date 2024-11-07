import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ClientDashboard from "../components/dashboard/ClientdashBoard";
import HostDashboard from "../components/dashboard/HostDashboard";
import AdminDashboard from "../components/dashboard/AdminDashboard";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {user.role === "client" && <ClientDashboard user={user} />}
      {user.role === "host" && <HostDashboard user={user} />}
      {user.role === "admin" && <AdminDashboard user={user} />}
    </div>
  );
}
