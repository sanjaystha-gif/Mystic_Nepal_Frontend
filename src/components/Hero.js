import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-nepal.jpg')"
        }}
      />
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to the Land of Himalayas
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Discover the mystical beauty, rich culture, and breathtaking adventures that Nepal has to offer
          </p>
          <div className="space-x-4">
            <Link
              to="/places"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold"
            >
              Explore Destinations
            </Link>
            <Link
              to="/activities"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
