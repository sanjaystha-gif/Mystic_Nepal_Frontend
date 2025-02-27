import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import ClickableImage from '../common/ClickableImage';

const WorldHeritage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const sites = [
    {
      id: "sagarmatha",
      title: "Sagarmatha National Park",
      image: "/images/places/world-heritage/SagarmathaNp.jpg",
      description: "Home to Mount Everest, this park features dramatic mountains, glaciers, deep valleys, and is home to rare species like the snow leopard.",
      tags: ["Natural", "UNESCO"],
      location: "Solukhumbu District",
      rating: "4.9",
      isFeatured: true
    },
    {
      id: "pashupatinath",
      title: "Pashupatinath Temple",
      image: "/images/places/world-heritage/pashupatinath.jpg",
      description: "Sacred Hindu temple complex along the banks of Bagmati River, dedicated to Lord Shiva and a major pilgrimage destination.",
      tags: ["Cultural", "UNESCO"],
      location: "Kathmandu",
      rating: "4.9",
      isFeatured: true
    },
    {
      id: "lumbini",
      title: "Lumbini",
      image: "/images/places/world-heritage/LUMBINI.jpg",
      description: "Birthplace of Lord Buddha, featuring ancient ruins, modern temples, and monasteries from various Buddhist nations.",
      tags: ["Cultural", "UNESCO"],
      location: "Rupandehi District",
      rating: "4.8",
      isFeatured: true
    },
    {
      id: "boudhanath",
      title: "Boudhanath Stupa",
      image: "/images/places/world-heritage/boudha.jpg",
      description: "One of the largest spherical stupas in Nepal, the site is a center of Tibetan Buddhism and culture.",
      tags: ["Cultural", "UNESCO"],
      location: "Kathmandu",
      rating: "4.8"
    },
    {
      id: "changu-narayan",
      title: "Changu Narayan Temple",
      image: "/images/places/world-heritage/changu_narayan.jpg",
      description: "The oldest Hindu temple in the Kathmandu Valley, known for its intricate wood and stone carvings.",
      tags: ["Cultural", "UNESCO"],
      location: "Bhaktapur",
      rating: "4.7"
    },
    {
      id: "bhaktapur-durbar",
      title: "Bhaktapur Durbar Square",
      image: "/images/places/world-heritage/bhaktapurNp.jpg",
      description: "Best-preserved palace complex, showcasing the rich culture, architecture, and wood, metal and stone artistry of ancient Nepal.",
      tags: ["Cultural", "UNESCO"],
      location: "Bhaktapur",
      rating: "4.8"
    },
    {
      id: "kathmandu-durbar",
      title: "Kathmandu Durbar Square",
      image: "/images/places/world-heritage/KATHMANDU.jpg",
      description: "Ancient seat of Nepalese royalty, featuring stunning architecture, temples, and courtyards that showcase Nepal's rich history.",
      tags: ["Cultural", "UNESCO"],
      location: "Kathmandu",
      rating: "4.7"
    },
    {
      id: "patan-durbar",
      title: "Patan Durbar Square",
      image: "/images/places/world-heritage/patann.jpg",
      description: "Known for its stunning Newari architecture, ancient temples, and rich cultural heritage in the heart of Patan city.",
      tags: ["Cultural", "UNESCO"],
      location: "Lalitpur",
      rating: "4.8"
    }
  ];

  const filteredSites = activeFilter === 'all'
    ? sites
    : sites.filter(site => site.tags.includes(activeFilter));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-6">
        <FaFilter className="text-gray-500" />
        <button
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          All Sites
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'Cultural'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('Cultural')}
        >
          Cultural
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'Natural'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('Natural')}
        >
          Natural
        </button>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSites.map((site) => (
          <div key={site.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <ClickableImage
                src={site.image}
                alt={site.title}
                className="w-full h-64 object-cover"
                type="place"
                id={site.id}
              />
              {site.isFeatured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{site.title}</h3>
              <p className="text-gray-600 mb-4">{site.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-600">{site.rating}</span>
                </div>
                <div className="text-gray-500 text-sm">{site.location}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldHeritage;
