import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/lib/products";

type Item = { productId: string; colorId: string; size: string; qty: number };

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      {
        error:
          "Payments aren't set up yet: add STRIPE_SECRET_KEY to .env.local and restart. Until then, orders work via Instagram DM @qezpes.",
      },
      { status: 503 }
    );
  }

  let items: Item[];
  try {
    const body = await req.json();
    items = body.items;
    if (!Array.isArray(items) || items.length === 0) throw new Error();
  } catch {
    return NextResponse.json({ error: "Your bag looks empty." }, { status: 400 });
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL || req.headers.get("origin") || "http://localhost:3000";

  // Prices always come from the server-side catalog, never from the client.
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of items) {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    const color = product?.colorways.find((c) => c.id === item.colorId);
    const qty = Math.min(Math.max(1, Math.floor(item.qty)), 20);
    if (!product || !color || !product.sizes.includes(item.size)) {
      return NextResponse.json({ error: "One of the items is no longer available." }, { status: 400 });
    }
    line_items.push({
      quantity: qty,
      price_data: {
        currency: "usd",
        unit_amount: product.priceUsd,
        product_data: {
          name: `${product.name} — ${color.name} / ${item.size}`,
          description: product.hy,
          images: [`${origin}${color.img}`],
        },
      },
    });
  }

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#shop`,
      shipping_address_collection: { allowed_countries: ["US", "AM"] },
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Stripe rejected the request.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
