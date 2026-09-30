import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/industries",
    "/work",
    "/insights",
    "/company",
    "/careers",
    "/careers/jobs",
    "/contact",
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
  }));
}