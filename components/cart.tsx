"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AMD, USD, PRODUCTS } from "@/lib/products";
import { asset } from "@/lib/asset";

export type CartLine = {
  productId: string;
  colorId: string;
  size: string;
  qty: number;
};

type CartCtx = {
  lines: CartLine[];
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<CartLine, "qty">) => void;
  setQty: (i: number, qty: number) => void;
  remove: (i: number) => void;
  toast: string | null;
};

const Ctx = createContext<CartCtx | null>(null);

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("qezpes-cart");
      if (saved) setLines(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("qezpes-cart", JSON.stringify(lines));
    } catch {}
  }, [lines]);

  const add = useCallback((line: Omit<CartLine, "qty">) => {
    setLines((prev) => {
      const i = prev.findIndex(
        (l) =>
          l.productId === line.productId &&
          l.colorId === line.colorId &&
          l.size === line.size
      );
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { ...line, qty: 1 }];
    });
    const p = PRODUCTS.find((p) => p.id === line.productId);
    setToast(`${p?.name ?? "Item"} is in your bag 🩷`);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const setQty = useCallback((i: number, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((_, idx) => idx !== i);
      const next = [...prev];
      next[i] = { ...next[i], qty };
      return next;
    });
  }, []);

  const remove = useCallback((i: number) => {
    setLines((prev) => prev.filter((_, idx) => idx !== i));
  }, []);

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);

  return (
    <Ctx.Provider value={{ lines, count, open, setOpen, add, setQty, remove, toast }}>
      {children}
    </Ctx.Provider>
  );
}

export function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, toast } = useCart();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const detailed = lines
    .map((l) => {
      const product = PRODUCTS.find((p) => p.id === l.productId);
      const color = product?.colorways.find((c) => c.id === l.colorId);
      return product && color ? { ...l, product, color } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const totalAmd = detailed.reduce((s, l) => s + l.product.priceAmd * l.qty, 0);
  const totalUsd = detailed.reduce((s, l) => s + l.product.priceUsd * l.qty, 0);

  // Card payments arrive with the Ameriabank vPOS integration; until then,
  // orders go through Instagram DM with the bag contents pre-copied.
  const orderViaDM = async () => {
    const summary = detailed
      .map((l) => `• ${l.product.name} — ${l.color.name} / ${l.size} × ${l.qty}`)
      .join("\n");
    const text = `Hi QezPes 🩷 I'd like to order:\n${summary}\nTotal: ${AMD(totalAmd)} (${USD(totalUsd)})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {}
    window.open("https://ig.me/m/qezpes", "_blank", "noopener");
  };

  return (
    <>
      <div
        className={`cart-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside className={`cart${open ? " open" : ""}`} aria-label="Shopping bag" aria-hidden={!open}>
        <div className="cart__head">
          <span className="cart__title">Your bag</span>
          <button className="cart__close" onClick={() => setOpen(false)} aria-label="Close bag">
            ✕
          </button>
        </div>

        <div className="cart__items">
          {detailed.length === 0 && (
            <p className="cart__empty">
              Your bag is empty — it deserves something soft.
              <br />
              Pick a color below. 🎀
            </p>
          )}
          {detailed.map((l, i) => (
            <div className="cart-item" key={`${l.productId}-${l.colorId}-${l.size}`}>
              <img src={asset(l.color.img)} alt={`${l.product.name} in ${l.color.name}`} />
              <div>
                <div className="cart-item__name">{l.product.name}</div>
                <div className="cart-item__meta">
                  {l.color.name} · {l.size}
                </div>
                <div className="qty">
                  <button onClick={() => setQty(i, l.qty - 1)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{l.qty}</span>
                  <button onClick={() => setQty(i, l.qty + 1)} aria-label="Increase quantity">
                    +
                  </button>
                </div>
              </div>
              <div>
                <div className="cart-item__price">{USD(l.product.priceUsd * l.qty)}</div>
                <button className="cart-item__remove" onClick={() => remove(i)}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart__foot">
          {copied && (
            <div className="cart__error" role="status">
              Your order summary is copied 💌 — paste it in the Instagram chat and we&rsquo;ll
              take it from there.
            </div>
          )}
          <div className="cart__total">
            <span>
              Total
              <small>{USD(totalUsd)} in the US</small>
            </span>
            <span>{AMD(totalAmd)}</span>
          </div>
          <button
            className="btn btn--primary cart__checkout"
            onClick={orderViaDM}
            disabled={detailed.length === 0}
          >
            Order via Instagram DM
          </button>
          <p className="cart__hint">
            Card payments are coming soon — for now we confirm every order personally on{" "}
            <a
              href="https://www.instagram.com/qezpes/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline" }}
            >
              @qezpes
            </a>{" "}
            🎀
          </p>
        </div>
      </aside>
      <div className={`toast${toast ? " show" : ""}`} role="status">
        {toast}
      </div>
    </>
  );
}
