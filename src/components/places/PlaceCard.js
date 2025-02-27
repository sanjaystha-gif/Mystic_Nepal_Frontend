import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHeart, FaShare } from 'react-icons/fa';

const PlaceCard = ({ 
  image, 
  title, 
  description, 
  link, 
  tags = [], 
  location,
  rating,
  isFeatured = false 
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-lg overflow-hidden
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      ${isFeatured ? 'border-2 border-blue-500' : ''}
    `}>
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full shadow-md flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-red-500 transition-colors duration-200">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-500 transition-colors duration-200">
            <FaShare className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {rating && (
            <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-blue-900">{rating}</span>
            </div>
          )}
        </div>

        {location && (
          <div className="flex items-center text-gray-500 mb-3">
            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        )}

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <Link
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
