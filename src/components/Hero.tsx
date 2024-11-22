import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[90vh] mb-16">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        alt="Beautiful Villa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4 sm:px-6 md:px-8">
        {/* Title with responsive text size */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Experience the World, <span>One Stay at a Time.</span>
        </h1>
        {/* Description with responsive text size */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
          Book unique stays, discover local events, and plan your perfect
          journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/stays"
            className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto"
          >
            <span>Find Your Stay</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/become-host"
            className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto"
          >
            <span>Become a Host</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
