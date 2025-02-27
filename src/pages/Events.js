import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ClickableImage from '../components/common/ClickableImage';
import EventDetail from '../components/events/EventDetail';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: "dashain",
      title: "Dashain Festival",
      image: "/images/events/dashain.jpg",
      description: "Nepal's biggest festival celebrating the victory of good over evil. Features traditional rituals, family gatherings, and cultural performances.",
      date: "October 15-23, 2025",
      location: "Nationwide",
      duration: "9 Days",
      category: "Religious",
      isUpcoming: true
    },
    {
      id: "tihar",
      title: "Tihar - Festival of Lights",
      image: "/images/events/tihar.jpeg",
      description: "Five-day festival honoring different deities and animals, known for its beautiful light decorations and rangoli art.",
      date: "November 3-7, 2025",
      location: "Nationwide",
      duration: "5 Days",
      category: "Religious",
      isUpcoming: true
    },
    {
      id: "holi",
      title: "Holi Festival",
      image: "/images/events/holi.jpg",
      description: "Colorful spring festival where people celebrate by throwing colored powder and water at each other.",
      date: "March 14, 2025",
      location: "Nationwide",
      duration: "1 Day",
      category: "Cultural",
      isUpcoming: false
    },
    {
      id: "indra-jatra",
      title: "Indra Jatra",
      image: "/images/events/indra-jatra.jpeg",
      description: "Eight-day festival honoring Indra, the god of rain, featuring the display of the Living Goddess Kumari.",
      date: "September 18-25, 2025",
      location: "Kathmandu",
      duration: "8 Days",
      category: "Cultural",
      isUpcoming: true
    },
    {
      id: "buddha-jayanti",
      title: "Buddha Jayanti",
      image: "/images/events/buddha-jayanti.jpg",
      description: "Celebration of Buddha's birth, enlightenment, and death. Features prayers, processions, and cultural events.",
      date: "May 23, 2025",
      location: "Various Locations",
      duration: "1 Day",
      category: "Religious",
      isUpcoming: false
    },
    {
      id: "shivaratri",
      title: "Maha Shivaratri",
      image: "/images/events/shivaratri.jpg",
      description: "Major festival dedicated to Lord Shiva, drawing thousands of devotees and sadhus to Pashupatinath Temple.",
      date: "March 8, 2025",
      location: "Nationwide",
      duration: "1 Day",
      category: "Religious",
      isUpcoming: false
    }
  ];

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => 
        activeFilter === 'upcoming' ? event.isUpcoming : !event.isUpcoming
      );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Events and Festivals</h1>
        <p className="mt-2 text-lg text-gray-600">
          Experience Nepal's vibrant cultural celebrations
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          All Events
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === 'upcoming'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeFilter === 'past'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter('past')}
        >
          Past Events
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <ClickableImage
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
                type="event"
                id={event.id}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  event.isUpcoming 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.isUpcoming ? 'Upcoming' : 'Past'}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{event.description}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Duration:</span> {event.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
