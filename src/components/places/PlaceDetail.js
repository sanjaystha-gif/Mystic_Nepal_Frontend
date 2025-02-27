import React from 'react';
import { useParams, Link } from 'react-router-dom';

const placeDetails = {
  'sagarmatha-np': {
    title: 'Sagarmatha National Park',
    image: '/images/places/sagarmatha-np.jpg',
    description: `Sagarmatha National Park, a UNESCO World Heritage Site, is home to Mount Everest (8,848m), the world's highest peak. The park encompasses glaciers, deep valleys, and dramatic mountain scenery. Located in the Solukhumbu District, it offers world-class trekking opportunities and glimpses of rare wildlife including the snow leopard and red panda. The park also hosts the famous Sherpa culture, known for their mountaineering expertise and unique traditions.`,
    highlights: [
      'Mount Everest Base Camp Trek',
      'Stunning views of the world\'s highest peaks',
      'Rich Sherpa culture and monasteries',
      'Diverse alpine wildlife and flora',
      'Namche Bazaar - the gateway to Everest'
    ],
    bestTimeToVisit: 'March to May and September to November',
    activities: [
      'Trekking and Hiking',
      'Mountain Climbing',
      'Wildlife Spotting',
      'Cultural Tours',
      'Photography'
    ]
  },
  'trekking': {
    title: 'Trekking Adventures in Nepal',
    image: '/images/activities/trekking.jpg',
    description: `Nepal offers some of the world's most spectacular trekking routes, from the iconic Everest Base Camp trek to the stunning Annapurna Circuit. Trekking in Nepal isn't just about reaching high altitudes; it's an immersive experience that combines breathtaking landscapes, cultural encounters, and personal challenge. Whether you're a beginner or an experienced trekker, Nepal has trails suited to all levels of experience.`,
    highlights: [
      'Various difficulty levels of treks',
      'Stunning mountain views',
      'Cultural immersion in local villages',
      'Professional guide services',
      'Tea house accommodations'
    ],
    bestTimeToVisit: 'October to November and March to May',
    activities: [
      'Multi-day treks',
      'Day hikes',
      'Peak climbing',
      'Cultural tours',
      'Photography tours'
    ]
  },
  'holi-festival': {
    title: 'Holi Festival Celebration',
    image: '/images/events/holi-festival.jpg',
    description: `Holi, the festival of colors, is one of Nepal's most vibrant and joyous celebrations. This spring festival celebrates the victory of good over evil and the arrival of spring. In Nepal, Holi has its own unique traditions and customs, blending Hindu mythology with local culture. The festival is marked by people throwing colored powder and water at each other, traditional music and dance, and special Holi delicacies.`,
    highlights: [
      'Colorful powder and water fights',
      'Traditional music and dance',
      'Special festival foods',
      'Community celebrations',
      'Cultural performances'
    ],
    bestTimeToVisit: 'Usually falls in February or March (dates vary by lunar calendar)',
    activities: [
      'Color throwing celebrations',
      'Traditional dance performances',
      'Food festivals',
      'Cultural programs',
      'Photography opportunities'
    ]
  },
  'everest-base-camp': {
    title: 'Everest Base Camp',
    image: '/images/destinations/everest-base-camp.jpg',
    description: `The Everest Base Camp trek is one of the world's most iconic hiking adventures. Located at an altitude of 5,364 meters, it offers trekkers the opportunity to stand at the foot of Mount Everest. The journey takes you through Sherpa villages, past ancient monasteries, and across stunning landscapes. While challenging, the trek rewards visitors with unparalleled views of the world's highest peaks and an unforgettable mountain experience.`,
    highlights: [
      'Views of Mount Everest and surrounding peaks',
      'Sherpa culture and monasteries',
      'Namche Bazaar market town',
      'Kala Patthar viewpoint',
      'Buddhist monuments and prayer flags'
    ],
    bestTimeToVisit: 'March to May and September to November',
    activities: [
      'Trekking',
      'Photography',
      'Cultural exploration',
      'Monastery visits',
      'Wildlife spotting'
    ]
  },
  'kathmandu-durbar-square': {
    title: 'Kathmandu Durbar Square',
    image: '/images/destinations/kathmandu-durbar-square.jpg',
    description: `Kathmandu Durbar Square, a UNESCO World Heritage site, is the historic heart of Kathmandu city. This ancient square was once the royal palace complex of the Nepalese monarchy and continues to be a stunning example of traditional architecture. The square houses numerous temples, palaces, courtyards, and monuments built between the 12th and 18th centuries, showcasing the incredible craftsmanship of Newar artists and architects.`,
    highlights: [
      'Ancient temples and palaces',
      'Traditional Newar architecture',
      'Living goddess Kumari residence',
      'Museums and art galleries',
      'Cultural performances'
    ],
    bestTimeToVisit: 'October to November and March to April',
    activities: [
      'Guided historical tours',
      'Cultural photography',
      'Temple visits',
      'Museum exploration',
      'Traditional art shopping'
    ]
  },
  'pokhara': {
    title: 'Pokhara Lakeside',
    image: '/images/destinations/pokhara-lakeside.jpeg',
    description: `Pokhara, Nepal's second-largest city, is renowned for its tranquil lakes, stunning mountain views, and adventure activities. The Lakeside area, situated along the shores of Phewa Lake, is the tourist heart of the city. With the Annapurna range as its backdrop, Pokhara offers a perfect blend of natural beauty and modern amenities. The city serves as both a relaxing destination and a gateway to many trekking routes in the Annapurna region.`,
    highlights: [
      'Phewa Lake boating',
      'Annapurna mountain views',
      'Sunset at Sarangkot',
      'Peace Pagoda',
      'Adventure sports'
    ],
    bestTimeToVisit: 'September to November and March to May',
    activities: [
      'Boating',
      'Paragliding',
      'Cave exploration',
      'Mountain biking',
      'Yoga and meditation'
    ]
  },
  'chitwan': {
    title: 'Chitwan National Park',
    image: '/images/destinations/chitwan-national-park.jpeg',
    description: `Chitwan National Park, a UNESCO World Heritage site, is one of Asia's best wildlife-viewing destinations. This subtropical paradise is home to diverse wildlife including one-horned rhinoceros, Bengal tigers, and various species of birds. The park offers a different side of Nepal, away from the mountains, where visitors can experience jungle safaris, cultural interactions with the Tharu community, and peaceful river adventures.`,
    highlights: [
      'One-horned rhinoceros sightings',
      'Jungle safari experiences',
      'Tharu cultural shows',
      'Rapti River activities',
      'Bird watching opportunities'
    ],
    bestTimeToVisit: 'October to March',
    activities: [
      'Elephant safaris',
      'Jeep tours',
      'Canoe rides',
      'Cultural visits',
      'Nature walks'
    ]
  }
};

const PlaceDetail = () => {
  const { id } = useParams();
  const place = placeDetails[id];

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-red-600">Place not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{place.title}</h1>
            
            <p className="text-gray-700 text-lg mb-8">{place.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Highlights</h2>
                <ul className="list-disc list-inside space-y-2">
                  {place.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Activities</h2>
                <ul className="list-disc list-inside space-y-2">
                  {place.activities.map((activity, index) => (
                    <li key={index} className="text-gray-700">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Best Time to Visit</h2>
              <p className="text-gray-700">{place.bestTimeToVisit}</p>
            </div>
            
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
