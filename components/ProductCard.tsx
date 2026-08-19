"use client";

import { useState } from "react";
import { AMD, USD, type Product } from "@/lib/products";
import { asset } from "@/lib/asset";
import { useCart } from "./cart";

export default function ProductCard({ product }: { product: Product }) {
  const [colorId, setColorId] = useState(product.colorways[0].id);
  const [size, setSize] = useState(product.sizes[0]);
  const { add, setOpen } = useCart();

  const color = product.colorways.find((c) => c.id === colorId)!;

  const addToBag = () => {
    add({ productId: product.id, colorId, size });
    setOpen(true);
  };

  return (
    <article className="card">
      <div className="card__media">
        {product.badge && <span className="card__badge">{product.badge}</span>}
        {product.colorways.map((c) => (
          <img
            key={c.id}
            src={asset(c.img)}
            alt={`${product.name} in ${c.name}`}
            className={c.id === colorId ? "active" : undefined}
            loading="lazy"
          />
        ))}
      </div>
      <div className="card__body">
        <div>
          <h3 className="card__name">{product.name}</h3>
          <div className="card__hy">{product.hy}</div>
        </div>
        <p className="card__blurb">{product.blurb}</p>

        {product.colorways.length > 1 ? (
          <div className="card__row">
            <div className="swatches" role="group" aria-label={`${product.name} colors`}>
              {product.colorways.map((c) => (
                <button
                  key={c.id}
                  className={`swatch${c.id === colorId ? " selected" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => setColorId(c.id)}
                  aria-label={c.name}
                  aria-pressed={c.id === colorId}
                  title={c.name}
                />
              ))}
            </div>
            <span className="swatch__name">{color.name}</span>
          </div>
        ) : (
          <div className="card__row">
            <span className="swatch__name" style={{ textAlign: "left" }}>
              One color: {color.name}
            </span>
          </div>
        )}

        <div className="sizes" role="group" aria-label={`${product.name} sizes`}>
          {product.sizes.map((s) => (
            <button
              key={s}
              className={`size${s === size ? " selected" : ""}`}
              onClick={() => setSize(s)}
              aria-pressed={s === size}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="card__foot">
          <div className="price">
            <span className="price__amd">{AMD(product.priceAmd)}</span>
            <span className="price__usd">{USD(product.priceUsd)} in the US</span>
          </div>
          <button className="add" onClick={addToBag}>
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}
