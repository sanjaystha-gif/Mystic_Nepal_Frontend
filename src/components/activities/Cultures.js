import React from 'react';
import ActivityCard from './ActivityCard';

const Cultures = () => {
  const culturalActivities = [
    {
      title: "Traditional Craft Workshop",
      image: "/images/activities/craft-workshop.jpg",
      description: "Learn traditional Nepali crafts like thangka painting, wood carving, or pottery from master artisans.",
      duration: "3-4 Hours",
      location: "Patan",
      difficulty: "Easy",
      price: "45",
      rating: "4.8",
      link: "/activities/cultures/craft-workshop"
    },
    {
      title: "Cooking Class",
      image: "/images/activities/cooking-class.jpg",
      description: "Master the art of cooking authentic Nepali dishes, including momos, dal bhat, and local specialties.",
      duration: "4 Hours",
      location: "Kathmandu",
      difficulty: "Easy",
      price: "40",
      rating: "4.9",
      link: "/activities/cultures/cooking-class"
    },
    {
      title: "Village Homestay",
      image: "/images/activities/homestay.jpg",
      description: "Experience authentic Nepali life by staying with a local family in a traditional village.",
      duration: "2-3 Days",
      location: "Various Locations",
      difficulty: "Easy",
      price: "60",
      rating: "4.7",
      link: "/activities/cultures/homestay"
    },
    {
      title: "Heritage Walk",
      image: "/images/activities/heritage-walk.jpg",
      description: "Guided tour through ancient cities exploring temples, palaces, and hidden courtyards.",
      duration: "4 Hours",
      location: "Kathmandu Valley",
      difficulty: "Easy",
      price: "30",
      rating: "4.6",
      link: "/activities/cultures/heritage-walk"
    },
    {
      title: "Traditional Music & Dance",
      image: "/images/activities/music-dancee.jpeg",
      description: "Learn about and experience traditional Nepali music and dance forms.",
      duration: "2 Hours",
      location: "Kathmandu",
      difficulty: "Easy",
      price: "25",
      rating: "4.5",
      link: "/activities/cultures/music-dance"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Cultural Experiences</h2>
        <p className="text-gray-600">
          Immerse yourself in Nepal's rich cultural heritage through hands-on experiences and guided tours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturalActivities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Cultural Sensitivity</h3>
        <p className="text-gray-700 mb-4">
          When participating in cultural activities, please be mindful of local customs and traditions. Dress modestly and follow the guidance of your hosts or instructors.
        </p>
        <div className="flex space-x-4">
          <a 
            href="/cultural-guidelines" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Cultural Guidelines
          </a>
          <a 
            href="/book-experience" 
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 border border-blue-600"
          >
            Book Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cultures;
