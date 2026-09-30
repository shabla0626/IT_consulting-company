import type { Metadata } from "next";

import ContactAlternatives from "@/components/contact/ContactAlternatives";
import ContactAreas from "@/components/contact/ContactAreas";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactNextSteps from "@/components/contact/ContactNextSteps";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Contact Our Technology Consulting Team";

const pageDescription =
  "Talk with our technology consulting team about software engineering, AI and data, cloud and DevOps, cybersecurity, modernization, or other technology challenges.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "/contact",
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

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactAreas />
      <ContactForm />
      <ContactNextSteps />
      <ContactAlternatives />
    </main>
  );
}