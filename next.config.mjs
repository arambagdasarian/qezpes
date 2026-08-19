/** @type {import('next').NextConfig} */
const nextConfig = {
  // STATIC_EXPORT=1 builds a serverless preview (used for GitHub Pages);
  // the normal build keeps the Stripe API route.
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
