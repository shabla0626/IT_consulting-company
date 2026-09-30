import type { Metadata } from "next";

import PageIntro from "@/components/shared/PageIntro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    `Privacy information for the ${siteConfig.name} website.`,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <PageIntro
      eyebrow="Legal"
      title="Privacy Policy"
      description="Our complete privacy policy will be published here before the website goes into production."
    />
  );
}