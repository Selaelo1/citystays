import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] h-[90vh] mb-8 sm:mb-16">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        alt="Beautiful Villa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 sm:from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-xl text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Experience the World,{" "}
            <span className="block mt-2">One Stay at a Time.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-lg mx-auto">
            Book unique stays, discover local events, and plan your perfect
            journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/stays"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Find Your Stay</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/become-host"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              <span>Become a Host</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;