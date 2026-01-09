import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CityCard } from "@/components/city-card";
import { domesticCities, internationalCities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Explore Cities",
  description:
    "Discover domestic and international cities. Book flights to your dream destinations.",
};

export default function Cities() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Cities
            </h1>
            <p className="text-lg opacity-90">
              Discover destinations across Pakistan and the world
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Domestic Cities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domesticCities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              International Cities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalCities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
