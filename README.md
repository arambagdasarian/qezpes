# QezPes · Քեզ Պես — brand site & shop

A dynamic site for [@qezpes](https://www.instagram.com/qezpes/): hero reels from the brand's
Instagram, the brand story, and a shop with color/size selection (card payments via Ameriabank vPOS coming soon; orders currently via Instagram DM).

Built with Next.js (App Router) + TypeScript. All photos and videos in `public/` are QezPes's
own Instagram media.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Payments

Card payments via **Ameriabank vPOS** are pending the bank's approval of the acquiring
agreement. Until then, the cart's "Order via Instagram DM" button copies the order summary
to the clipboard and opens the [@qezpes](https://www.instagram.com/qezpes/) chat.

(The earlier Stripe integration was removed on 2026-08-21 — it lives in git history if ever
needed again.)

## Where things live

- `lib/products.ts` — the catalog: names, Armenian lines, prices (AMD + USD cents), colorways
  and which image each colorway shows. Edit this to add drops.
- `components/` — page sections (hero reels, marquee, story, shop, kids, cart drawer).
- `public/img`, `public/video` — compressed media pulled from the brand's Instagram, plus the
  official logo assets (`logo.png`, `logo-stacked.png`).

## Deploy

Production runs on Vercel at [qezpes.com](https://qezpes.com). Deploy with:

```bash
npx vercel deploy --prod
```
