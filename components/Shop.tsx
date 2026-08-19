import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function Shop() {
  return (
    <section className="section" id="shop">
      <div className="wrap">
        <Reveal className="section__head" as="div">
          <div>
            <span className="section__kicker">Խանութ · the shop</span>
            <h2 className="section__title">
              Pick your color, <span className="hy">քո գույնը</span>
            </h2>
          </div>
          <p className="section__note">
            Every piece is oversized, unisex and embroidered — not printed. Free shipping across
            Armenia; US orders ship from Los Angeles.
          </p>
        </Reveal>
        <div className="shop__grid">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i % 4, 3) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
