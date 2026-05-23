import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://janflorenz.com";
  const routes = ["", "/projects", "/about", "/skills", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  return routes;
}
