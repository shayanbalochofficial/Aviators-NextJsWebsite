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
