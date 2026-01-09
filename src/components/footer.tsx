import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Aviators</h3>
            <p className="text-sm mb-4 opacity-80">
              Your trusted partner for seamless flight bookings worldwide.
            </p>
            <p className="text-xs opacity-70">
              Headquartered in Karachi — I.I. Chundrigar Road
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/flights"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  Search Flights
                </Link>
              </li>
              <li>
                <Link
                  href="/cities"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  Explore Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Saction */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-primary hover:border-b-2 border-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider ">
              Contact
            </h4>
            <p className="text-sm mb-2 opacity-80">
              <strong>HQ:</strong> Karachi, Pakistan
            </p>
            <p className="text-sm mb-2 opacity-80">
              <strong>Email:</strong> info@aviators.com
            </p>
            <p className="text-sm opacity-80">
              <strong>Phone:</strong> +92-333-9***099
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p className="opacity-70 ">
            &copy; {currentYear}{" "}
            <span className="hover:text-primary hover:border-b-2 border-primary transition">
              Aviators.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
