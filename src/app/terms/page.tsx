import type { Metadata } from "next";

import PageIntro from "@/components/shared/PageIntro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    `Terms governing use of the ${siteConfig.name} website.`,
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <PageIntro
      eyebrow="Legal"
      title="Terms of Use"
      description="The terms governing use of this website will be published here before production launch."
    />
  );
}