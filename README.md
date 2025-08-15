# The Wellness Halo

This repository contains the source code for **The Wellness Halo**, a mobile massage booking site designed for sole proprietors and small teams. It provides a streamlined booking flow, pricing with coupon support, a simple blog and the foundation to add additional therapists as your business grows.

## Features

* **Seamless scheduling** – visitors select a therapist and session length then are redirected to your Cal.com booking page.
* **Google Calendar sync** – when you configure Cal.com to use your own calendar, appointments automatically respect your availability and existing events.
* **Pricing & coupons** – display service prices and allow clients to apply promo codes defined in `lib/coupons.ts`.
* **Membership‑ready** – highlight membership benefits on the homepage; integrate recurring plans via Stripe or your preferred provider.
* **Content hub** – add or edit posts in `lib/posts.ts` to publish wellness articles and marketing content.
* **Scalable** – add more therapists in `lib/employees.ts` and set their booking links via environment variables (see below).

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Create a `.env` file** based on `.env.example` and provide your booking URLs and pricing. At a minimum set:
   ```env
   NEXT_PUBLIC_CAL_URL_60="https://cal.com/YOURNAME/60min"
   NEXT_PUBLIC_CAL_URL_90="https://cal.com/YOURNAME/90min"
   NEXT_PUBLIC_CAL_URL_120="https://cal.com/YOURNAME/120min"
   ```
   Replace `YOURNAME` with your Cal.com username. If you offer additional durations or have more therapists, add their URLs following the pattern shown in `.env.example` and update `lib/employees.ts` accordingly.
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the home page and be able to navigate to the booking, pricing and blog pages.

## Customizing

* **Add therapists** – open `lib/employees.ts`, copy the example object and modify the `id`, `displayName` and environment variable names. Then define the corresponding URLs in your `.env` file.
* **Coupons** – adjust `lib/coupons.ts` to define the codes and discount percentages you want to offer. The pricing page automatically reads these values.
* **Pricing** – update the price environment variables (`NEXT_PUBLIC_PRICE_60`, etc.) in your `.env` file. These values are displayed on the pricing page.
* **Blog posts** – edit or add entries in `lib/posts.ts`. Each post includes a slug, title, date, summary and full content. The content supports basic markdown‑like headings (`###` for h3) and paragraphs separated by blank lines.
* **Styling** – tweak the colour palette in `tailwind.config.ts` and adjust components in `components/` as desired.

## Deploying

When you’re ready to go live, build and start the app:

```bash
npm run build
npm start
```

Next.js generates an optimized production build. You can deploy it to any platform that supports Node.js (Vercel, Netlify, etc.). Remember to set the same environment variables on your hosting provider.

---

This project is provided as a starting point. Feel free to extend it with additional pages (e.g. membership sign‑up, provider applications) or integrate external services like Stripe for payments and a CMS for content management.