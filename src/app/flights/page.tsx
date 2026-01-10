import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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

export default function Flights() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">All Available Flights</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className=""></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
