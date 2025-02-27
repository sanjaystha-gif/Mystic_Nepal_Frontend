import React from 'react';
import ActivityCard from './ActivityCard';

const Adventures = () => {
  const adventures = [
    {
      title: "Everest Base Camp Trek",
      image: "/images/activities/ebc-trek.jpg",
      description: "Trek to the base of the world's highest mountain through stunning Sherpa villages and dramatic Himalayan landscapes.",
      duration: "14 Days",
      location: "Khumbu Region",
      difficulty: "Challenging",
      link: "/activities/adventures/everest-base-camp"
    },
    {
      title: "Annapurna Circuit Trek",
      image: "/images/activities/annapurna-circuit.jpg",
      description: "Complete one of the world's most diverse treks, crossing the Thorong La Pass and experiencing varied landscapes.",
      duration: "12-16 Days",
      location: "Annapurna Region",
      difficulty: "Challenging",
      link: "/activities/adventures/annapurna-circuit"
    },
    {
      title: "Pokhara Paragliding",
      image: "/images/activities/paragliding.jpg",
      description: "Soar like a bird over Pokhara Valley with views of Phewa Lake and the Annapurna range.",
      duration: "30 Minutes",
      location: "Pokhara",
      difficulty: "Easy",
      link: "/activities/adventures/paragliding"
    },
    {
      title: "Bungee Jumping",
      image: "/images/activities/bunjee-jumping.jpg",
      description: "Take a leap from Nepal's highest bungee platform over the wild Bhote Koshi River.",
      duration: "1 Day",
      location: "Last Resort",
      difficulty: "Moderate",
      link: "/activities/adventures/bungee"
    },
    {
      title: "White Water Rafting",
      image: "/images/activities/rafting.jpg",
      description: "Navigate thrilling rapids on Nepal's mighty rivers surrounded by scenic landscapes.",
      duration: "1-3 Days",
      location: "Trishuli River",
      difficulty: "Moderate",
      link: "/activities/adventures/rafting"
    },
    {
      title: "Jungle Safari",
      image: "/images/activities/safari.jpg",
      description: "Explore Chitwan National Park's wildlife on elephant back or jeep safari.",
      duration: "2-3 Days",
      location: "Chitwan",
      difficulty: "Easy",
      link: "/activities/adventures/safari"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Adventure Activities</h2>
      <p className="text-gray-600 mb-8">
        From trekking in the Himalayas to adrenaline-pumping sports, discover exciting adventures in Nepal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventures.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Adventures;
