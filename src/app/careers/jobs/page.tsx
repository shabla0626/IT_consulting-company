import type { Metadata } from "next";

import JobsExplorer from "@/components/careers/jobs/JobsExplorer";
import JobsHero from "@/components/careers/jobs/JobsHero";

import { jobs } from "@/data/jobs";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Consulting Jobs & Open Roles";

const pageDescription =
  "Explore open roles across software engineering, AI and data, cloud and DevOps, cybersecurity, and other technology consulting disciplines.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/careers/jobs",
  },

  openGraph: {
    type: "website",
    url: "/careers/jobs",
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function JobsPage() {
  return (
    <main>
      <JobsHero />
      <JobsExplorer jobs={jobs} />
    </main>
  );
}