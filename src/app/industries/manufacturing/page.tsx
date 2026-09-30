import type { Metadata } from "next";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import IndustryDetail from "@/components/industries/detail/IndustryDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Manufacturing Technology Consulting";

const pageDescription =
  "Technology consulting for manufacturing organizations across application modernization, systems integration, cloud and platform engineering, data, AI enablement, and security engineering.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/industries/manufacturing",
  },

  openGraph: {
    type: "website",
    url: "/industries/manufacturing",
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

export default function ManufacturingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Manufacturing", href: "/industries/manufacturing" },
        ]}
      />
      <IndustryDetail
      eyebrow="Manufacturing"
      title="Connect technology with"
      highlightedTitle="modern industrial operations."
      description="We help manufacturing organizations modernize applications, connect systems and data, strengthen cloud and platform foundations, and build technology that supports more adaptable operations."
      accentText="text-amber-500"
      accentBg="bg-amber-600"
      accentSoftBg="bg-amber-50"
      accentBorder="border-amber-100"
      contextEyebrow="Industry Context"
      contextTitle="Manufacturing technology spans systems, data, operations, and engineering."
      contextDescription="Modern manufacturing environments often combine long-lived operational systems with newer cloud, data, and digital platforms. The challenge is connecting and evolving these technologies without creating unnecessary complexity or disruption."
      contextItems={[
        {
          title: "Connected operations",
          description:
            "Improve how operational applications, enterprise platforms, services, devices, and data work together across the wider technology environment.",
        },
        {
          title: "Legacy modernization",
          description:
            "Modernize aging applications and architectures while protecting critical workflows and maintaining operational continuity.",
        },
        {
          title: "Industrial data",
          description:
            "Build stronger data pipelines and platforms that make operational information easier to integrate, analyze, and use.",
        },
        {
          title: "Engineering enablement",
          description:
            "Strengthen cloud platforms, automation, observability, and delivery practices so technology teams can evolve systems more consistently.",
        },
      ]}
      capabilityEyebrow="How We Help"
      capabilityTitle="Technology capabilities for modern manufacturing environments."
      capabilityDescription="We combine software engineering, cloud, data, AI, integration, platform engineering, and cybersecurity capabilities to improve the systems supporting industrial and business operations."
      capabilities={[
        {
          title: "Application Modernization",
          description:
            "Modernize operational and business applications while improving maintainability, integration, and long-term flexibility.",
        },
        {
          title: "Systems Integration",
          description:
            "Connect applications, services, enterprise platforms, data sources, and operational systems through dependable integration patterns.",
        },
        {
          title: "Cloud & Platform Engineering",
          description:
            "Build cloud foundations, deployment platforms, automation, and operational capabilities that support modern engineering teams.",
        },
        {
          title: "Data Engineering",
          description:
            "Develop pipelines, integration layers, and data platforms for operational analytics, reporting, and broader data use cases.",
        },
        {
          title: "AI Enablement",
          description:
            "Explore practical AI-assisted workflows and applications built on reliable data foundations, clear evaluation, and production controls.",
        },
        {
          title: "Security Engineering",
          description:
            "Integrate identity, application security, cloud security, architecture controls, and secure engineering practices into technology delivery.",
        },
      ]}
      focusTitle="Technology focus areas"
      focusAreas={[
        "Application Modernization",
        "Systems Integration",
        "API Engineering",
        "Cloud Architecture",
        "Platform Engineering",
        "Data Engineering",
        "Operational Analytics",
        "Generative AI",
        "Automation",
        "DevSecOps",
        "Observability",
        "Reliability Engineering",
      ]}
      ctaEyebrow="Manufacturing"
      ctaTitle="Build a stronger digital foundation for industrial operations."
      ctaDescription="Whether you are modernizing applications, connecting fragmented systems, improving data foundations, or strengthening engineering capabilities, we can help define and deliver the right technical approach."
      />
    </>
  );
}