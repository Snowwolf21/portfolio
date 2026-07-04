import type { MetadataRoute } from "next";

const routes = ["", "/inventory", "/orders", "/analytics", "/settings"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-06-24"),
  }));
}
