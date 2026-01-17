import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Aviators
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your trusted partner for seamless flight booking experiences
              worldwide
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At Aviators, we believe that travel should be accessible,
                  affordable, and hassle-free. Our mission is to empower
                  travelers with the tools and information they need to book
                  flights with confidence.
                </p>
                <p className="text-muted-foreground">
                  We&apos;re committed to providing exceptional customer service
                  and competitive prices on flights to destinations worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground mb-4">
                  We envision a world where booking flights is as simple and
                  delightful as the journey itself. By combining cutting-edge
                  technology with human-centered design, we&apos;re making air
                  travel more accessible to everyone.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to become the most trusted and user-friendly
                  flight booking platform globally.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="py-16 bg-muted/20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Company Information
            </h2>

            <div className="bg-white p-8 rounded-none border-3 border-primary">
              <p className="text-lg font-semibold text-primary mb-4">
                Headquarters
              </p>
              <p className="text-xl font-bold mb-2">I.I. Chundrigar Road</p>
              <p className="text-lg text-foreground mb-8">Karachi, Pakistan</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Email
                  </p>
                  <p className="text-lg">info@aviators.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Phone
                  </p>
                  <p className="text-lg">+92-21-1234-5678</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Established
                  </p>
                  <p className="text-lg">2015</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Destinations
                  </p>
                  <p className="text-lg">100+ worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Integrity",
                  description:
                    "We conduct business with transparency and honesty in all our dealings.",
                },
                {
                  title: "Excellence",
                  description:
                    "We strive for the highest quality in everything we do.",
                },
                {
                  title: "Customer Focus",
                  description:
                    "Your satisfaction and trust are at the heart of everything we do.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously improve our platform to serve you better.",
                },
              ].map((value) => (
                <Card
                  key={value.title}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="text-primary font-bold text-2xl shrink-0 mt-1">
                        •
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Journey
            </h2>

            <div className="space-y-6">
              {[
                { year: "2025", event: "Aviators founded in Karachi" },
                {
                  year: "2026",
                  event: "Launched international flight bookings",
                },
                { year: "2028", event: "Expanded to 50+ destinations" },
                { year: "2030", event: "Enhanced mobile app platform" },
                { year: "2033", event: "100+ destinations milestone" },
              ].map((milestone) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="w-1 h-16 bg-primary/20 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <p className="font-bold text-primary text-lg">
                      {milestone.year}
                    </p>
                    <p className="text-foreground">{milestone.event}</p>
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
