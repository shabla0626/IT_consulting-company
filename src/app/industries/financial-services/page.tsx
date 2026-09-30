import type { Metadata } from "next";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import IndustryDetail from "@/components/industries/detail/IndustryDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Financial Services Technology Consulting";

const pageDescription =
  "Technology consulting for financial services organizations across application modernization, cloud and platform engineering, data, AI, cybersecurity, and digital product development.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/industries/financial-services",
  },

  openGraph: {
    type: "website",
    url: "/industries/financial-services",
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

export default function FinancialServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Financial Services", href: "/industries/financial-services" },
        ]}
      />
      <IndustryDetail
      eyebrow="Financial Services"
      title="Modern technology for"
      highlightedTitle="complex financial environments."
      description="We help financial organizations modernize platforms, strengthen engineering foundations, improve data capabilities, and build technology designed for reliability, security, and change."
      accentText="text-blue-500"
      accentBg="bg-blue-600"
      accentSoftBg="bg-blue-50"
      accentBorder="border-blue-100"
      contextEyebrow="Industry Context"
      contextTitle="Technology in financial services has to balance change with control."
      contextDescription="Financial organizations often need to modernize critical systems while maintaining reliability, security, governance, and continuity. The challenge is rarely one isolated application—it is usually the interaction between platforms, data, processes, teams, and legacy technology."
      contextItems={[
        {
          title: "Legacy modernization",
          description:
            "Evolve aging applications and platforms without creating unnecessary disruption to critical business operations.",
        },
        {
          title: "Data complexity",
          description:
            "Improve how data is integrated, governed, accessed, and used across products, operations, analytics, and decision-making.",
        },
        {
          title: "Security by design",
          description:
            "Build security and access controls into architecture, engineering workflows, platforms, and applications from the beginning.",
        },
        {
          title: "Delivery at scale",
          description:
            "Create engineering practices and platform capabilities that help teams deliver changes more consistently and sustainably.",
        },
      ]}
      capabilityEyebrow="How We Help"
      capabilityTitle="Technology capabilities for modern financial organizations."
      capabilityDescription="We combine software engineering, cloud, data, AI, platform engineering, and cybersecurity capabilities to address technology challenges across the financial-services environment."
      capabilities={[
        {
          title: "Application Modernization",
          description:
            "Modernize existing applications, services, and architectures while improving maintainability and reducing unnecessary complexity.",
        },
        {
          title: "Digital Product Engineering",
          description:
            "Design and build digital experiences, internal platforms, and customer-facing products around real business and user needs.",
        },
        {
          title: "Cloud & Platform Engineering",
          description:
            "Create cloud foundations, deployment platforms, automation, and operational capabilities that support engineering teams.",
        },
        {
          title: "Data Platforms",
          description:
            "Build stronger data foundations for analytics, reporting, integration, machine learning, and operational use cases.",
        },
        {
          title: "AI Enablement",
          description:
            "Explore and implement practical AI use cases on top of trusted data, clear workflows, evaluation, and production controls.",
        },
        {
          title: "Security Engineering",
          description:
            "Integrate application security, identity, cloud security, DevSecOps, and architecture controls into technology delivery.",
        },
      ]}
      focusTitle="Technology focus areas"
      focusAreas={[
        "Application Modernization",
        "Cloud Architecture",
        "Platform Engineering",
        "API Engineering",
        "Data Engineering",
        "Analytics Platforms",
        "Generative AI",
        "Identity & Access",
        "DevSecOps",
        "Observability",
        "Reliability Engineering",
        "Security Architecture",
      ]}
      ctaEyebrow="Financial Services"
      ctaTitle="Modernize without losing sight of reliability."
      ctaDescription="If you are improving an existing platform, building a new digital product, modernizing data infrastructure, or strengthening engineering capabilities, we can start with the problem and design the right technical path forward."
      />
    </>
  );
}