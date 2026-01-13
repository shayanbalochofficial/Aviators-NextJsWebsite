"use client";

import type React from "react";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

interface FilterSidebarProps {
  onPriceChange: (min: number, max: number) => void;
  onStopsChange: (stops: number[]) => void;
  onAirlineChange: (airlines: string[]) => void;
  onClassChange: (classes: string[]) => void;
  airlines: string[];
  maxPrice: number;
}

export function FilterSidebar({
  onPriceChange,
  onStopsChange,
  onAirlineChange,
  onClassChange,
  airlines,
  maxPrice,
}: FilterSidebarProps) {
  const [selectedStops, setSelectedStops] = useState<number[]>([0, 1, 2]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      onPriceChange(0, value);
    },
    [onPriceChange]
  );

  const handleStopsChange = (stops: number) => {
    const updated = selectedStops.includes(stops)
      ? selectedStops.filter((s) => s !== stops)
      : [...selectedStops, stops];

    setSelectedStops(updated.length > 0 ? updated : [0, 1, 2]);
    onStopsChange(updated.length > 0 ? updated : [0, 1, 2]);
  };

  const handleAirlineChange = (airline: string) => {
    const updated = selectedAirlines.includes(airline)
      ? selectedAirlines.filter((a) => a !== airline)
      : [...selectedAirlines, airline];

    setSelectedAirlines(updated);
    onAirlineChange(updated);
  };

  const handleClassChange = (classType: string) => {
    const updated = selectedClasses.includes(classType)
      ? selectedClasses.filter((c) => c !== classType)
      : [...selectedClasses, classType];

    setSelectedClasses(updated);
    onClassChange(updated);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-bold mb-4 block">Price Range</Label>
        <input
          type="range"
          min="0"
          max={maxPrice}
          defaultValue={maxPrice}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div>
        <Label className="text-base font-bold mb-4 block">Stops</Label>
        <div className="space-y-2">
          {[
            { label: "Non-stop", value: 0 },
            { label: "1 Stop", value: 1 },
            { label: "2+ Stops", value: 2 },
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedStops.includes(option.value)}
                onChange={() => handleStopsChange(option.value)}
                className="mr-2 w-4 h-4 border border-border rounded-none"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-bold mb-4 block">Airlines</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {airlines.map((airline) => (
            <label key={airline} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedAirlines.includes(airline)}
                onChange={() => handleAirlineChange(airline)}
                className="mr-2 w-4 h-4 border border-border rounded-none"
              />
              <span className="text-sm">{airline}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-bold mb-4 block">Class</Label>
        <div className="space-y-2">
          {["Economy", "Business", "First"].map((classType) => (
            <label key={classType} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedClasses.includes(classType)}
                onChange={() => handleClassChange(classType)}
                className="mr-2 w-4 h-4 border border-border rounded-none"
              />
              <span className="text-sm">{classType}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle>Filters</SheetTitle>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Card className="sticky top-20">
          <CardContent className="pt-6">
            <FilterContent />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
