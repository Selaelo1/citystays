import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import StayDetails from "./pages/StayDetails";
import BecomeHost from "./pages/BecomeHost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import Events from "./pages/Events";
import Cars from "./pages/Cars";
import Flights from "./pages/Flights";
import Guides from "./pages/Guides";
import DestinationStays from "./pages/DestinationStays";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stays" element={<Stays />} />
              <Route path="/stays/:id" element={<StayDetails />} />
              <Route path="/become-host" element={<BecomeHost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/destination/:city" element={<DestinationStays />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
