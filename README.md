# QezPes · Քեզ Պես — brand site & shop

A dynamic site for [@qezpes](https://www.instagram.com/qezpes/): hero reels from the brand's
Instagram, the brand story, and a shop with color/size selection and Stripe checkout.

Built with Next.js (App Router) + TypeScript. All photos and videos in `public/` are QezPes's
own Instagram media.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Enable payments (Stripe)

1. Create a [Stripe](https://dashboard.stripe.com) account (test mode is fine to start).
2. Copy `.env.example` to `.env.local` and paste your secret key:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   ```
3. Restart `npm run dev`. Checkout now opens a real Stripe Checkout page
   (test card: `4242 4242 4242 4242`, any future date, any CVC).

Until the key is set, the checkout button shows a friendly notice and points buyers to
Instagram DM — the rest of the site works fully.

Charges are made in **USD** using the prices in `lib/products.ts` (prices are always read
server-side in `app/api/checkout/route.ts`, never trusted from the browser). Shipping
addresses are collected for the US and Armenia.

## Where things live

- `lib/products.ts` — the catalog: names, Armenian lines, prices (AMD + USD cents), colorways
  and which image each colorway shows. Edit this to add drops.
- `components/` — page sections (hero reels, marquee, story, shop, kids, cart drawer).
- `public/img`, `public/video` — compressed media pulled from the brand's Instagram.
- `app/api/checkout/route.ts` — creates the Stripe Checkout session.

## Deploy

Any Node host works; Vercel is the one-click option:

```bash
npx vercel
```

Set `STRIPE_SECRET_KEY` (and optionally `NEXT_PUBLIC_SITE_URL=https://yourdomain`) in the
host's environment settings.
