export default function Wordmark({ className = "" }: { className?: string }) {
  // The official qez·pes logotype, rendered via CSS mask so it can take any
  // color from `currentColor` (red in the nav, pink in the footer).
  return <span className={`logo-mask ${className}`} role="img" aria-label="qezpes" />;
}
