import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import { FaFilter, FaSortAmountDown } from 'react-icons/fa';

const EightThousanders = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('height');

  const mountains = [
    {
      title: "Mount Everest (Sagarmatha)",
      image: "/images/places/mountains/sagarmatha.jpg",
      description: "The highest peak on Earth at 8,848.86m, Mount Everest continues to captivate adventurers worldwide.",
      link: "/places/mountains/everest",
      height: 8848.86,
      firstAscent: "1953",
      location: "Solukhumbu District",
      rating: "5.0",
      isFeatured: true
    },
    {
      title: "Kanchenjunga",
      image: "/images/places/mountains/kanche.jpg",
      description: "The third highest mountain in the world at 8,586m, known for its five peaks and sacred status.",
      link: "/places/mountains/kanchenjunga",
      height: 8586,
      firstAscent: "1955",
      location: "Taplejung District",
      rating: "4.9"
    },
    {
      title: "Lhotse",
      image: "/images/places/mountains/lhotse.jpg",
      description: "Connected to Everest via the South Col, Lhotse stands at 8,516m with its distinctive couloir.",
      link: "/places/mountains/lhotse",
      height: 8516,
      firstAscent: "1956",
      location: "Solukhumbu District",
      rating: "4.8"
    },
    {
      title: "Makalu",
      image: "/images/places/mountains/makalu.jpg",
      description: "The fifth highest peak at 8,485m, known for its distinctive pyramid shape.",
      link: "/places/mountains/makalu",
      height: 8485,
      firstAscent: "1955",
      location: "Sankhuwasabha District",
      rating: "4.8"
    },
    {
      title: "Cho Oyu",
      image: "/images/places/mountains/cho oyu.jpg",
      description: "The sixth highest mountain at 8,188m, considered one of the more accessible 8000ers.",
      link: "/places/mountains/cho-oyu",
      height: 8188,
      firstAscent: "1954",
      location: "Solukhumbu District",
      rating: "4.7"
    },
    {
      title: "Dhaulagiri I",
      image: "/images/places/mountains/dhaulagiri.jpg",
      description: "The seventh highest peak at 8,167m, featuring dramatic rises above local terrain.",
      link: "/places/mountains/dhaulagiri",
      height: 8167,
      firstAscent: "1960",
      location: "Myagdi District",
      rating: "4.8"
    },
    {
      title: "Manaslu",
      image: "/images/places/mountains/manaslu.jpg",
      description: "The eighth highest mountain at 8,163m, known as the 'Mountain of the Spirit'.",
      link: "/places/mountains/manaslu",
      height: 8163,
      firstAscent: "1956",
      location: "Gorkha District",
      rating: "4.7"
    },
    {
      title: "Annapurna I",
      image: "/images/places/mountains/annapurna 1.jpg",
      description: "The tenth highest peak at 8,091m, first 8000er to be climbed and known for its difficult terrain.",
      link: "/places/mountains/annapurna",
      height: 8091,
      firstAscent: "1950",
      location: "Kaski District",
      rating: "4.9",
      isFeatured: true
    }
  ];

  const sortMountains = (mountains) => {
    switch (sortBy) {
      case 'height':
        return [...mountains].sort((a, b) => b.height - a.height);
      case 'name':
        return [...mountains].sort((a, b) => a.title.localeCompare(b.title));
      case 'firstAscent':
        return [...mountains].sort((a, b) => a.firstAscent.localeCompare(b.firstAscent));
      default:
        return mountains;
    }
  };

  const filteredMountains = activeFilter === 'all'
    ? sortMountains(mountains)
    : sortMountains(mountains.filter(mountain => mountain.height > 8500));

  return (
    <div>
      {/* Header and Filters */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Eight-thousanders of Nepal</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400" />
              <span className="text-sm text-gray-500">Filter by:</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSortAmountDown className="text-gray-400" />
              <span className="text-sm text-gray-500">Sort by:</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {/* Filter Buttons */}
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All Peaks
          </button>
          <button
            onClick={() => setActiveFilter('above8500')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'above8500'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Above 8500m
          </button>

          {/* Sort Buttons */}
          <button
            onClick={() => setSortBy('height')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              sortBy === 'height'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            By Height
          </button>
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              sortBy === 'name'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            By Name
          </button>
          <button
            onClick={() => setSortBy('firstAscent')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              sortBy === 'firstAscent'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            By First Ascent
          </button>
        </div>
      </div>

      {/* Grid of Mountains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMountains.map((mountain, index) => (
          <PlaceCard 
            key={index} 
            {...mountain} 
            subtitle={`Height: ${mountain.height}m | First Ascent: ${mountain.firstAscent}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EightThousanders;
