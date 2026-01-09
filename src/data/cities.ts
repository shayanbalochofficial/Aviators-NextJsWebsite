export interface City {
  slug: string;
  name: string;
  country: string;
  description: string;
  imagePath: string;
  popularRoutes: {
    to: string;
    exampleRoutes: string[];
  }[];
  recommendedAirlines: string[];
  travelTips: string[];
  highlights: string[];
}

export const cities: City[] = [
  {
    slug: "karachi",
    name: "Karachi",
    country: "Pakistan",
    description:
      "Pakistan's largest city and main port, where modern commerce meets historic charm.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Dubai",
        exampleRoutes: ["Karachi → Dubai", "Karachi → Abu Dhabi"],
      },
      {
        to: "London",
        exampleRoutes: ["Karachi → London", "Karachi → Manchester"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA", "Emirates", "Qatar Airways"],
    travelTips: [
      "Visit the Clifton Beaches",
      "Explore Sindh Museum",
      "Try street food at Zarobi Bazaar",
    ],
    highlights: ["Port City", "Shopping Districts", "Cultural Hub"],
  },
  {
    slug: "lahore",
    name: "Lahore",
    country: "Pakistan",
    description:
      "The heart of Punjab, famous for its rich Mughal heritage and vibrant culture.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Dubai",
        exampleRoutes: ["Lahore → Dubai", "Lahore → Abu Dhabi"],
      },
      {
        to: "Bangkok",
        exampleRoutes: ["Lahore → Bangkok", "Lahore → Phuket"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA", "Emirates", "Thai Airways"],
    travelTips: [
      "Explore Badshahi Mosque",
      "Visit Lahore Fort",
      "Experience Food Street",
    ],
    highlights: ["Mughal Architecture", "Food Scene", "Art & Culture"],
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    country: "Pakistan",
    description:
      "Pakistan's modern capital nestled between the Margalla Hills, known for its planned architecture.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Dubai",
        exampleRoutes: ["Islamabad → Dubai"],
      },
      {
        to: "Istanbul",
        exampleRoutes: ["Islamabad → Istanbul"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA", "Turkish Airlines"],
    travelTips: [
      "Hike the Margalla Hills",
      "Visit Faisal Mosque",
      "Explore Lok Virsa Museum",
    ],
    highlights: ["Mountain Views", "Modern Capital", "Nature Trails"],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    country: "Pakistan",
    description:
      "An ancient Silk Road city, gateway to the north with centuries of history.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Dubai",
        exampleRoutes: ["Peshawar → Dubai"],
      },
      {
        to: "Istanbul",
        exampleRoutes: ["Peshawar → Istanbul"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA"],
    travelTips: [
      "Visit Peshawar Museum",
      "Explore Qissa Khawani Bazaar",
      "See Bala Hisar Fort",
    ],
    highlights: ["Historic Bazaars", "Gateway to North", "Silk Road Heritage"],
  },
  {
    slug: "quetta",
    name: "Quetta",
    country: "Pakistan",
    description:
      "The gateway to Balochistan, surrounded by stunning mountain landscapes.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Karachi",
        exampleRoutes: ["Quetta → Karachi"],
      },
      {
        to: "Dubai",
        exampleRoutes: ["Quetta → Dubai"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA"],
    travelTips: [
      "Visit Hanna Lake",
      "Explore Balochi Culture",
      "Trek in nearby mountains",
    ],
    highlights: ["Mountain Scenery", "Natural Beauty", "Adventure Hub"],
  },
  {
    slug: "multan",
    name: "Multan",
    country: "Pakistan",
    description:
      "The City of Saints with spiritual significance and ancient monuments.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Karachi",
        exampleRoutes: ["Multan → Karachi"],
      },
      {
        to: "Lahore",
        exampleRoutes: ["Multan → Lahore"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA"],
    travelTips: [
      "Visit Sufi Shrines",
      "Explore Multan Fort",
      "See sunset from bridge",
    ],
    highlights: ["Spiritual Hub", "Historic Sites", "Cultural Landmarks"],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    country: "Pakistan",
    description:
      "Pakistan's industrial heartland and textile hub with modern infrastructure.",
    imagePath: "/",
    popularRoutes: [
      {
        to: "Lahore",
        exampleRoutes: ["Faisalabad → Lahore"],
      },
      {
        to: "Karachi",
        exampleRoutes: ["Faisalabad → Karachi"],
      },
    ],
    recommendedAirlines: ["Aviators", "PIA"],
    travelTips: [
      "Visit Clock Tower",
      "Explore textile markets",
      "Visit botanical gardens",
    ],
    highlights: ["Industrial City", "Shopping", "Modern Development"],
  },

  //   International Time
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    description:
      "A futuristic desert city known for luxury, shopping, and stunning architecture.",
    imagePath: "/cities/dubai.jpg",
    popularRoutes: [
      {
        to: "Karachi",
        exampleRoutes: ["Dubai → Karachi", "Dubai → Lahore"],
      },
      {
        to: "London",
        exampleRoutes: ["Dubai → London"],
      },
    ],
    recommendedAirlines: ["Emirates", "Aviators", "Etihad"],
    travelTips: [
      "Visit Burj Khalifa",
      "Shop at Dubai Mall",
      "Enjoy desert safari",
    ],
    highlights: ["Luxury Shopping", "Modern Architecture", "Beach Life"],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    description:
      "England's historic capital, blending royal heritage with modern culture.",
    imagePath: "/cities/london.jpg",
    popularRoutes: [
      {
        to: "Karachi",
        exampleRoutes: ["London → Karachi"],
      },
      {
        to: "New York",
        exampleRoutes: ["London → New York"],
      },
    ],
    recommendedAirlines: ["British Airways", "Aviators"],
    travelTips: ["See Big Ben", "Visit Tower of London", "Explore museums"],
    highlights: ["Royal Heritage", "Museums", "Theatre District"],
  },
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    description:
      "The city that never sleeps, iconic American metropolis with world-class attractions.",
    imagePath: "/cities/new-york.jpg",
    popularRoutes: [
      {
        to: "London",
        exampleRoutes: ["New York → London"],
      },
      {
        to: "Dubai",
        exampleRoutes: ["New York → Dubai"],
      },
    ],
    recommendedAirlines: ["United", "American Airlines", "Aviators"],
    travelTips: [
      "Visit Times Square",
      "Climb Empire State Building",
      "Explore Central Park",
    ],
    highlights: ["Iconic Landmarks", "Broadway Shows", "Cosmopolitan"],
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    description:
      "Where East meets West, spanning two continents with rich Ottoman history.",
    imagePath: "/cities/istanbul.jpg",
    popularRoutes: [
      {
        to: "Karachi",
        exampleRoutes: ["Istanbul → Karachi"],
      },
      {
        to: "London",
        exampleRoutes: ["Istanbul → London"],
      },
    ],
    recommendedAirlines: ["Turkish Airlines", "Aviators"],
    travelTips: [
      "Visit Blue Mosque",
      "Explore Grand Bazaar",
      "Take Bosphorus cruise",
    ],
    highlights: ["Historic Mosques", "Bazaars", "Bosphorus Views"],
  },
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    description:
      "Malaysia's vibrant capital with modern skyline and diverse cultural experiences.",
    imagePath: "/cities/kuala-lumpur.jpg",
    popularRoutes: [
      {
        to: "Bangkok",
        exampleRoutes: ["Kuala Lumpur → Bangkok"],
      },
      {
        to: "Karachi",
        exampleRoutes: ["Kuala Lumpur → Karachi"],
      },
    ],
    recommendedAirlines: ["Malaysia Airlines", "Aviators"],
    travelTips: [
      "Climb Petronas Towers",
      "Visit Menara Tower",
      "Explore street food markets",
    ],
    highlights: ["Modern Skyline", "Diverse Culture", "Shopping Malls"],
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    description:
      "Thailand's bustling capital famous for temples, food, and vibrant nightlife.",
    imagePath: "/cities/bangkok.jpg",
    popularRoutes: [
      {
        to: "Kuala Lumpur",
        exampleRoutes: ["Bangkok → Kuala Lumpur"],
      },
      {
        to: "Singapore",
        exampleRoutes: ["Bangkok → Singapore"],
      },
    ],
    recommendedAirlines: ["Thai Airways", "Aviators"],
    travelTips: [
      "Visit Grand Palace",
      "Explore floating markets",
      "Experience Muay Thai",
    ],
    highlights: ["Ancient Temples", "Street Food", "Nightlife"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    description:
      "A modern city-state blending Chinese, Malay, and Indian cultures seamlessly.",
    imagePath: "/cities/singapore.jpg",
    popularRoutes: [
      {
        to: "Bangkok",
        exampleRoutes: ["Singapore → Bangkok"],
      },
      {
        to: "Kuala Lumpur",
        exampleRoutes: ["Singapore → Kuala Lumpur"],
      },
    ],
    recommendedAirlines: ["Singapore Airlines", "Aviators"],
    travelTips: [
      "Visit Marina Bay Sands",
      "Explore Gardens by the Bay",
      "Enjoy hawker centers",
    ],
    highlights: [
      "Modern City-State",
      "Cultural Diversity",
      "Culinary Excellence",
    ],
  },
  {
    slug: "doha",
    name: "Doha",
    country: "Qatar",
    description:
      "Qatar's modern capital on the Persian Gulf with world-class amenities.",
    imagePath: "/cities/doha.jpg",
    popularRoutes: [
      {
        to: "Dubai",
        exampleRoutes: ["Doha → Dubai"],
      },
      {
        to: "Istanbul",
        exampleRoutes: ["Doha → Istanbul"],
      },
    ],
    recommendedAirlines: ["Qatar Airways", "Aviators"],
    travelTips: [
      "Visit Museum of Islamic Art",
      "Explore Corniche",
      "See Pearl Monument",
    ],
    highlights: ["Modern Architecture", "Shopping", "Cultural Museum"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export const domesticCities = cities.filter(
  (city) => city.country === "Pakistan"
);
export const internationalCities = cities.filter(
  (city) => city.country !== "Pakistan"
);
