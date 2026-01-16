"use client";
import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FlightCard } from "@/components/flight-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { flights } from "@/data/flights";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

const maxPrice =
  flights.length > 0 ? Math.max(...flights.map((f) => f.price)) : 0;
const uniqueAirlines = [...new Set(flights.map((f) => f.airline))].sort();

export default function Flights() {
  const [sortBy, setSortBy] = useState<"price" | "duration" | "departure">(
    "price"
  );
  const [priceFilter, setPriceFilter] = useState(maxPrice); // Start with full range
  const [stopsFilter, setStopsFilter] = useState<number[]>([0, 1, 2]);
  const [airlineFilter, setAirlineFilter] = useState<string[]>([]);
  const [classFilter, setClassFilter] = useState<string[]>([]);

  const filteredFlights = useMemo(() => {
    let results = [...flights];

    results = results.filter((f) => {
      if (f.price > priceFilter) return false;
      if (!stopsFilter.includes(f.stops)) return false;
      if (airlineFilter.length > 0 && !airlineFilter.includes(f.airline))
        return false;
      if (classFilter.length > 0 && !classFilter.includes(f.class))
        return false;
      return true;
    });

    results.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "duration":
          return a.durationMinutes - b.durationMinutes;
        case "departure":
          return (
            new Date(a.departureISO).getTime() -
            new Date(b.departureISO).getTime()
          );
        default:
          return 0;
      }
    });

    return results;
  }, [priceFilter, stopsFilter, airlineFilter, classFilter, sortBy]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">All Available Flights</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <FilterSidebar
                  onPriceChange={(min, max) => setPriceFilter(max)}
                  onStopsChange={setStopsFilter}
                  onAirlineChange={setAirlineFilter}
                  onClassChange={setClassFilter}
                  airlines={uniqueAirlines}
                  maxPrice={maxPrice}
                />
              </div>

              <div className="md:col-span-3">
                <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {filteredFlights.length}{" "}
                      {filteredFlights.length === 1 ? "flight" : "flights"}{" "}
                      found
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === "price" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("price")}
                    >
                      Price
                    </Button>
                    <Button
                      variant={sortBy === "duration" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("duration")}
                    >
                      Duration
                    </Button>
                    <Button
                      variant={sortBy === "departure" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("departure")}
                    >
                      Departure
                    </Button>
                  </div>
                </div>

                {filteredFlights.length > 0 ? (
                  <div className="space-y-4">
                    {filteredFlights.map((flight) => (
                      <FlightCard key={flight.id} flight={flight} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-12 pb-12 text-center">
                      <p className="text-lg text-muted-foreground mb-4">
                        No flights found matching your criteria
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Try adjusting your filters
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
