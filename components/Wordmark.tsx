export default function Wordmark({ className = "" }: { className?: string }) {
  // Homage to the embroidered qez·pes logotype with its mirrored letters
  return (
    <span className={`wordmark ${className}`} aria-label="qezpes">
      <span aria-hidden="true">
        q<span className="flip">e</span>z<span className="heart">♥</span>p
        <span className="flip">e</span>s
      </span>
    </span>
  );
}
