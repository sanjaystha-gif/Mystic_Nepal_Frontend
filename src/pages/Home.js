import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaHiking, FaCalendarAlt, FaMountain, FaCamera, FaUserFriends, FaSearch } from 'react-icons/fa';
import ImageModal from '../components/ImageModal';
import { useSearch } from '../context/SearchContext';

// Custom CSS for gradient animation
const gradientStyle = {
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  },
  '.animate-gradient': {
    backgroundSize: '200% auto',
    animation: 'gradient 3s ease infinite'
  }
};

const Home = () => {
  const [modalImage, setModalImage] = useState({ url: '', alt: '', isOpen: false });
  const [searchInput, setSearchInput] = useState('');
  const { search } = useSearch();
  const navigate = useNavigate();

  const handleImageClick = (url, alt) => {
    setModalImage({ url, alt, isOpen: true });
  };

  const closeModal = () => {
    setModalImage({ url: '', alt: '', isOpen: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      search(searchInput);
      navigate('/search-results');
    }
  };

  return (
    <div className="min-h-screen">
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imageUrl={modalImage.url}
        altText={modalImage.alt}
      />
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/videos/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="text-yellow-400">Nepal</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover the enchanting beauty of Nepal - from towering Himalayas to ancient
            temples, vibrant cultures to thrilling adventures.
          </p>
          <button
            onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Exploring
          </button>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Nepal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Places to Go */}
          <Link
            to="/places-to-go"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/destinations/kathmandu-durbar-square.jpg"
                alt="Kathmandu Durbar Square"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Places to Go</h3>
              </div>
              <p className="text-gray-600">Discover iconic destinations and hidden gems</p>
            </div>
          </Link>

          {/* Activities */}
          <Link
            to="/activities"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/activities/paragliding.jpg"
                alt="Adventure Activities"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <FaHiking className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Activities</h3>
              </div>
              <p className="text-gray-600">Experience thrilling adventures and cultural activities</p>
            </div>
          </Link>

          {/* Events */}
          <Link
            to="/events"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/events/holi-festival.jpg"
                alt="Holi Festival"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Events</h3>
              </div>
              <p className="text-gray-600">Join vibrant festivals and cultural celebrations</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Adventure Activities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Adventure Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Everest Base Camp Trek */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/activities/everest-trek.jpg"
                alt="Everest Base Camp Trek"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Everest Base Camp Trek</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-4">14 Days</span>
                <span>Khumbu Region</span>
              </div>
              <p className="text-gray-600 mb-4">
                Trek to the base of the world's highest mountain through stunning Sherpa villages and breathtaking landscapes.
              </p>
              <div className="flex items-center">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Challenging
                </span>
              </div>
            </div>
          </div>

          {/* Annapurna Circuit Trek */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/activities/annapurna.jpg"
                alt="Annapurna Circuit Trek"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Annapurna Circuit Trek</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-4">12-16 Days</span>
                <span>Annapurna Region</span>
              </div>
              <p className="text-gray-600 mb-4">
                Complete one of the world's most diverse treks, crossing the Thorong La Pass and experiencing dramatic landscapes.
              </p>
              <div className="flex items-center">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Challenging
                </span>
              </div>
            </div>
          </div>

          {/* Pokhara Paragliding */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/activities/paragliding.jpg"
                alt="Pokhara Paragliding"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pokhara Paragliding</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-4">30 Minutes</span>
                <span>Pokhara</span>
              </div>
              <p className="text-gray-600 mb-4">
                Soar like a bird over Pokhara Valley with views of Phewa Lake and the Annapurna range.
              </p>
              <div className="flex items-center">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Easy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Visit Nepal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaMountain className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Majestic Himalayas</h3>
              <p className="text-gray-600">Home to eight of the world's highest peaks, including Mount Everest</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCamera className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rich Heritage</h3>
              <p className="text-gray-600">Ancient temples, historic cities, and UNESCO World Heritage sites</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserFriends className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Warm Hospitality</h3>
              <p className="text-gray-600">Experience the warmth and friendliness of Nepali people</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div id="destinations" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Everest Base Camp */}
          <Link
            to="/destination/everest-base-camp"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/destinations/everest-base-camp.jpg"
                alt="Everest Base Camp"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Everest Base Camp</h3>
              <p className="text-gray-600">Trek to the base of the world's highest peak</p>
            </div>
          </Link>

          {/* Kathmandu Durbar Square */}
          <Link
            to="/destination/kathmandu-durbar-square"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/destinations/kathmandu-durbar-square.jpg"
                alt="Kathmandu Durbar Square"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Kathmandu Durbar Square</h3>
              <p className="text-gray-600">Explore ancient palaces and temples</p>
            </div>
          </Link>

          {/* Pokhara */}
          <Link
            to="/destination/pokhara"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/destinations/pokhara-lakeside.jpeg"
                alt="Pokhara"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Pokhara</h3>
              <p className="text-gray-600">Adventure sports and lakeside relaxation</p>
            </div>
          </Link>

          {/* Chitwan National Park */}
          <Link
            to="/destination/chitwan-national-park"
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/destinations/chitwan-national-park.jpeg"
                alt="Chitwan National Park"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Chitwan National Park</h3>
              <p className="text-gray-600">Wildlife safaris and jungle adventures</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Nepal Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in exploring the wonders of Nepal
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
