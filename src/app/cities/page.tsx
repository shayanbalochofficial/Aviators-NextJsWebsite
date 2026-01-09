import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
      </main>

      <Footer />
    </div>
  );
}
