import type { Metadata } from "next";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import IndustryDetail from "@/components/industries/detail/IndustryDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology & Startups Consulting";

const pageDescription =
  "Technology consulting for startups and technology companies across product engineering, architecture modernization, cloud platforms, data and AI, engineering enablement, and security.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/industries/technology-startups",
  },

  openGraph: {
    type: "website",
    url: "/industries/technology-startups",
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

export default function TechnologyStartupsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Technology & Startups", href: "/industries/technology-startups" },
        ]}
      />
      <IndustryDetail
      eyebrow="Technology & Startups"
      title="Build technology that"
      highlightedTitle="can grow with the business."
      description="We help technology companies and startups design products, modernize platforms, strengthen engineering foundations, improve cloud and data capabilities, and scale delivery as teams and systems evolve."
      accentText="text-sky-500"
      accentBg="bg-sky-600"
      accentSoftBg="bg-sky-50"
      accentBorder="border-sky-100"
      contextEyebrow="Industry Context"
      contextTitle="Technology companies need systems that can evolve as quickly as the business."
      contextDescription="Growth often brings new customers, larger teams, changing product requirements, more operational complexity, and greater pressure on existing systems. The challenge is scaling technology without allowing architecture, delivery practices, or infrastructure to become barriers."
      contextItems={[
        {
          title: "Product evolution",
          description:
            "Design products and platforms that can adapt as customer needs, business models, and market requirements change.",
        },
        {
          title: "Scaling architecture",
          description:
            "Evolve applications and services as usage, data volumes, integrations, and operational demands increase.",
        },
        {
          title: "Engineering velocity",
          description:
            "Strengthen platforms, automation, testing, observability, and delivery workflows so teams can ship changes more consistently.",
        },
        {
          title: "Growing complexity",
          description:
            "Reduce unnecessary technical complexity as products, teams, infrastructure, and organizational responsibilities expand.",
        },
      ]}
      capabilityEyebrow="How We Help"
      capabilityTitle="Engineering capabilities for ambitious technology organizations."
      capabilityDescription="We combine product engineering, cloud, data, AI, platform engineering, architecture, and security capabilities to help technology companies build stronger foundations and evolve existing systems."
      capabilities={[
        {
          title: "Product Engineering",
          description:
            "Design and build web applications, platforms, APIs, and digital products around real customer and business requirements.",
        },
        {
          title: "Architecture & Modernization",
          description:
            "Evolve existing systems and architectures while improving maintainability, scalability, and long-term flexibility.",
        },
        {
          title: "Cloud & Platform Engineering",
          description:
            "Create cloud foundations, developer platforms, deployment automation, and infrastructure that support growing engineering teams.",
        },
        {
          title: "Data & AI",
          description:
            "Build data pipelines, analytics foundations, machine-learning capabilities, and AI-enabled products on dependable technical foundations.",
        },
        {
          title: "Engineering Enablement",
          description:
            "Improve CI/CD, testing, observability, developer experience, operational practices, and engineering workflows.",
        },
        {
          title: "Security Engineering",
          description:
            "Integrate application security, identity, cloud security, DevSecOps, and architecture controls as products and organizations scale.",
        },
      ]}
      focusTitle="Technology focus areas"
      focusAreas={[
        "Product Engineering",
        "Web Applications",
        "API Engineering",
        "Cloud Architecture",
        "Platform Engineering",
        "Kubernetes",
        "CI/CD",
        "Data Engineering",
        "Generative AI",
        "Machine Learning",
        "Developer Experience",
        "Observability",
      ]}
      ctaEyebrow="Technology & Startups"
      ctaTitle="Build the technical foundation for what comes next."
      ctaDescription="Whether you are launching a new product, scaling an existing platform, modernizing architecture, improving engineering delivery, or strengthening cloud and data foundations, we can help design and build the next stage."
      />
    </>
  );
}