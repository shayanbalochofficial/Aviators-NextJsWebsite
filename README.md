# Aviators

A modern flight platform built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Flight Search & Filtering**: Search flights by city, date, and passengers with advanced filtering (price, stops, airlines, class)
- **City Exploration**: Browse 15+ domestic and international cities with detailed information
- **Special Offers**: Promotional codes and discounts
- **Responsive Design**: Mobile-first design with clean, geometric UI

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Date Handling**: date-fns
- **Notifications**: Sonner

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles with design tokens
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact form
│   ├── cities/
│   │   ├── page.tsx            # Cities listing
│   │   └── [slug]/page.tsx     # City detail pages
│   ├── flights/page.tsx        # Flight search & results
│   ├── offers/page.tsx         # Special offers
│   └── faq/page.tsx            # FAQ accordion
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer
│   ├── flight-card.tsx         # Flight listing card
│   ├── filter-sidebar.tsx      # Flight filters
│   ├── city-card.tsx           # City card component
├── data/
│   ├── cities.ts               # City data (15 cities)
│   ├── flights.ts              # Flight data (dynamically generated)
│   └── offers.ts               # Promotional offers
├── lib/
│   └── types.ts                # TypeScript interfaces
└── public
```

## Getting Started

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Data Management

### Cities
- 7 domestic cities (Karachi, Lahore, Islamabad, Peshawar, Quetta, Multan, Faisalabad)
- 8 international cities (Dubai, London, New York, Istanbul, Kuala Lumpur, Bangkok, Singapore, Doha)
- Each city has description, highlights, popular routes, airlines, and tips

### Flights
- Dynamically generated flights
- Departure dates: 7-90 days in future
- Realistic pricing: $200-$1000
- Multiple airlines with different classes
- Filter by: price, stops, airline, class, duration

### Offers
- Promotional offers with varying discounts
- Valid until dates in the future
- Promo codes for booking

## Key Features Explained

### Flight Search
- Search by departure/arrival city, date, passengers, class
- Results persist via URL query parameters
- Supports optional return date

### Filtering
- **Price Range**: Slider to filter by maximum price
- **Stops**: Filter non-stop, 1-stop, 2+ stops
- **Airlines**: Checkbox filtering by airline
- **Class**: Economy, Business, First class options
- **Sorting**: Price (asc), Duration (asc), Departure time (asc)

### City Pages
- Grid listing of all cities (domestic + international)
- Individual city detail pages with:
  - City description and highlights
  - Popular routes from that city
  - Recommended airlines
  - Travel tips
  - Relevant offers
  - Flight search pre-filled with city as origin


## Accessibility

- Semantic HTML (header, main, footer, nav)
- WCAG AA contrast compliance
- Keyboard navigation support
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All flights have future departure dates (7-90 days from today)

## Future Enhancements

- Booking System
- User authentication with booking history
- Real payment gateway integration (Stripe)
- Email notifications
- Hotel and car rental bookings
- Travel insurance options
- Loyalty program
- Multi-language support

---

Built with ❤️ by Shayan
