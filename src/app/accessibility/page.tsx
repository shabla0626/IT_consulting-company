import type { Metadata } from "next";

import PageIntro from "@/components/shared/PageIntro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    `Accessibility information for the ${siteConfig.name} website.`,
  alternates: {
    canonical: "/accessibility",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <PageIntro
      eyebrow="Accessibility"
      title="Building an accessible digital experience."
      description="Our accessibility statement and information about our approach to inclusive digital experiences will be published here."
    />
  );
}