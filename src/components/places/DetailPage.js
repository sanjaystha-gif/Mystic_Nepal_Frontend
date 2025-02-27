import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHeart, FaShare, FaCamera, FaCalendar, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa';

const DetailPage = () => {
  const { category, id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showGallery, setShowGallery] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Example data - in a real app, this would come from an API or database
  const placeData = {
    title: "Pashupatinath Temple",
    mainImage: "/images/pashupatinath-temple-main.jpg",
    gallery: [
      "/images/pashupatinath-1.jpg",
      "/images/pashupatinath-2.jpg",
      "/images/pashupatinath-3.jpg",
      "/images/pashupatinath-4.jpg"
    ],
    description: `Pashupatinath Temple is one of the most sacred Hindu temples dedicated to Lord Shiva. 
    Located on the banks of the Bagmati River in Kathmandu, Nepal, it serves as the seat of Nepal's national deity, Lord Pashupatinath. 
    The temple complex is a UNESCO World Heritage Site and consists of hundreds of temples, ashrams, and other religious structures.`,
    location: {
      address: "Pashupati Nath Road, Kathmandu 44600, Nepal",
      coordinates: { lat: 27.7109, lng: 85.3484 }
    },
    rating: 4.9,
    reviews: 1250,
    openingHours: {
      general: "4:00 AM - 9:00 PM",
      special: "Special timings during festivals"
    },
    entryFee: {
      locals: "Free",
      foreigners: "NPR 1000",
      saarc: "NPR 500"
    },
    bestTime: "Early morning or evening during aarti",
    highlights: [
      "Ancient Hindu architecture",
      "Sacred cremation ghats",
      "Evening aarti ceremony",
      "Resident monkeys",
      "Riverside location"
    ],
    guidelines: [
      "Remove shoes before entering temple premises",
      "Photography is restricted in certain areas",
      "Non-Hindus cannot enter main temple",
      "Dress modestly and respectfully",
      "Avoid leather items inside temple"
    ],
    history: `The temple's exact date of origin is unknown but historical records suggest it was established in the 5th century. 
    The current main temple structure was built in the 17th century after the original was destroyed. 
    The temple has served as a cultural and spiritual center for centuries, drawing devotees from across the Indian subcontinent.`,
    nearbyAttractions: [
      {
        title: "Boudhanath Stupa",
        image: "/images/boudhanath.jpg",
        distance: "3.2 km",
        link: "/places/pilgrimage/boudhanath"
      },
      {
        title: "Guhyeshwari Temple",
        image: "/images/guhyeshwari.jpg",
        distance: "0.5 km",
        link: "/places/pilgrimage/guhyeshwari"
      }
    ]
  };

  // Image Gallery Modal
  const ImageGallery = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={() => setShowGallery(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ×
        </button>
        <img
          src={placeData.gallery[activeImage]}
          alt={`Gallery image ${activeImage + 1}`}
          className="w-full h-[80vh] object-contain"
        />
        <div className="flex justify-center mt-4 gap-2">
          {placeData.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full ${
                activeImage === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={placeData.mainImage}
          alt={placeData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{placeData.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{placeData.location.address}</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl mr-2">★</span>
                <span>{placeData.rating}</span>
                <span className="ml-1 text-sm">({placeData.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'photos'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'info'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Information
              </button>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaHeart className="text-red-500" />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-600 leading-relaxed">{placeData.description}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {placeData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">History</h2>
                  <p className="text-gray-600 leading-relaxed">{placeData.history}</p>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {placeData.gallery.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setActiveImage(index);
                        setShowGallery(true);
                      }}
                      className="relative cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                        <FaCamera className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'info' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Visitor Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Opening Hours</h3>
                      <p className="text-gray-600">{placeData.openingHours.general}</p>
                      <p className="text-sm text-gray-500 mt-1">{placeData.openingHours.special}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Entry Fee</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>Locals: {placeData.entryFee.locals}</li>
                        <li>Foreigners: {placeData.entryFee.foreigners}</li>
                        <li>SAARC Nationals: {placeData.entryFee.saarc}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Guidelines</h2>
                  <ul className="space-y-3">
                    {placeData.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <FaInfoCircle className="text-blue-600 mt-1" />
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
              <div className="flex items-center gap-3 text-gray-600">
                <FaCalendar className="text-blue-600" />
                <span>{placeData.bestTime}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Nearby Attractions</h3>
              <div className="space-y-4">
                {placeData.nearbyAttractions.map((attraction, index) => (
                  <Link
                    key={index}
                    to={attraction.link}
                    className="flex items-center gap-4 group"
                  >
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {attraction.title}
                      </h4>
                      <p className="text-sm text-gray-500">{attraction.distance} away</p>
                    </div>
                    <FaExternalLinkAlt className="ml-auto text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && <ImageGallery />}
    </div>
  );
};

export default DetailPage;
