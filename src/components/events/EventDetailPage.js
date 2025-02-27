import React from 'react';
import { useParams, Link } from 'react-router-dom';

const eventDetails = {
  'dashain': {
    title: "Dashain Festival",
    image: "/images/events/dashain.jpg",
    description: `Dashain is Nepal's biggest and most significant festival, celebrating the victory of good over evil. This 15-day festival honors the goddess Durga and her victory over the demon Mahishasura. During Dashain, families gather together, homes are decorated, and children receive blessings from their elders. The festival features traditional rituals, feasts, and cultural performances.`,
    date: "October 15-23, 2025",
    location: "Nationwide",
    duration: "9 Days",
    highlights: [
      "Traditional rituals and ceremonies",
      "Family gatherings and blessings",
      "Kite flying and bamboo swings",
      "Festive feasts and celebrations",
      "Cultural performances and events"
    ],
    activities: [
      "Receive Tika (blessing) from elders",
      "Visit temples and participate in pujas",
      "Enjoy traditional Dashain swings",
      "Feast on special Dashain dishes",
      "Exchange gifts and greetings"
    ],
    preparations: [
      "House cleaning and decoration",
      "New clothes shopping",
      "Preparing traditional foods",
      "Setting up bamboo swings",
      "Arranging family gatherings"
    ]
  },
  'tihar': {
    title: "Tihar - Festival of Lights",
    image: "/images/events/tihar.jpeg",
    description: `Tihar, also known as Deepawali, is a five-day festival that celebrates various deities and animals. Each day has its own significance, from worshipping crows to dogs, cows, and finally brothers. The festival is characterized by beautiful light decorations, rangoli art, and traditional songs and dances.`,
    date: "November 3-7, 2025",
    location: "Nationwide",
    duration: "5 Days",
    highlights: [
      "Beautiful light decorations",
      "Rangoli (mandala) art",
      "Traditional Deusi-Bhailo songs",
      "Worship of animals and deities",
      "Brother-sister ceremonies"
    ],
    activities: [
      "Light decoration of homes",
      "Creating rangoli designs",
      "Singing Deusi-Bhailo",
      "Worshipping animals",
      "Participating in Bhai Tika ceremony"
    ],
    preparations: [
      "Buying oil lamps and lights",
      "Preparing sweets and delicacies",
      "Gathering materials for rangoli",
      "Cleaning and decorating homes",
      "Shopping for gifts and offerings"
    ]
  },
  'holi': {
    title: "Holi Festival",
    image: "/images/events/holi.jpg",
    description: `Holi, the festival of colors, marks the arrival of spring and the victory of good over evil. This vibrant celebration sees people throwing colored powder and water at each other, creating a spectacular display of colors. The festival promotes unity, equality, and the breaking down of social barriers.`,
    date: "March 14, 2025",
    location: "Nationwide",
    duration: "1 Day",
    highlights: [
      "Colorful powder and water play",
      "Traditional music and dance",
      "Community celebrations",
      "Special Holi sweets",
      "Cultural performances"
    ],
    activities: [
      "Playing with colors",
      "Water balloon fights",
      "Dancing to Holi songs",
      "Sharing festive foods",
      "Community gatherings"
    ],
    preparations: [
      "Buying colors and water guns",
      "Preparing traditional sweets",
      "Arranging music systems",
      "Protective clothing",
      "Setting up celebration venues"
    ]
  },
  'indra-jatra': {
    title: "Indra Jatra",
    image: "/images/events/indra-jatra.jpeg",
    description: `Indra Jatra is an eight-day festival celebrating Indra, the god of rain and king of heaven. The festival features the rare public appearance of the Kumari, Nepal's Living Goddess. The streets of Kathmandu come alive with masked dances, chariot processions, and traditional performances.`,
    date: "September 18-25, 2025",
    location: "Kathmandu",
    duration: "8 Days",
    highlights: [
      "Living Goddess Kumari's appearance",
      "Traditional masked dances",
      "Chariot processions",
      "Cultural performances",
      "Religious ceremonies"
    ],
    activities: [
      "Watching masked dances",
      "Following chariot processions",
      "Visiting temples",
      "Observing cultural performances",
      "Participating in ceremonies"
    ],
    preparations: [
      "Cleaning and decorating streets",
      "Preparing traditional costumes",
      "Setting up stages",
      "Arranging security measures",
      "Organizing procession routes"
    ]
  },
  'buddha-jayanti': {
    title: "Buddha Jayanti",
    image: "/images/events/buddha-jayanti.jpg",
    description: `Buddha Jayanti, also known as Buddha Purnima, celebrates the birth, enlightenment, and death of Gautam Buddha, the founder of Buddhism. Born as Prince Siddhartha Gautama in Lumbini, Nepal in 563 BCE, he later became known as the Buddha or "the enlightened one". Lumbini, located in the Rupandehi District of Nepal, is one of the holiest places of the Buddhist faith and a UNESCO World Heritage site.

    The celebration holds special significance in Nepal, not only as a religious observance but also as a celebration of Nepal's rich cultural heritage as the birthplace of Buddha. The sacred garden of Lumbini, where Queen Mayadevi gave birth to Siddhartha, features the famous Ashoka Pillar, ancient monasteries, and the sacred Mayadevi Temple marking the exact birthplace.

    During Buddha Jayanti, thousands of Buddhist pilgrims and tourists from around the world visit Lumbini and other Buddhist sites across Nepal. The day is marked with prayer ceremonies, meditation sessions, and processions carrying Buddha statues through the streets. Devotees offer incense, flowers, and candles at monasteries and stupas, while monks lead special ceremonies and give teachings on Buddha's life and principles.`,
    date: "May 23, 2025",
    location: "Various Locations",
    duration: "1 Day",
    highlights: [
      "Celebrations at Lumbini - Buddha's birthplace",
      "Prayer ceremonies at monasteries and stupas",
      "Peace processions and meditation sessions",
      "Cultural programs and exhibitions",
      "Special alms-giving ceremonies"
    ],
    activities: [
      "Visit to Lumbini Sacred Garden",
      "Participation in meditation sessions",
      "Offering prayers at Buddhist temples",
      "Joining peace processions",
      "Attending dharma teachings"
    ],
    preparations: [
      "Preparing offerings (flowers, incense, candles)",
      "Arranging transportation to Buddhist sites",
      "Planning meditation sessions",
      "Organizing cultural programs",
      "Setting up exhibition spaces"
    ],
    culturalSignificance: `Buddha's teachings of peace, compassion, and enlightenment continue to influence millions worldwide. Nepal takes immense pride in being the birthplace of Buddha, and Buddha Jayanti serves as a reminder of the country's significant contribution to world spirituality and peace.

    The celebration emphasizes Buddha's core teachings:
    • The Four Noble Truths
    • The Noble Eightfold Path
    • The Middle Way
    • Compassion and non-violence
    
    Many Nepalis, regardless of their faith, participate in the celebrations, making it a symbol of national unity and cultural heritage.`
  },
  'shivaratri': {
    title: "Maha Shivaratri",
    image: "/images/events/shivaratri.jpg",
    description: `Maha Shivaratri, "The Great Night of Shiva," is one of the most significant festivals in Hindu tradition, dedicated to Lord Shiva - the destroyer, transformer, and one of the principal deities of Hinduism. Lord Shiva, also known as Mahadeva (The Great God), represents the cosmic consciousness, the source of all creation, preservation, and dissolution.

    In Hindu mythology, Shiva is depicted as both the fierce destroyer and the benevolent protector. He is often portrayed in deep meditation on Mount Kailash, with the crescent moon adorning his matted locks, the holy Ganges flowing from his hair, a third eye representing wisdom and insight, and his body smeared with sacred ash. His throat is blue (earning him the name Neelkanth) from holding the world's poison to save creation.

    The festival has special significance in Nepal, particularly at the Pashupatinath Temple in Kathmandu, one of the holiest Shiva temples in the world. The temple complex, a UNESCO World Heritage site, becomes the center of elaborate celebrations, drawing hundreds of thousands of devotees from across Nepal and India.`,
    date: "March 8, 2025",
    location: "Nationwide",
    duration: "1 Day",
    highlights: [
      "Massive gathering at Pashupatinath Temple",
      "Night-long vigil and prayers",
      "Sacred rituals and ceremonies",
      "Arrival of Sadhus (holy men) from across the region",
      "Traditional music and chanting"
    ],
    activities: [
      "Offering prayers and abhishek to Shiva Lingam",
      "Fasting and meditation",
      "Participating in bhajan and kirtan",
      "Lighting sacred fires",
      "Taking ritual baths"
    ],
    preparations: [
      "Preparing special offerings",
      "Arranging items for ritual worship",
      "Setting up meditation spaces",
      "Organizing prasad distribution",
      "Planning night vigil arrangements"
    ],
    culturalSignificance: `Maha Shivaratri holds deep spiritual and cultural significance:

    • Spiritual Significance: It's believed that on this night, Lord Shiva performed the cosmic dance of creation, preservation, and destruction. The night is considered most auspicious for spiritual practices and meditation.

    • Symbolism: The festival symbolizes:
      - The wedding of Shiva and Parvati
      - The manifestation of Shiva as Lingam
      - The night when Shiva became Ardhanarishvara (half-male and half-female)
      
    • Cultural Impact: The festival brings together people from all walks of life, transcending social boundaries. The gathering of Sadhus adds a unique cultural dimension, offering glimpses into ancient spiritual traditions.

    In Nepal, the celebration at Pashupatinath Temple is particularly significant, with:
    • Elaborate ceremonies performed by priests
    • Traditional music and dance performances
    • Distribution of prasad and sacred ash
    • Special arrangements for pilgrims and devotees`
  }
};

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-red-600">Event not found</h1>
          <Link to="/events" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Return to Events
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
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Date</p>
                <p className="text-lg text-gray-900">{event.date}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Location</p>
                <p className="text-lg text-gray-900">{event.location}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Duration</p>
                <p className="text-lg text-gray-900">{event.duration}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8">{event.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Highlights</h2>
                <ul className="list-disc list-inside space-y-2">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Activities</h2>
                <ul className="list-disc list-inside space-y-2">
                  {event.activities.map((activity, index) => (
                    <li key={index} className="text-gray-700">{activity}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preparations</h2>
                <ul className="list-disc list-inside space-y-2">
                  {event.preparations.map((preparation, index) => (
                    <li key={index} className="text-gray-700">{preparation}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {event.culturalSignificance && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cultural Significance</h2>
                <p className="text-gray-700 text-lg">{event.culturalSignificance}</p>
              </div>
            )}
            
            <div className="mt-8">
              <Link
                to="/events"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Back to Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
