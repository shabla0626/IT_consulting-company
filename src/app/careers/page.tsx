import type { Metadata } from "next";

import Benefits from "@/components/careers/Benefits";
import CareersCTA from "@/components/careers/CareersCTA";
import CareersHero from "@/components/careers/CareersHero";
import Culture from "@/components/careers/Culture";
import FeaturedRoles from "@/components/careers/FeaturedRoles";
import GrowthDevelopment from "@/components/careers/GrowthDevelopment";
import HiringProcess from "@/components/careers/HiringProcess";
import Teams from "@/components/careers/Teams";
import WhyJoinUs from "@/components/careers/WhyJoinUs";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Consulting Careers";

const pageDescription =
  "Explore careers in technology consulting across software engineering, AI and data, cloud and DevOps, cybersecurity, and multidisciplinary technology teams.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/careers",
  },

  openGraph: {
    type: "website",
    url: "/careers",
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

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinUs />
      <Teams />
      <Culture />
      <Benefits />
      <GrowthDevelopment />
      <HiringProcess />
      <FeaturedRoles />
      <CareersCTA />
    </main>
  );
}