import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Wordmark className="footer__mark" />
        <p className="footer__tag">Քեզ Պես · made in Armenia with (self) love</p>
        <nav className="footer__links" aria-label="Footer">
          <a href="https://www.instagram.com/qezpes/" target="_blank" rel="noreferrer">
            @qezpes
          </a>
          <a href="https://www.instagram.com/annabagy/" target="_blank" rel="noreferrer">
            by @annabagy
          </a>
          <a href="#shop">Shop</a>
          <a href="#story">Story</a>
        </nav>
        <div className="footer__fine">
          <span>© {new Date().getFullYear()} QezPes · Yerevan, Armenia</span>
          <span>Only you are like you.</span>
        </div>
      </div>
    </footer>
  );
}
