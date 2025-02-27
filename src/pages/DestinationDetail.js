import React from 'react';
import { useParams, Link } from 'react-router-dom';

const destinationsData = {
  'everest-base-camp': {
    title: 'Everest Base Camp',
    image: '/images/destinations/everest-base-camp.jpg',
    description: `The Everest Base Camp trek is one of the most famous treks in Nepal, taking you through the heart of the Khumbu region to the base of the world's highest mountain. At an altitude of 5,364 meters, the trek offers breathtaking views of Mount Everest and surrounding peaks.

The journey typically takes 12-14 days round trip, starting from Lukla. Along the way, you'll experience:
• Stunning mountain landscapes
• Traditional Sherpa villages and culture
• Buddhist monasteries including the famous Tengboche Monastery
• Unique Himalayan wildlife
• Challenging high-altitude terrain

Best time to visit:
• March to May (Spring)
• September to November (Autumn)

What to expect:
• Challenging high-altitude trek
• Basic tea house accommodations
• Cold temperatures
• Stunning mountain views
• Rich cultural experiences`,
    highlights: [
      'View of Mount Everest',
      'Sherpa Culture',
      'Buddhist Monasteries',
      'High Altitude Adventure',
      'Mountain Landscapes'
    ],
    location: 'Solukhumbu District, Nepal',
    altitude: '5,364 meters',
    difficulty: 'Challenging'
  },
  'kathmandu-durbar-square': {
    title: 'Kathmandu Durbar Square',
    image: '/images/destinations/kathmandu-durbar-square.jpg',
    description: `Kathmandu Durbar Square is a UNESCO World Heritage site located in the heart of old Kathmandu city. This ancient square was once the royal palace complex of the Nepalese monarchy and showcases spectacular architecture dating back several centuries.

The square features:
• Ancient temples and buildings
• Traditional Nepalese architecture
• Historical museums
• Living cultural heritage
• Traditional markets

Key attractions:
• Hanuman Dhoka Palace
• Taleju Temple
• Kumari Ghar (House of the Living Goddess)
• Kasthamandap Temple
• Various courtyards and markets

Best time to visit:
• October to April (dry season)`,
    highlights: [
      'UNESCO World Heritage Site',
      'Ancient Architecture',
      'Cultural Heritage',
      'Royal History',
      'Traditional Markets'
    ],
    location: 'Central Kathmandu, Nepal',
    altitude: '1,400 meters',
    difficulty: 'Easy'
  },
  'pokhara': {
    title: 'Pokhara',
    image: '/images/destinations/pokhara-lakeside.jpeg',
    description: `Pokhara is Nepal's premier adventure and leisure city, offering a combination of natural beauty, adventure activities, and peaceful lakeside relaxation. The city is famous for its views of the Annapurna range and the tranquil Phewa Lake.

Popular activities include:
• Paragliding from Sarangkot
• Boating on Phewa Lake
• Hiking to World Peace Pagoda
• Cave exploration
• Adventure sports

Key attractions:
• Phewa Lake
• Sarangkot Viewpoint
• Davis Falls
• World Peace Pagoda
• International Mountain Museum

Best time to visit:
• October to April (peak season)`,
    highlights: [
      'Lakeside Activities',
      'Mountain Views',
      'Adventure Sports',
      'Peaceful Atmosphere',
      'Cultural Sites'
    ],
    location: 'Kaski District, Nepal',
    altitude: '827 meters',
    difficulty: 'Easy'
  },
  'chitwan-national-park': {
    title: 'Chitwan National Park',
    image: '/images/destinations/chitwan-national-park.jpeg',
    description: `Chitwan National Park is a UNESCO World Heritage site and one of Asia's best wildlife-viewing destinations. The park offers a different side of Nepal, moving from mountains to subtropical lowlands teeming with wildlife.

Wildlife you might see:
• One-horned rhinoceros
• Bengal tigers
• Wild elephants
• Crocodiles
• Various bird species

Activities available:
• Jungle safaris
• Elephant encounters
• Bird watching
• Canoe rides
• Cultural programs

Best time to visit:
• October to March (dry season)`,
    highlights: [
      'Wildlife Safaris',
      'Jungle Activities',
      'Bird Watching',
      'Cultural Experiences',
      'Natural Beauty'
    ],
    location: 'Chitwan District, Nepal',
    altitude: '100 meters',
    difficulty: 'Easy'
  }
};

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData[id];

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-4xl font-bold text-white mb-2">{destination.title}</h1>
              <p className="text-white text-lg">{destination.location}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Altitude</h3>
                <p className="text-gray-600">{destination.altitude}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Difficulty</h3>
                <p className="text-gray-600">{destination.difficulty}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">{destination.location}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.title}</h2>
              <div className="prose max-w-none">
                {destination.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gray-50 p-4 rounded-lg"
                  >
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                ← Back to Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
