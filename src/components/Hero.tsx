import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] mb-16">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        alt="Beautiful Villa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center max-w-xl">
        <h1 className="text-6xl font-bold mb-6">
          Experience the World, <span>One Stay at a Time.</span>
        </h1>
        <p className="text-xl mb-8">
          Book unique stays, discover local events, and plan your perfect
          journey.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/stays"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Find Your Stay</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/become-host"
            className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center space-x-2"
          >
            <span>Become a Host</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
