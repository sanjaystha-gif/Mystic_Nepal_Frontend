import React from 'react';
import { useParams } from 'react-router-dom';

const placeDetails = {
  'sagarmatha': {
    title: "Sagarmatha National Park",
    image: "/images/places/world-heritage/SagarmathaNp.jpg",
    description: `Sagarmatha National Park, a UNESCO World Heritage Site, is home to Mount Everest (8,848m), the world's highest peak. This remarkable park encompasses dramatic mountains, glaciers, deep valleys, and is a sanctuary for rare wildlife species.

    The park's landscape is dominated by rugged terrain, featuring four peaks over 8,000 meters including Mount Everest, Lhotse, Cho Oyu, and Makalu. The area is characterized by its steep mountainous terrain, with deep valleys and glaciers, creating a dramatic landscape that attracts mountaineers and trekkers from around the world.

    The park is also home to the Sherpa people, whose unique culture and traditions have been shaped by this challenging mountain environment. Their expertise in mountaineering and their Buddhist culture add a rich cultural dimension to the natural heritage of the area.`,
    highlights: [
      "Mount Everest - World's highest peak",
      "Rich biodiversity including rare species",
      "Sherpa culture and traditions",
      "Spectacular mountain views",
      "World-class trekking routes"
    ],
    activities: [
      "Trekking to Everest Base Camp",
      "Wildlife watching",
      "Cultural visits to monasteries",
      "Photography",
      "Mountain climbing"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Solukhumbu District",
    rating: "4.9",
    wildlife: [
      "Snow leopard",
      "Red panda",
      "Himalayan tahr",
      "Musk deer",
      "Various bird species"
    ],
    culturalSignificance: "Home to the Sherpa community and numerous Buddhist monasteries"
  },
  'pashupatinath': {
    title: "Pashupatinath Temple",
    image: "/images/places/world-heritage/pashupatinath.jpg",
    description: `Pashupatinath Temple, situated on the banks of the sacred Bagmati River, is one of the most significant Hindu temples dedicated to Lord Shiva. This UNESCO World Heritage site is not just a temple but a sprawling complex that represents the center of Shaivism in Nepal.

    The main temple, built in the Nepalese pagoda style, features a distinctive golden roof and exquisite wood carvings. The complex includes numerous temples, ashrams, images, and inscriptions raised over the centuries. As one of the sacred temples of Hindu faith, it attracts thousands of pilgrims each year, particularly during festivals like Maha Shivaratri.

    The temple complex is also known for its ritual cremation ghats along the Bagmati River, where Hindu funeral rites are performed. These ceremonies provide a profound glimpse into Hindu spiritual traditions and beliefs about life and death.`,
    highlights: [
      "Main temple with golden roof",
      "Sacred cremation ghats",
      "Traditional architecture",
      "Religious ceremonies",
      "Spiritual atmosphere"
    ],
    activities: [
      "Temple worship",
      "Photography (exterior only)",
      "Meditation",
      "Cultural observation",
      "Attending evening aarti"
    ],
    bestTimeToVisit: "October to March",
    location: "Kathmandu",
    rating: "4.9",
    restrictions: [
      "Only Hindus allowed inside main temple",
      "Photography prohibited in certain areas",
      "Proper dress code required",
      "Respect funeral ceremonies"
    ],
    culturalSignificance: "Major center of Shaivism and Hindu spiritual practices"
  },
  'lumbini': {
    title: "Lumbini",
    image: "/images/places/world-heritage/LUMBINI.jpg",
    description: `Lumbini, the birthplace of Lord Buddha, is one of the most sacred sites in Buddhism. This UNESCO World Heritage site preserves the location where Queen Mayadevi gave birth to Siddhartha Gautama, who later became Buddha. The site includes the sacred garden where Buddha was born, the Maya Devi Temple marking the exact birthplace, and numerous monasteries built by different Buddhist nations.

    The Maya Devi Temple houses the marker stone that pinpoints the exact spot of Buddha's birth, along with ancient ruins and sculptures. The Ashoka Pillar, erected by Emperor Ashoka in 249 BC, bears an inscription authenticating this as Buddha's birthplace.

    Today, Lumbini is developed as an international pilgrimage and peace center, featuring monasteries built in various architectural styles representing different Buddhist countries and traditions.`,
    highlights: [
      "Maya Devi Temple",
      "Ashoka Pillar",
      "Sacred Garden",
      "International monasteries",
      "Peace pagodas"
    ],
    activities: [
      "Meditation",
      "Temple visits",
      "Archaeological tours",
      "Cultural exploration",
      "Photography"
    ],
    bestTimeToVisit: "October to March",
    location: "Rupandehi District",
    rating: "4.8",
    keyAttractions: [
      "Maya Devi Temple",
      "Ashoka Pillar",
      "World Peace Pagoda",
      "Royal Thai Monastery",
      "China Temple"
    ],
    culturalSignificance: "Birthplace of Buddha and center of Buddhist pilgrimage"
  },
  'boudhanath': {
    title: "Boudhanath Stupa",
    image: "/images/places/world-heritage/boudha.jpg",
    description: `Boudhanath Stupa, one of the largest spherical stupas in Nepal, stands as a testament to Tibetan Buddhism and culture in Nepal. This UNESCO World Heritage site is the center of Tibetan culture in Kathmandu and one of the most important Buddhist pilgrimage sites in the world.

    The stupa's massive mandala makes it one of the largest spherical stupas in Nepal. The structure consists of a giant dome, representing the emptiness from which everything emanates. The stupa's eyes are painted with the wisdom eyes of the Buddha, looking in all four directions, symbolizing the all-seeing nature of the Buddha.

    The area around the stupa is a vibrant community of Tibetan Buddhism, with numerous monasteries (gompas) and shops selling traditional Tibetan artifacts, thangkas, and religious items.`,
    highlights: [
      "Massive Buddhist stupa",
      "Tibetan culture",
      "Prayer wheels",
      "Surrounding monasteries",
      "Traditional shops"
    ],
    activities: [
      "Circumambulation",
      "Prayer and meditation",
      "Monastery visits",
      "Shopping for artifacts",
      "Photography"
    ],
    bestTimeToVisit: "Year-round, best during October to March",
    location: "Kathmandu",
    rating: "4.8",
    rituals: [
      "Butter lamp offerings",
      "Prayer wheel turning",
      "Circumambulation",
      "Monk ceremonies",
      "Morning and evening prayers"
    ],
    culturalSignificance: "Center of Tibetan Buddhism in Nepal"
  },
  'sagarmatha-np': {
    title: "Sagarmatha National Park",
    image: "/images/places/protected-areas/SagarmathaNp.jpg",
    description: `Sagarmatha National Park, established in 1976, is a protected area in Nepal that is dominated by Mount Everest (Sagarmatha in Nepali) and encompasses an area of 1,148 square kilometers. The park is a testament to nature's grandeur, featuring dramatic mountains, glaciers, deep valleys, and is home to several rare species.

    The park's landscape ranges from 2,845m to 8,848m at the summit of Mount Everest. This dramatic terrain includes deep gorges, glaciers, and massive rocks. The park protects a complex ecosystem that includes several rare species and their habitats.

    The area is also home to the Sherpa people, whose unique culture and traditions have been shaped by the challenging mountain environment. Their expertise in mountaineering and their Buddhist culture add a rich cultural dimension to the natural heritage of the area.`,
    highlights: [
      "Mount Everest (8,848m)",
      "Rich biodiversity",
      "Sherpa culture",
      "Glaciers and valleys",
      "Rare wildlife species"
    ],
    activities: [
      "Trekking to Everest Base Camp",
      "Wildlife watching",
      "Cultural visits",
      "Photography",
      "Mountain climbing"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Solukhumbu District",
    rating: "4.9",
    wildlife: [
      "Snow leopard",
      "Red panda",
      "Himalayan tahr",
      "Musk deer",
      "Himalayan black bear"
    ],
    culturalSignificance: "Home to the Sherpa community and numerous Buddhist monasteries"
  },
  'chitwan-np': {
    title: "Chitwan National Park",
    image: "/images/places/protected-areas/chitwan.jpg",
    description: `Chitwan National Park, established in 1973, is Nepal's first national park and a UNESCO World Heritage Site. Located in the subtropical inner Terai lowlands of south-central Nepal, the park covers an area of 932 square kilometers and is renowned for its biodiversity.

    The park is particularly famous for its protection of One-Horned Rhinoceros, Royal Bengal Tiger, and Gharial Crocodile. It preserves a unique ecosystem that includes floodplains, sal forests, grasslands, and riverine forests along the Narayani and Rapti rivers.

    Chitwan offers visitors a different experience from the Himalayan parks, with its subtropical climate and rich wildlife viewing opportunities. The park's success in rhino conservation has made it a model for wildlife protection in Asia.`,
    highlights: [
      "One-horned rhinoceros",
      "Bengal tigers",
      "Elephant safaris",
      "Gharial crocodiles",
      "Bird watching"
    ],
    activities: [
      "Jungle safaris",
      "Canoe rides",
      "Bird watching",
      "Cultural programs",
      "Elephant bathing"
    ],
    bestTimeToVisit: "October to March",
    location: "Chitwan District",
    rating: "4.8",
    wildlife: [
      "One-horned rhinoceros",
      "Royal Bengal tiger",
      "Asian elephant",
      "Gharial crocodile",
      "Sloth bear"
    ],
    culturalSignificance: "Home to indigenous Tharu community and their unique culture"
  },
  'langtang-np': {
    title: "Langtang National Park",
    image: "/images/places/protected-areas/langtag.jpg",
    description: `Langtang National Park, established in 1976, is Nepal's fourth national park and the first Himalayan national park. Located in the central Himalayan region, it spans across three districts and covers an area of 1,710 square kilometers.

    The park features a diverse landscape ranging from subtropical forests to alpine grasslands and glaciers. The area is characterized by the Langtang valley, often called the valley of glaciers, and includes the famous Gosaikunda lakes, which hold religious significance for both Hindus and Buddhists.

    The park is also home to the endangered red panda and various other rare species. Its proximity to Kathmandu makes it one of the more accessible Himalayan national parks.`,
    highlights: [
      "Langtang Valley",
      "Gosaikunda Lakes",
      "Diverse ecosystems",
      "Rich wildlife",
      "Cultural heritage"
    ],
    activities: [
      "Trekking",
      "Wildlife viewing",
      "Photography",
      "Cultural visits",
      "Pilgrimage to Gosaikunda"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Rasuwa District",
    rating: "4.7",
    wildlife: [
      "Red panda",
      "Himalayan tahr",
      "Snow leopard",
      "Musk deer",
      "Various bird species"
    ],
    culturalSignificance: "Sacred Gosaikunda Lakes and Tamang culture"
  },
  'koshi': {
    title: "Koshi Province",
    image: "/images/places/provinces/koshi.jpg",
    description: `Koshi Province, located in eastern Nepal, is a region of incredible diversity, from the world's highest peak Mount Everest to the fertile plains of the Terai. The province is named after the mighty Koshi River and encompasses some of Nepal's most spectacular landscapes.

    The region is famous for its tea gardens, particularly in Ilam, which produces some of Nepal's finest orthodox tea. The province is also home to various ethnic communities including Rai, Limbu, Sherpa, and others, each with their unique cultural traditions and festivals.

    The province includes the Sagarmatha (Mount Everest) region, making it a prime destination for mountaineers and trekkers from around the world. The region's biodiversity ranges from subtropical forests to alpine meadows.`,
    highlights: [
      "Mount Everest region",
      "Ilam tea gardens",
      "Diverse ethnic cultures",
      "Rich biodiversity",
      "Adventure tourism"
    ],
    activities: [
      "Mountaineering",
      "Tea garden visits",
      "Cultural tours",
      "Wildlife watching",
      "Trekking"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Eastern Nepal",
    rating: "4.8",
    keyAttractions: [
      "Mount Everest",
      "Ilam Tea Gardens",
      "Kanchenjunga Conservation Area",
      "Makalu Barun National Park",
      "Pathivara Temple"
    ],
    culturalSignificance: "Home to diverse ethnic communities with rich cultural heritage"
  },
  'madhesh': {
    title: "Madhesh Province",
    image: "/images/places/provinces/madhesh.jpg",
    description: `Madhesh Province, stretching along Nepal's southern border with India, is characterized by its fertile plains, rich cultural heritage, and significant religious sites. This region is often called Nepal's granary due to its extensive agricultural lands and contribution to the country's food security.

    The province is home to several important religious and cultural sites, including the historic city of Janakpur, the birthplace of Sita and a significant Hindu pilgrimage site. The region also includes part of Chitwan National Park, offering unique wildlife experiences.

    The province showcases a unique blend of cultures, traditions, and festivals, with a predominantly Madheshi population along with various other ethnic communities.`,
    highlights: [
      "Janakpur Dham",
      "Agricultural landscape",
      "Religious sites",
      "Cultural diversity",
      "Traditional arts"
    ],
    activities: [
      "Religious pilgrimage",
      "Cultural tours",
      "Wildlife safaris",
      "Local food exploration",
      "Festival celebrations"
    ],
    bestTimeToVisit: "October to March",
    location: "Southern Nepal",
    rating: "4.7",
    keyAttractions: [
      "Janaki Temple",
      "Chitwan National Park",
      "Parsa National Park",
      "Gadhimai Temple",
      "Traditional villages"
    ],
    culturalSignificance: "Center of Mithila culture and art, important Hindu pilgrimage sites"
  },
  'bagmati': {
    title: "Bagmati Province",
    image: "/images/places/provinces/bagmati.jpg",
    description: `Bagmati Province, named after the sacred Bagmati River, is the political, economic, and cultural heart of Nepal. The province includes the Kathmandu Valley, which houses the capital city and is renowned for its rich cultural heritage, ancient temples, and historical monuments.

    The province features three medieval city-states - Kathmandu, Patan, and Bhaktapur - each with their own Durbar Squares, which are UNESCO World Heritage sites. These cities showcase the finest examples of Newari architecture and craftsmanship.

    Beyond the valley, the province includes diverse landscapes from subtropical forests to snow-capped peaks, offering various opportunities for adventure and cultural exploration.`,
    highlights: [
      "UNESCO Heritage Sites",
      "Ancient temples",
      "Traditional architecture",
      "Cultural festivals",
      "Modern facilities"
    ],
    activities: [
      "Heritage walks",
      "Temple visits",
      "Cultural tours",
      "Shopping",
      "Food exploration"
    ],
    bestTimeToVisit: "October to April",
    location: "Central Nepal",
    rating: "4.9",
    keyAttractions: [
      "Kathmandu Durbar Square",
      "Patan Durbar Square",
      "Bhaktapur Durbar Square",
      "Pashupatinath Temple",
      "Boudhanath Stupa"
    ],
    culturalSignificance: "Center of Nepalese art, culture, and traditional crafts"
  },
  'gandaki': {
    title: "Gandaki Province",
    image: "/images/places/provinces/gandaki.jpg",
    description: `Gandaki Province, named after the Gandaki River, is a region of extraordinary natural beauty and cultural significance. The province is home to the Annapurna mountain range and the beautiful city of Pokhara, often called the tourism capital of Nepal.

    The region features some of Nepal's most popular trekking routes, including the Annapurna Circuit and the Annapurna Base Camp trek. Pokhara, with its serene lakes and mountain views, serves as a gateway to these adventures while offering its own unique charm.

    The province is also rich in cultural heritage, with various ethnic communities including Gurung, Magar, and Thakali, each contributing to the region's diverse cultural landscape.`,
    highlights: [
      "Annapurna Range",
      "Pokhara Valley",
      "Phewa Lake",
      "Adventure activities",
      "Cultural diversity"
    ],
    activities: [
      "Trekking",
      "Paragliding",
      "Boating",
      "Cultural tours",
      "Photography"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "North-Central Nepal",
    rating: "4.8",
    keyAttractions: [
      "Phewa Lake",
      "Annapurna Base Camp",
      "Muktinath Temple",
      "Ghandruk Village",
      "Davis Falls"
    ],
    culturalSignificance: "Blend of mountain cultures and modern tourism"
  },
  'lumbini-province': {
    title: "Lumbini Province",
    image: "/images/places/provinces/lumbini.jpg",
    description: `Lumbini Province, named after the birthplace of Lord Buddha, is a region of profound historical and spiritual significance. The province encompasses both the sacred sites of Buddhism and the natural beauty of the Chure hills and Inner Terai.

    At its heart lies Lumbini, a UNESCO World Heritage site and one of the world's most important Buddhist pilgrimage destinations. The sacred garden where Queen Mayadevi gave birth to Siddhartha Gautama (Buddha) is marked by the ancient Mayadevi Temple and the Ashoka Pillar.

    Beyond its spiritual significance, the province features diverse landscapes from the Chure hills to the Terai plains, offering a mix of cultural, religious, and natural attractions.`,
    highlights: [
      "Lumbini Sacred Garden",
      "Ancient monasteries",
      "Peace pagodas",
      "Cultural heritage",
      "Natural landscapes"
    ],
    activities: [
      "Buddhist pilgrimage",
      "Meditation",
      "Archaeological tours",
      "Cultural visits",
      "Nature walks"
    ],
    bestTimeToVisit: "October to March",
    location: "South-Central Nepal",
    rating: "4.8",
    keyAttractions: [
      "Maya Devi Temple",
      "Ashoka Pillar",
      "World Peace Pagoda",
      "International Monasteries",
      "Tilaurakot Palace"
    ],
    unescoSites: [
      "Lumbini, the Birthplace of the Lord Buddha"
    ],
    culturalSignificance: "Birthplace of Buddha and center of Buddhist pilgrimage"
  },
  'karnali-province': {
    title: "Karnali Province",
    image: "/images/places/provinces/karnali.jpg",
    description: `Karnali Province, Nepal's largest province by area, is a region of pristine wilderness and ancient traditions. Named after the mighty Karnali River, the province is characterized by its remote mountain valleys, high-altitude lakes, and unique cultural heritage.

    The crown jewel of the province is Rara Lake, often called the 'Queen of Lakes,' surrounded by Rara National Park. The province also includes parts of Shey Phoksundo National Park, featuring the deepest lake in Nepal.

    The region preserves some of Nepal's most ancient cultural traditions and practices, particularly in areas like Jumla and Humla, where ancient Buddhist and Hindu traditions continue unchanged for centuries.`,
    highlights: [
      "Rara Lake",
      "Karnali River",
      "Ancient traditions",
      "Remote valleys",
      "Pristine nature"
    ],
    activities: [
      "Trekking",
      "Lake visits",
      "Cultural exploration",
      "Wildlife watching",
      "Photography"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Northwestern Nepal",
    rating: "4.7",
    keyAttractions: [
      "Rara Lake",
      "Shey Phoksundo Lake",
      "Karnali River",
      "Jumla Valley",
      "Ancient monasteries"
    ],
    naturalLandmarks: [
      "Rara National Park",
      "Shey Phoksundo National Park",
      "Karnali River",
      "High-altitude valleys",
      "Alpine meadows"
    ],
    culturalSignificance: "Preserves some of Nepal's most ancient cultural traditions"
  },
  'sudurpashchim-province': {
    title: "Sudurpashchim Province",
    image: "/images/places/provinces/sudurpaschim.jpg",
    description: `Sudurpashchim Province, Nepal's westernmost province, is a land of diverse geography and rich cultural heritage. The region stretches from the high Himalayas through the mid-hills to the Terai plains, offering a complete cross-section of Nepal's geographical diversity.

    The province is home to Khaptad National Park, often called the 'Heaven of Far West,' featuring unique alpine meadows and religious sites. The region also includes Api Nampa Conservation Area, protecting some of Nepal's most remote and pristine mountain ecosystems.

    The province is known for its unique cultural practices and festivals, particularly the Gaura Festival, and preserves many traditional practices and customs unique to far-western Nepal.`,
    highlights: [
      "Khaptad National Park",
      "Api Himal",
      "Traditional culture",
      "Remote landscapes",
      "Ancient temples"
    ],
    activities: [
      "Trekking",
      "Cultural tours",
      "Religious pilgrimage",
      "Wildlife watching",
      "Festival celebrations"
    ],
    bestTimeToVisit: "March to May and September to November",
    location: "Far-Western Nepal",
    rating: "4.6",
    keyAttractions: [
      "Khaptad National Park",
      "Api Nampa Conservation Area",
      "Shuklaphanta National Park",
      "Ghodaghodi Lake",
      "Ancient temples"
    ],
    naturalLandmarks: [
      "Api Himal",
      "Khaptad's plateau",
      "Shuklaphanta grasslands",
      "Mahakali River",
      "Ghodaghodi Lake complex"
    ],
    culturalSignificance: "Preserves unique far-western cultural traditions and festivals"
  }
};

const PlaceDetailPage = () => {
  const { id } = useParams();
  const place = placeDetails[id];

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Place not found</h1>
        <p className="text-gray-600 mb-4">Sorry, we couldn't find the place you're looking for.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">Return to Home</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{place.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">⭐</span>
              <span>{place.rating}</span>
            </div>
            <span>|</span>
            <span>{place.location}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 whitespace-pre-line">{place.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Attractions</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {place.keyAttractions && place.keyAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>

            {place.unescoSites && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">UNESCO World Heritage Sites</h2>
                <ul className="space-y-2">
                  {place.unescoSites.map((site, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">🏛️</span>
                      {site}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {place.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Activities</h2>
              <ul className="space-y-2">
                {place.activities.map((activity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-orange-500 mr-2">▸</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Travel Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Best Time to Visit</h3>
                  <p className="text-gray-600">{place.bestTimeToVisit}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Cultural Significance</h3>
                  <p className="text-gray-600">{place.culturalSignificance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailPage;
