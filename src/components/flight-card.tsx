"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface FlightCardProps {
  flight: Flight;
  onSelectFlight?: (flight: Flight) => void;
}

export function FlightCard({ flight, onSelectFlight }: FlightCardProps) {
  const departTime = new Date(flight.departureISO);
  const arrivalTime = new Date(flight.arrivalISO);

  const departHour = departTime.getHours().toString().padStart(2, "0");
  const departMin = departTime.getMinutes().toString().padStart(2, "0");
  const arrivalHour = arrivalTime.getHours().toString().padStart(2, "0");
  const arrivalMin = arrivalTime.getMinutes().toString().padStart(2, "0");

  const durationHours = Math.floor(flight.durationMinutes / 60);
  const durationMins = flight.durationMinutes % 60;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4">
          {/* yaha Airline & Flight Code */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Airline</p>
            <p className="font-semibold">{flight.airline}</p>
            <p className="text-xs text-muted-foreground">
              {flight.airlineCode}
              {flight.id}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1">Departure</p>
            <p className="font-bold text-lg">
              {departHour}:{departMin}
            </p>
            <p className="text-xs">{flight.fromCode}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="flex-1 h-px bg-muted-foreground"></div>
              <div className="px-2 text-primary font-semibold">→</div>
              <div className="flex-1 h-px bg-muted-foreground"></div>
            </div>
            <p className="text-xs font-medium">
              {durationHours}h {durationMins}m
            </p>
            <p className="text-xs text-muted-foreground">
              {flight.stops === 0
                ? "Non-stop"
                : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1">Arrival</p>
            <p className="font-bold text-lg">
              {arrivalHour}:{arrivalMin}
            </p>
            <p className="text-xs">{flight.toCode}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-2">Price</p>
            <p className="text-2xl font-bold text-primary mb-3">
              ${flight.price}
            </p>
            {onSelectFlight ? (
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => onSelectFlight(flight)}
              >
                Select
              </Button>
            ) : (
              <Link href={`/booking?flightId=${flight.id}`}>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Book Now
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <p className="text-muted-foreground">Aircraft</p>
            <p className="font-medium">{flight.aircraft}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Class</p>
            <p className="font-medium">{flight.class}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Available Seats</p>
            <p className="font-medium">{flight.availableSeats}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date</p>
            <p className="font-medium">
              {new Date(flight.departureISO).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
