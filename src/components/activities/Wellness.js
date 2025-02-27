import React from 'react';
import ActivityCard from './ActivityCard';

const Wellness = () => {
  const wellnessActivities = [
    {
      title: "Meditation Retreat",
      image: "/images/activities/meditation.jpg",
      description: "Experience traditional meditation practices in peaceful monastery settings with experienced teachers.",
      duration: "3-10 Days",
      location: "Various Locations",
      difficulty: "Easy",
      price: "300",
      rating: "4.9",
      link: "/activities/wellness/meditation"
    },
    {
      title: "Yoga Classes",
      image: "/images/activities/yoga.jpg",
      description: "Practice yoga in the birthplace of spiritual traditions with experienced instructors.",
      duration: "1-2 Hours",
      location: "Multiple Centers",
      difficulty: "Moderate",
      price: "15",
      rating: "4.8",
      link: "/activities/wellness/yoga"
    },
    {
      title: "Ayurvedic Treatment",
      image: "/images/activities/ayurveda.jpg",
      description: "Traditional Ayurvedic treatments and consultations for holistic wellness.",
      duration: "1-3 Hours",
      location: "Kathmandu",
      difficulty: "Easy",
      price: "80",
      rating: "4.7",
      link: "/activities/wellness/ayurveda"
    },
    {
      title: "Sound Healing",
      image: "/images/activities/sound-healing.jpg",
      description: "Experience the therapeutic vibrations of traditional singing bowls and instruments.",
      duration: "1 Hour",
      location: "Various Centers",
      difficulty: "Easy",
      price: "40",
      rating: "4.6",
      link: "/activities/wellness/sound-healing"
    },
    {
      title: "Hot Springs Therapy",
      image: "/images/activities/hot-springs.jpg",
      description: "Relax in natural hot springs known for their healing properties.",
      duration: "2-3 Hours",
      location: "Various Locations",
      difficulty: "Easy",
      price: "25",
      rating: "4.5",
      link: "/activities/wellness/hot-springs"
    },
    {
      title: "Panchakarma Treatment",
      image: "/images/activities/panchakarma.jpg",
      description: "Complete Ayurvedic detoxification and rejuvenation program.",
      duration: "7-21 Days",
      location: "Specialized Centers",
      difficulty: "Moderate",
      price: "1200",
      rating: "4.8",
      link: "/activities/wellness/panchakarma"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Wellness Activities</h2>
        <p className="text-gray-600">
          Rejuvenate your body and mind with traditional healing practices and wellness activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wellnessActivities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Wellness Journey</h3>
        <p className="text-gray-700 mb-4">
          Our wellness activities are designed to provide authentic experiences while ensuring your comfort and safety. Consult with practitioners about any health concerns before starting treatments.
        </p>
        <div className="flex space-x-4">
          <a 
            href="/wellness-consultation" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get Consultation
          </a>
          <a 
            href="/wellness-centers" 
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 border border-blue-600"
          >
            View Centers
          </a>
        </div>
      </div>

      {/* Featured Wellness Package */}
      <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src="/images/activities/wellness-package.jpg" 
              alt="Wellness Package"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-4">Featured: Complete Wellness Package</h3>
            <p className="text-gray-600 mb-6">
              Experience a comprehensive wellness journey combining meditation, yoga, Ayurvedic treatments, and healthy cuisine. Perfect for those seeking complete rejuvenation.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                7 days of guided practices
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Personalized wellness consultation
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Accommodation and healthy meals
              </li>
            </ul>
            <a 
              href="/wellness-package" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;
