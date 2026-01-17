import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { offers } from "@/data/offers";

export default function Offers() {
  const validOffers = offers.filter(
    (o) => new Date(o.validUntilISO) > new Date()
  );
  const expiredOffers = offers.filter(
    (o) => new Date(o.validUntilISO) <= new Date()
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Special Offers
            </h1>
            <p className="text-lg opacity-90">
              Discover amazing deals on flights to your favorite destinations
            </p>
          </div>
        </section>

        {validOffers.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Active Offers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {validOffers.map((offer) => (
                  <Card
                    key={offer.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="bg-primary h-40 flex items-center justify-center text-primary-foreground">
                      <div className="text-center">
                        <p className="text-5xl font-bold">{offer.discount}%</p>
                        <p className="text-sm">DISCOUNT</p>
                      </div>
                    </div>
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {offer.description}
                      </p>

                      <div className="border-t border-border pt-4 space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Promo Code
                          </p>
                          <code className="bg-muted px-3 py-1 text-sm font-mono font-bold">
                            {offer.promoCode}
                          </code>
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground">
                            Valid Until
                          </p>
                          <p className="text-sm font-medium">
                            {new Date(offer.validUntilISO).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            Terms:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {offer.terms.slice(0, 2).map((term, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{term}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/flights?promo=${offer.promoCode}`}
                          className="block pt-2"
                        >
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            View Flights
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {expiredOffers.length > 0 && (
          <section className="py-16 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Previous Offers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
                {expiredOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <div className="bg-muted h-40 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-muted-foreground">
                          {offer.discount}%
                        </p>
                        <p className="text-sm text-muted-foreground">EXPIRED</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Expired on{" "}
                        {new Date(offer.validUntilISO).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How to Use */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How to Use Promo Codes
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Find an Offer",
                  description:
                    "Browse through our active offers above and select the one you like.",
                },
                {
                  step: 2,
                  title: "Copy the Code",
                  description:
                    "Copy the promo code or note it down for later use.",
                },
                {
                  step: 3,
                  title: "Search Flights",
                  description:
                    "Use the flight search to find your desired route and dates.",
                },
                {
                  step: 4,
                  title: "Apply at Checkout",
                  description:
                    "Enter the promo code during the booking process to receive your discount.",
                },
                {
                  step: 5,
                  title: "Confirm Booking",
                  description:
                    "Complete your booking and enjoy your discounted flight!",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-none flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    {item.step < 5 && (
                      <div className="w-1 h-12 bg-primary/20 mt-4"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
