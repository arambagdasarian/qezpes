import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Shop from "@/components/Shop";
import Kids from "@/components/Kids";
import Values from "@/components/Values";
import Footer from "@/components/Footer";
import { CartProvider, CartDrawer } from "@/components/cart";

export default function Home() {
  return (
    <CartProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Shop />
        <Kids />
        <Values />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
