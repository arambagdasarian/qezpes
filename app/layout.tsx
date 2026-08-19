import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Noto_Serif_Armenian, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const serifArmenian = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["500", "700", "900"],
  variable: "--font-display-hy",
});

const sansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  variable: "--font-body-hy",
});

export const metadata: Metadata = {
  title: "QezPes · Քեզ Պես — made in Armenia with self-love",
  description:
    "Oversized embroidered tees and hoodies from Yerevan that remind you: you are enough. Ships in Armenia and to the US.",
  openGraph: {
    title: "QezPes · Քեզ Պես",
    description: "Made in Armenia with self-love. There's only one like you.",
    images: ["/img/tee-blush-1.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${instrument.variable} ${serifArmenian.variable} ${sansArmenian.variable}`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
