export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: number;
  promoCode: string;
  validUntilISO: string;
  imagePath: string;
  terms: string[];
}

function generateFutureDate(daysFromNow: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date;
}

export const offers: Offer[] = [
  {
    id: "OFR001",
    title: "Summer in Dubai",
    description:
      "Enjoy 30% off flights to Dubai this summer. Pack your bags and experience luxury.",
    discount: 30,
    promoCode: "SUMMER30",
    validUntilISO: generateFutureDate(45).toISOString(),
    imagePath: "/...",
    terms: ["Valid for Economy and Business class", "Minimum stay 3 days"],
  },
  {
    id: "OFR002",
    title: "Visit London",
    description:
      "Special offer on flights to the heart of England (Heathrow 😝).",
    discount: 25,
    promoCode: "LONDON25",
    validUntilISO: generateFutureDate(60).toISOString(),
    imagePath: "/...",
    terms: [
      "Valid for all classes",
      "Includes baggage allowance",
      "Early birds discount included",
    ],
  },
  {
    id: "OFR003",
    title: "Southeast Asia Adventure",
    description:
      "Explore Thailand, Malaysia, and Singapore with our special special yay bundle packages.",
    discount: 35,
    promoCode: "ASIA35",
    validUntilISO: generateFutureDate(50).toISOString(),
    imagePath: "/...",
    terms: [
      "Multi-city bookings only",
      "Valid for round trips",
      "Book 2+ destinations for discount",
    ],
  },
  {
    id: "OFR004",
    title: "Family Packages to Istanbul",
    description:
      "Create memories with your family. Special family rates and **kids fly free.",
    discount: 40,
    promoCode: "FAMILY40",
    validUntilISO: generateFutureDate(55).toISOString(),
    imagePath: "/...",
    terms: [
      "Babies (age<13) flies free dw",
      "Valid for groups of 4+",
      "All must book together",
    ],
  },
  {
    id: "OFR005",
    title: "Business Class Special",
    description:
      "Upgrade to business class at premium economy prices. Limited time offer.",
    discount: 50,
    promoCode: "BUSINESS50",
    validUntilISO: generateFutureDate(30).toISOString(),
    imagePath: "/...",
    terms: [
      "Limited seats available",
      "Valid on selected routes",
      "Lounge access included",
    ],
  },
  {
    id: "OFR006",
    title: "New Year Flash Sale",
    description:
      "Ring in the new year with amazing discounts on all international routes.",
    discount: 28,
    promoCode: "NEWYEAR28",
    validUntilISO: generateFutureDate(40).toISOString(),
    imagePath: "/...",
    terms: [
      "Valid for immediate bookings",
      "One way tickets excluded",
      "Non-transferable",
    ],
  },
];
