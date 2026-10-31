import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const base = siteUrl.replace(/\/$/, "");
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/projects/connect-pros`, lastModified: new Date() },
  ];
}
