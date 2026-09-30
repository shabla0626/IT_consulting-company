import type { MetadataRoute } from "next";

import { openJobs } from "@/data/jobs";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/solutions/ai-data",
    "/solutions/cloud-devops",
    "/solutions/cybersecurity",
    "/solutions/software-engineering",
    "/industries",
    "/industries/financial-services",
    "/industries/healthcare",
    "/industries/manufacturing",
    "/industries/retail-commerce",
    "/industries/technology-startups",
    "/work",
    "/insights",
    "/company",
    "/careers",
    "/careers/jobs",
    "/contact",
  ];

  const jobRoutes = openJobs.map(
    (job) => `/careers/jobs/${job.slug}`,
  );

  return [...routes, ...jobRoutes].map(
    (route) => ({
      url: absoluteUrl(route),
    }),
  );
}