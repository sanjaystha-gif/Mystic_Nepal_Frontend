import React from 'react';
import ClickableImage from '../common/ClickableImage';

const Provinces = () => {
  const provinces = [
    {
      id: "koshi-province",
      title: "Koshi Province",
      image: "/images/places/provinces/koshi.jpg",
      description: "Home to Mount Everest and diverse ethnic communities. Features stunning mountains, tea gardens, and rich biodiversity.",
      tags: ["Mountains", "Tea Gardens"],
      location: "Eastern Nepal",
      rating: "4.8",
      isFeatured: true
    },
    {
      id: "madhesh-province",
      title: "Madhesh Province",
      image: "/images/places/provinces/madhesh.jpg",
      description: "Rich in cultural heritage and agricultural lands. Home to important religious sites and the Chitwan National Park.",
      tags: ["Culture", "Wildlife"],
      location: "Southern Nepal",
      rating: "4.7"
    },
    {
      id: "bagmati-province",
      title: "Bagmati Province",
      image: "/images/places/provinces/bagmati.jpg",
      description: "Heart of Nepal featuring Kathmandu Valley. Rich in cultural heritage, temples, and historical monuments.",
      tags: ["Heritage", "Capital"],
      location: "Central Nepal",
      rating: "4.9",
      isFeatured: true
    },
    {
      id: "gandaki-province",
      title: "Gandaki Province",
      image: "/images/places/provinces/gandaki.jpg",
      description: "Home to the Annapurna range and Pokhara city. Famous for trekking routes and beautiful lakes.",
      tags: ["Lakes", "Trekking"],
      location: "North-Central Nepal",
      rating: "4.8",
      isFeatured: true
    },
    {
      id: "lumbini-province",
      title: "Lumbini Province",
      image: "/images/places/provinces/lumbini.jpg",
      description: "Birthplace of Lord Buddha. Features important Buddhist pilgrimage sites and historical places.",
      tags: ["Buddhism", "Pilgrimage"],
      location: "South-Central Nepal",
      rating: "4.8",
      isFeatured: true
    },
    {
      id: "karnali-province",
      title: "Karnali Province",
      image: "/images/places/provinces/karnali.jpg",
      description: "Largest province with pristine nature. Home to Rara Lake and unique cultural traditions.",
      tags: ["Nature", "Adventure"],
      location: "Northwestern Nepal",
      rating: "4.7"
    },
    {
      id: "sudurpashchim-province",
      title: "Sudurpashchim Province",
      image: "/images/places/provinces/sudurpaschim.jpg",
      description: "Rich in natural resources and cultural diversity. Features Khaptad National Park and unique traditions.",
      tags: ["Nature", "Culture"],
      location: "Far-Western Nepal",
      rating: "4.6"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {provinces.map((province) => (
          <div key={province.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <ClickableImage
                src={province.image}
                alt={province.title}
                className="w-full h-64 object-cover"
                type="place"
                id={province.id}
              />
              {province.isFeatured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{province.title}</h3>
              <p className="text-gray-600 mb-4">{province.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-600">{province.rating}</span>
                </div>
                <div className="text-gray-500 text-sm">{province.location}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {province.tags.map((tag, index) => (
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

export default Provinces;
