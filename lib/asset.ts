// Prefixes media paths with the base path when the site is served from a
// subdirectory (e.g. GitHub Pages preview at /qezpes). Inlined at build time.
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p}`;

// True when built as a static preview (no server, so no Stripe checkout).
export const IS_STATIC = process.env.NEXT_PUBLIC_STATIC === "1";
