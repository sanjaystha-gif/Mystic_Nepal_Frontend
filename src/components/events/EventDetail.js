import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaArrowLeft } from 'react-icons/fa';

const EventDetail = () => {
  const { eventId } = useParams();

  // TODO: Replace with actual API call
  const event = {
    id: eventId,
    title: "Dashain Festival",
    image: "/images/events/dashain.jpg",
    description: `Nepal's biggest festival celebrating the victory of good over evil. Features traditional rituals, family gatherings, and cultural performances.

    Dashain symbolizes the victory of good over evil. The festival commemorates a great victory of the gods over the wicked demons. The symbol of the festival is the goddess Durga, the divine mother, who represents the source of life and creation.

    During this festival, families reunite, elders give blessings to younger ones, and people engage in various traditional activities like kite flying and bamboo swings. The festival is also marked by animal sacrifices and the exchange of gifts.`,
    date: "October 15-23, 2025",
    location: "Nationwide",
    duration: "9 Days",
    category: "Religious",
    schedule: [
      {
        day: "Day 1 - Ghatasthapana",
        description: "The festival begins with the planting of jamara (barley seeds)."
      },
      {
        day: "Day 7 - Fulpati",
        description: "Sacred flowers and plants are carried in a traditional procession."
      },
      {
        day: "Day 8 - Maha Ashtami",
        description: "The day of special prayers and offerings to Goddess Durga."
      },
      {
        day: "Day 9 - Maha Nawami",
        description: "The final day of prayers and sacrifices."
      },
      {
        day: "Day 10 - Vijaya Dashami",
        description: "The main day when elders give tika (blessing) to younger ones."
      }
    ],
    highlights: [
      "Traditional rituals and ceremonies",
      "Family gatherings and blessings",
      "Cultural performances and celebrations",
      "Traditional food and feasts",
      "Kite flying and bamboo swings"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container-custom">
            <Link
              to="/events"
              className="inline-flex items-center text-white mb-4 hover:text-blue-200"
            >
              <FaArrowLeft className="mr-2" />
              Back to Events
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{event.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>
              <div className="space-y-6">
                {event.schedule.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg">{item.day}</h3>
                    <p className="text-gray-700 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Event Highlights</h2>
              <ul className="space-y-3">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                Have questions about this event? Contact our team for more information.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
