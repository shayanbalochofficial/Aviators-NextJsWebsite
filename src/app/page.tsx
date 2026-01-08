import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { offers } from "@/data/offers";
import { Footer } from "./../components/footer";

export const metadata: Metadata = {
  title: "Aviators - Book Flights Worldwide",
  description:
    "Search and book flights to destinations worldwide with Aviators. Fast, reliable, and affordable.",
};

function OfferCard({ offer }: { offer: typeof offers[0] }) {
  const discount = offer.discount;
  const isValid = new Date(offer.validUntilISO) > new Date();

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className=" border-2 border-primary h-28 flex items-center justify-center text-primary hover:bg-primary/80 hover:text-white mx-0.5 transition">
        <div className="text-center">
          <p className="text-3xl font-bold">{discount}% OFF</p>
        </div>
      </div>
      <CardContent className="pt-4">
        <h3 className="font-bold text-base mb-2">{offer.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {offer.description}
        </p>
        <div className="flex items-center justify-between">
          <code className="bg-muted px-2 py-1 text-xs font-mono text-foreground">
            {offer.promoCode}
          </code>
          <span
            className={`text-xs font-medium ${
              isValid ? "text-green-700" : "text-red-700"
            }`}
          >
            {isValid ? "Active" : "Expired"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const activeOffers = offers
    .filter((o) => new Date(o.validUntilISO) > new Date())
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-background border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-5xl md:underline lg:underline">
                Explore the World with Aviators
              </h1>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-8">
                Book flights to over 100 destinations worldwide. Experience
                seamless travel with exceptional service and competitive
                pricing.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/flights">
                  <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
                    Search Flights
                  </Button>
                </Link>
                <Link href="/cities">
                  <Button variant="outline" className="cursor-pointer hover:bg-primary">
                    Explore Cities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Featured sec */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2>Featured Offers</h2>
              <Link href="/offers">
                <Button variant="ghost" className="text-primary cursor-pointer">
                  View All →
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </section>

        {/* Section3: Why Choose Us */}

        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Why Choose Aviators</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary px-6 py-12 text-center bg-background">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Wide Selection
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Choose from hundreds of flights daily to your favorite
                  destinations.
                </p>
              </div>

              {/* #2 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary px-6 py-12 text-center bg-background">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Best Prices
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Compare fares and find the best deals on flights worldwide.
                </p>
              </div>

              {/* #3 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary px-6 py-12 text-center bg-background">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Easy Booking
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Simple and secure booking process with instant confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Start Your Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/cities">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Explore Cities</h3>
                        <p className="text-sm text-muted-foreground">
                          Discover domestic and international destinations
                        </p>
                      </div>
                      <span className="text-primary font-bold text-2xl shrink-0">
                        →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/flights">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Search Flights</h3>
                        <p className="text-sm text-muted-foreground">
                          Find and book your perfect flight
                        </p>
                      </div>
                      <span className="text-primary font-bold text-2xl shrink-0">
                        →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
