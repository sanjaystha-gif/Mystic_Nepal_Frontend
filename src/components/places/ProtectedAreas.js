import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import ClickableImage from '../common/ClickableImage';

const ProtectedAreas = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const areas = [
    {
      id: "sagarmatha-np",
      title: "Sagarmatha National Park",
      image: "/images/places/protected-areas/SagarmathaNp.jpg",
      description: "Home to Mount Everest and rare wildlife species, this park offers stunning mountain views and unique biodiversity.",
      tags: ["National Park", "UNESCO"],
      location: "Solukhumbu District",
      rating: "4.9",
      isFeatured: true
    },
    {
      id: "chitwan-np",
      title: "Chitwan National Park",
      image: "/images/places/protected-areas/chitwan.jpg",
      description: "Famous for one-horned rhinoceros and Bengal tigers, offering jungle safaris and wildlife experiences.",
      tags: ["National Park", "UNESCO"],
      location: "Chitwan District",
      rating: "4.8",
      isFeatured: true
    },
    {
      id: "langtang-np",
      title: "Langtang National Park",
      image: "/images/places/protected-areas/langtag.jpg",
      description: "Known for its diverse flora and fauna, glaciers, and spectacular mountain views.",
      tags: ["National Park"],
      location: "Rasuwa District",
      rating: "4.7"
    },
    {
      id: "shey-phoksundo-np",
      title: "Shey Phoksundo National Park",
      image: "/images/places/protected-areas/shey.jpg",
      description: "Features the deepest lake in Nepal and preserves unique trans-Himalayan ecosystem.",
      tags: ["National Park"],
      location: "Dolpa District",
      rating: "4.8"
    },
    {
      id: "bardiya-np",
      title: "Bardiya National Park",
      image: "/images/places/protected-areas/Bardiya.jpg",
      description: "Largest and most undisturbed wilderness area in Nepal's Terai, known for wild elephants and tigers.",
      tags: ["National Park"],
      location: "Bardiya District",
      rating: "4.8"
    },
    {
      id: "shivapuri-np",
      title: "Shivapuri National Park",
      image: "/images/places/protected-areas/shivapuri.jpg",
      description: "Important watershed supplying drinking water to Kathmandu Valley, rich in bird species.",
      tags: ["National Park"],
      location: "Kathmandu District",
      rating: "4.6"
    },
    {
      id: "parsa-np",
      title: "Parsa National Park",
      image: "/images/places/protected-areas/parsa.jpg",
      description: "Wildlife corridor connecting Nepal and India, home to various endangered species.",
      tags: ["National Park"],
      location: "Parsa District",
      rating: "4.5"
    },
    {
      id: "rara-np",
      title: "Rara National Park",
      image: "/images/places/protected-areas/rara-lake.jpg",
      description: "Features the largest lake in Nepal, surrounded by pristine forest and snow-capped peaks.",
      tags: ["National Park"],
      location: "Mugu District",
      rating: "4.8",
      isFeatured: true
    }
  ];

  const filteredAreas = activeFilter === 'all'
    ? areas
    : areas.filter(area => area.tags.includes(activeFilter));

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
          All Areas
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'National Park'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('National Park')}
        >
          National Parks
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'UNESCO'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('UNESCO')}
        >
          UNESCO Sites
        </button>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAreas.map((area) => (
          <div key={area.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <ClickableImage
                src={area.image}
                alt={area.title}
                className="w-full h-64 object-cover"
                type="place"
                id={area.id}
              />
              {area.isFeatured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-600">{area.rating}</span>
                </div>
                <div className="text-gray-500 text-sm">{area.location}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.tags.map((tag, index) => (
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

export default ProtectedAreas;
