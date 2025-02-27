import React, { useState } from 'react';
import PlaceCard from './PlaceCard';
import { FaFilter } from 'react-icons/fa';

const PilgrimageSites = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const sites = [
    {
      title: "Pashupatinath Temple",
      image: "/images/places/temples/pashupatinath.jpg",
      description: "One of the most sacred Hindu temples dedicated to Lord Shiva, situated on the banks of the Bagmati River.",
      link: "/places/pilgrimage/pashupatinath",
      tags: ["Hindu", "UNESCO"],
      location: "Kathmandu",
      rating: "4.9",
      isFeatured: true
    },
    {
      title: "Muktinath Temple",
      image: "/images/places/temples/muktinath.jpg",
      description: "A sacred temple for both Hindus and Buddhists, located at an altitude of 3,710 meters.",
      link: "/places/pilgrimage/muktinath",
      tags: ["Hindu", "Buddhist"],
      location: "Mustang District",
      rating: "4.8",
      isFeatured: true
    },
    {
      title: "Boudhanath Stupa",
      image: "/images/places/temples/boudha.jpg",
      description: "One of the largest spherical stupas in Nepal and the holiest Tibetan Buddhist temple outside Tibet.",
      link: "/places/pilgrimage/boudhanath",
      tags: ["Buddhist", "UNESCO"],
      location: "Kathmandu",
      rating: "4.9",
      isFeatured: true
    },
    {
      title: "Swayambhunath Stupa",
      image: "/images/places/temples/Swayambhu.jpg",
      description: "Ancient religious complex atop a hill, also known as the Monkey Temple.",
      link: "/places/pilgrimage/swayambhunath",
      tags: ["Buddhist", "UNESCO"],
      location: "Kathmandu",
      rating: "4.8"
    },
    {
      title: "Manakamana Temple",
      image: "/images/places/temples/manakamana.jpg",
      description: "Famous temple dedicated to the Hindu goddess Bhagwati, believed to fulfill wishes.",
      link: "/places/pilgrimage/manakamana",
      tags: ["Hindu"],
      location: "Gorkha District",
      rating: "4.7"
    },
    {
      title: "Changu Narayan Temple",
      image: "/images/places/temples/changu_narayan.jpg",
      description: "The oldest Hindu temple in the Kathmandu Valley, dedicated to Lord Vishnu.",
      link: "/places/pilgrimage/changu-narayan",
      tags: ["Hindu", "UNESCO"],
      location: "Bhaktapur",
      rating: "4.7"
    },
    {
      title: "Namobuddha",
      image: "/images/places/temples/namobuddha.jpg",
      description: "One of the most important Buddhist pilgrimage sites, known for its peaceful atmosphere.",
      link: "/places/pilgrimage/namobuddha",
      tags: ["Buddhist"],
      location: "Kavre District",
      rating: "4.6"
    },
    {
      title: "Budhanilkantha Temple",
      image: "/images/places/temples/budhanilkantha.jpg",
      description: "Features the largest stone statue of Lord Vishnu reclining on a bed of snakes.",
      link: "/places/pilgrimage/budhanilkantha",
      tags: ["Hindu"],
      location: "Kathmandu",
      rating: "4.7"
    },
    {
      title: "Pathivara Temple",
      image: "/images/places/temples/pathivara.jpg",
      description: "A famous shrine dedicated to goddess Pathivara, situated at an altitude of 3,794 meters.",
      link: "/places/pilgrimage/pathivara",
      tags: ["Hindu"],
      location: "Taplejung District",
      rating: "4.8"
    },
    {
      title: "Dakshinkali Temple",
      image: "/images/places/temples/dakshinkali.jpg",
      description: "Major Hindu temple dedicated to Goddess Kali, known for its religious significance.",
      link: "/places/pilgrimage/dakshinkali",
      tags: ["Hindu"],
      location: "Kathmandu",
      rating: "4.6"
    }
  ];

  const filteredSites = activeFilter === 'all'
    ? sites
    : sites.filter(site => site.tags.includes(activeFilter));

  return (
    <div>
      {/* Header and Filters */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Pilgrimage Sites</h2>
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-400" />
            <span className="text-sm text-gray-500">Filter by:</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All Sites
          </button>
          <button
            onClick={() => setActiveFilter('Hindu')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Hindu'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Hindu Temples
          </button>
          <button
            onClick={() => setActiveFilter('Buddhist')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'Buddhist'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Buddhist Sites
          </button>
          <button
            onClick={() => setActiveFilter('UNESCO')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'UNESCO'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            UNESCO Sites
          </button>
        </div>
      </div>

      {/* Grid of Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSites.map((site, index) => (
          <PlaceCard key={index} {...site} />
        ))}
      </div>
    </div>
  );
};

export default PilgrimageSites;
