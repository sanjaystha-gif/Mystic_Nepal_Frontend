import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ActivityCard = ({
  title,
  image,
  description,
  duration,
  location,
  difficulty,
  link
}) => {
  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'challenging':
        return 'bg-orange-100 text-orange-800';
      case 'difficult':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          
          <div className="flex items-center mb-4 space-x-4">
            {duration && (
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                <span>{duration}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{location}</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-4">{description}</p>

          {difficulty && (
            <div className="flex items-center justify-between">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
              <span className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
