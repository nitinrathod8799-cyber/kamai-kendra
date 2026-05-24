export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kamai-kendra.vercel.app/sitemap.xml",
  };
}