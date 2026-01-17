import Link from "next/link";
import React from "react";

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
    ],
  },
];

export default function FAQ() {
  return (
    <div>
      <Link href="/" className="text-blue-500 mx-15 mt-15 underline">
        HOME
      </Link>
    </div>
  );
}
