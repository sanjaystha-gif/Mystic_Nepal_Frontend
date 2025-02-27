import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const EventCard = ({
  title,
  image,
  description,
  date,
  location,
  duration,
  category,
  link,
  isUpcoming
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {isUpcoming && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Upcoming
          </div>
        )}
        {category && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          {date && (
            <div className="flex items-center">
              <FaCalendar className="mr-2 text-blue-600" />
              <span>{date}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-600" />
              <span>{location}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center">
              <FaClock className="mr-2 text-blue-600" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

        <Link
          to={link}
          className="inline-block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
