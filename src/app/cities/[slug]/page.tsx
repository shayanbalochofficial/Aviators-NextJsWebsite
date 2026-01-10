import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cities, getCityBySlug } from "@/data/cities";
import { flights } from "@/data/flights";
import { offers } from "@/data/offers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export default async function CityDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const cityFlights = flights.filter((f) => f.from === slug || f.to === slug);

  const relevantOffers = offers
    .filter((o) => new Date(o.validUntilISO) > new Date())
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Starts */}
        <section className="bg-linear-to-b from-primary to-primary/80 text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {city.name}
              </h1>
              <p className="text-lg opacity-90">{city.country}</p>
              <p className="text-base opacity-80 mt-4 max-w-2xl">
                {city.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {city.highlights.map((highlight, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold text-xl">★</span>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {city.popularRoutes.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">
                Popular Routes from {city.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {city.popularRoutes.map((route, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-3">{route.to}</h3>
                      <ul className="space-y-2">
                        {route.exampleRoutes.map((routeName, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <span className="text-primary mr-2">→</span>
                            {routeName}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {city.recommendedAirlines.length > 0 && (
          <section className="py-12 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">Recommended Airlines</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {city.recommendedAirlines.map((airline, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-foreground">{airline}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {city.travelTips.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">Travel Tips</h2>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-none">
                <ul className="space-y-3">
                  {city.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-3">•</span>
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {relevantOffers.length > 0 && (
          <section className="py-12 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relevantOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <div className="bg-primary h-32 flex items-center justify-center text-white">
                      <div className="text-center">
                        <p className="text-5xl font-bold">{offer.discount}%</p>
                        <p className="text-sm">OFF</p>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-bold mb-2">{offer.title}</h3>
                      <code className="bg-muted px-2 py-1 text-xs font-mono">
                        {offer.promoCode}
                      </code>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to explore?</h2>
            <Link href="/flights">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Search All Flights →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
