export interface Flight {
  id: string;
  airline: string;
  airlineCode: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  departureISO: string;
  arrivalISO: string;
  durationMinutes: number;
  price: number;
  stops: number;
  availableSeats: number;
  class: "Economy" | "Business" | "First";
  aircraft: string;
}

function generateFutureDate(daysFromNow: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    0,
    0
  );
  return date;
}

function generateFlights(): Flight[] {
  const airlines = [
    { name: "Aviators", code: "AV" },
    { name: "Emirates", code: "EK" },
    { name: "Qatar Airways", code: "QR" },
    { name: "Turkish Airlines", code: "TK" },
    { name: "British Airways", code: "BA" },
    { name: "Singapore Airlines", code: "SQ" },
    { name: "Thai Airways", code: "TG" },
  ];

  const aircrafts = [
    "Boeing 777",
    "Airbus A380",
    "Boeing 787",
    "Boeing Shayan(hehe)",
    "Airbus A350",
    "Boeing 737",
  ];

  const routes = [
    {
      from: "karachi",
      to: "dubai",
      fromCode: "KHI",
      toCode: "DXB",
      duration: 120,
    },
    {
      from: "karachi",
      to: "london",
      fromCode: "KHI",
      toCode: "LHR",
      duration: 540,
    },
    {
      from: "lahore",
      to: "dubai",
      fromCode: "LHE",
      toCode: "DXB",
      duration: 180,
    },
    {
      from: "lahore",
      to: "bangkok",
      fromCode: "LHE",
      toCode: "BKK",
      duration: 420,
    },
    {
      from: "islamabad",
      to: "dubai",
      fromCode: "ISB",
      toCode: "DXB",
      duration: 210,
    },
    {
      from: "islamabad",
      to: "istanbul",
      fromCode: "ISB",
      toCode: "IST",
      duration: 300,
    },
    {
      from: "peshawar",
      to: "dubai",
      fromCode: "PEW",
      toCode: "DXB",
      duration: 240,
    },
    {
      from: "multan",
      to: "karachi",
      fromCode: "MUX",
      toCode: "KHI",
      duration: 90,
    },
    {
      from: "faisalabad",
      to: "lahore",
      fromCode: "LYP",
      toCode: "LHE",
      duration: 75,
    },
    {
      from: "dubai",
      to: "london",
      fromCode: "DXB",
      toCode: "LHR",
      duration: 420,
    },
    {
      from: "dubai",
      to: "new-york",
      fromCode: "DXB",
      toCode: "JFK",
      duration: 630,
    },
    {
      from: "london",
      to: "new-york",
      fromCode: "LHR",
      toCode: "JFK",
      duration: 480,
    },
    {
      from: "london",
      to: "istanbul",
      fromCode: "LHR",
      toCode: "IST",
      duration: 300,
    },
    {
      from: "bangkok",
      to: "kuala-lumpur",
      fromCode: "BKK",
      toCode: "KUL",
      duration: 120,
    },
    {
      from: "kuala-lumpur",
      to: "singapore",
      fromCode: "KUL",
      toCode: "SIN",
      duration: 90,
    },
    {
      from: "singapore",
      to: "bangkok",
      fromCode: "SIN",
      toCode: "BKK",
      duration: 120,
    },
    {
      from: "istanbul",
      to: "doha",
      fromCode: "IST",
      toCode: "DOH",
      duration: 240,
    },
    {
      from: "doha",
      to: "dubai",
      fromCode: "DOH",
      toCode: "DXB",
      duration: 150,
    },
  ];

  const flights: Flight[] = [];
  let flightId = 1;

  for (const route of routes) {
    for (let i = 0; i < 3; i++) {
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const daysFromNow = 7 + Math.floor(Math.random() * 84);
      const departDate = generateFutureDate(daysFromNow);
      const arrivalDate = new Date(
        departDate.getTime() + route.duration * 60000
      );

      const stops = Math.random() > 0.7 ? Math.floor(Math.random() * 2) + 1 : 0;

      flights.push({
        id: `FL${String(flightId).padStart(6, "0")}`,
        airline: airline.name,
        airlineCode: airline.code,
        from: route.from,
        to: route.to,
        fromCode: route.fromCode,
        toCode: route.toCode,
        departureISO: departDate.toISOString(),
        arrivalISO: arrivalDate.toISOString(),
        durationMinutes: route.duration + stops * 120,
        price: Math.floor(Math.random() * 800) + 200,
        stops: stops,
        availableSeats: Math.floor(Math.random() * 200) + 20,
        class: Math.random() > 0.7 ? "Business" : "Economy",
        aircraft: aircrafts[Math.floor(Math.random() * aircrafts.length)],
      });

      flightId++;
    }
  }

  return flights;
}

export const flights: Flight[] = generateFlights();

export function searchFlights(
  from?: string,
  to?: string,
  departDate?: string,
  classFilter?: string
): Flight[] {
  return flights.filter((flight) => {
    const normalizedFrom = from?.toLowerCase() || "";
    const normalizedTo = to?.toLowerCase() || "";

    if (normalizedFrom && flight.from !== normalizedFrom) return false;
    if (normalizedTo && flight.to !== normalizedTo) return false;
    if (departDate) {
      const searchDate = new Date(departDate);
      const flightDate = new Date(flight.departureISO);
      if (flightDate.toDateString() !== searchDate.toDateString()) return false;
    }
    if (classFilter && flight.class !== classFilter) return false;
    return true;
  });
}
