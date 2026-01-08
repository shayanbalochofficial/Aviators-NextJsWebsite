import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { offers } from "@/data/offers";

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
      <div className="bg-primary h-28 flex items-center justify-center text-primary-foreground">
        <div className="text-center">
          <p className="text-4xl font-bold">{discount}%</p>
          <p className="text-sm font-medium">OFF</p>
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
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-background border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4">Explore the World with Aviators</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Book flights to over 100 destinations worldwide. Experience
                seamless travel with exceptional service and competitive
                pricing.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/flights">
                  <Button className="bg-primary hover:bg-primary/90">
                    Search Flights
                  </Button>
                </Link>
                <Link href="/cities">
                  <Button variant="outline">Explore Cities</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
