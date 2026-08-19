import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export const metadata = { title: "Thank you · QezPes" };

export default function Success() {
  return (
    <main className="success">
      <div>
        <Wordmark className="footer__mark" />
        <h1>Շնորհակալություն 🩷</h1>
        <p>
          Your order is in — it will be packed by hand, wrapped with a ribbon, and sent your way
          with a note. You&rsquo;ll get a receipt from Stripe by email.
        </p>
        <Link className="btn btn--primary" href="/#shop">
          Back to the shop
        </Link>
      </div>
    </main>
  );
}
