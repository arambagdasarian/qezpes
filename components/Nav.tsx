"use client";

import Wordmark from "./Wordmark";
import { useCart } from "./cart";

export default function Nav() {
  const { count, setOpen } = useCart();
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a href="#top" aria-label="QezPes home">
          <Wordmark className="nav__brand" />
        </a>
        <nav className="nav__links" aria-label="Main">
          <a href="#story">Story</a>
          <a href="#shop">Shop</a>
          <a href="#kids">Kids</a>
          <a href="https://www.instagram.com/qezpes/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
        <button className="nav__cart" onClick={() => setOpen(true)}>
          Bag <span className="count">{count}</span>
        </button>
      </div>
    </header>
  );
}
