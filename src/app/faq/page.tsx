import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "booking",
    title: "Booking & Reservations",
    questions: [
      {
        q: "How do I book a flight?",
        a:
          "Booking a flight is easy! Simply visit our booking page which will be public soon, select your desired dates and destinations, and follow the prompts to complete your reservation. For now, you can browse flight and have an idea about Pricing.",
      },
      {
        q: "Can I modify my booking after purchase?",
        a:
          "You can modify most bookings up to 24 hours before departure. Please contact our customer support team for assistance.",
      },
      {
        q: "What is the cancellation policy?",
        a:
          "Cancellation policies vary by ticket type. Economy tickets may have limited refund options, while premium fares offer more flexibility. Details are shown during checkout.",
      },
      {
        q: "How far in advance should I book?",
        a:
          "We recommend booking 4-6 weeks in advance for the best prices. However, last-minute deals are often available.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a:
          "We accept all major credit and debit cards (Visa, Mastercard, American Express) and digital payment methods.",
      },
      {
        q: "Are there hidden fees?",
        a:
          "No. The price shown is the total you pay (excluding optional extras like baggage or insurance). All taxes and fees are included.",
      },
      {
        q: "Can I use promo codes?",
        a:
          "Yes! Check our Special Offers page for current promo codes. Enter them during the booking process for discounts.",
      },
      {
        q: "Is my payment information secure?",
        a:
          "Yes, we use industry-standard encryption (SSL) to protect your payment details.",
      },
    ],
  },
  {
    id: "flights",
    title: "Flights & Travel",
    questions: [
      {
        q: "What documents do I need for international flights?",
        a:
          "You'll need a valid passport. Some countries also require visas. Check your destination's requirements before traveling.",
      },
      {
        q: "What is your baggage allowance?",
        a:
          "Standard allowance includes 1 personal item (free) and optional checked baggage. Details are shown during booking.",
      },
      {
        q: "Can I change my flight date?",
        a:
          "Yes, date changes are usually allowed. You may need to pay a change fee depending on your ticket type. Contact our support team for assistance.",
      },
      {
        q: "What is the check-in process?",
        a:
          "Online check-in typically opens 24 hours before departure. You'll receive check-in instructions via email with your booking confirmation.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Support",
    questions: [
      {
        q: "Do I need an account to book?",
        a:
          "No, you can book as a guest. However, creating an account helps you manage your bookings and access exclusive offers.",
      },
      {
        q: "How do I track my booking?",
        a:
          "You can track your booking using your booking reference and email. A confirmation will be sent to your registered email.",
      },
      {
        q: "How do I contact customer support?",
        a:
          "Visit our Contact page for email, phone, and chat support options. We're available to help during business hours.",
      },
      {
        q: "Can I get a refund?",
        a:
          "Refund eligibility depends on your ticket type and fare rules. Contact our support team with your booking reference for details.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg opacity-90">
              Find answers to common questions about booking flights with
              Aviators
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqItems.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {category.title}
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, idx) => (
                    <AccordionItem
                      key={`${category.id}-${idx}`}
                      value={`${category.id}-${idx}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="hover:text-primary font-medium py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-16 pt-8 border-t border-border text-center">
              <h3 className="text-xl font-bold mb-2">
                Didn&apos;t find your answer?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our customer support team is here to help. Contact us anytime!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
