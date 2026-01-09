import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

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

export function CityCard({ city }: { city: City }) {
    return (
    <Link href={`/cities/${city.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="bg-primary h-40 flex items-center justify-center text-white text-center p-4">
          <div>
            <h3 className="text-2xl font-bold">{city.name}</h3>
            <p className="text-sm opacity-90">{city.country}</p>
          </div>
        </div>
        <CardContent className="pt-4">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {city.description}
          </p>
          <div className="text-primary font-medium text-sm">Explore →</div>
        </CardContent>
      </Card>
    </Link>
  );
}
