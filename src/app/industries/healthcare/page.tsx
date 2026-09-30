import type { Metadata } from "next";

import IndustryDetail from "@/components/industries/detail/IndustryDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Healthcare Technology Consulting";

const pageDescription =
  "Technology consulting for healthcare organizations across digital product engineering, application modernization, cloud platforms, data engineering, AI enablement, and security engineering.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/industries/healthcare",
  },

  openGraph: {
    type: "website",
    url: "/industries/healthcare",
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

export default function HealthcarePage() {
  return (
    <IndustryDetail
      eyebrow="Healthcare"
      title="Technology built around"
      highlightedTitle="connected healthcare experiences."
      description="We help healthcare organizations modernize digital platforms, improve data foundations, strengthen engineering capabilities, and build technology that supports dependable and evolving healthcare workflows."
      accentText="text-emerald-500"
      accentBg="bg-emerald-600"
      accentSoftBg="bg-emerald-50"
      accentBorder="border-emerald-100"
      contextEyebrow="Industry Context"
      contextTitle="Healthcare technology connects people, systems, data, and critical workflows."
      contextDescription="Healthcare environments often include complex applications, fragmented data, operational dependencies, and changing digital expectations. Modernization works best when technology decisions consider how systems interact across the wider healthcare experience."
      contextItems={[
        {
          title: "Connected systems",
          description:
            "Improve how applications, platforms, services, and data work together across increasingly connected healthcare environments.",
        },
        {
          title: "Digital experiences",
          description:
            "Build clearer and more dependable digital experiences for patients, professionals, operational teams, and other users.",
        },
        {
          title: "Data foundations",
          description:
            "Create stronger data pipelines, platforms, integration patterns, and analytics foundations for operational and analytical use.",
        },
        {
          title: "Reliable delivery",
          description:
            "Strengthen engineering practices, automation, platforms, and observability so teams can evolve technology with greater confidence.",
        },
      ]}
      capabilityEyebrow="How We Help"
      capabilityTitle="Technology capabilities for evolving healthcare organizations."
      capabilityDescription="We combine software engineering, cloud, data, AI, platform engineering, and security capabilities to help healthcare organizations improve existing technology and build new digital capabilities."
      capabilities={[
        {
          title: "Digital Product Engineering",
          description:
            "Design and build applications and digital experiences around practical user needs, workflows, and operational requirements.",
        },
        {
          title: "Application Modernization",
          description:
            "Modernize existing applications and architectures while improving maintainability, integration, and long-term flexibility.",
        },
        {
          title: "Cloud & Platform Engineering",
          description:
            "Build cloud foundations, deployment platforms, automation, and operational capabilities for modern engineering teams.",
        },
        {
          title: "Data Engineering",
          description:
            "Develop pipelines, integration layers, data platforms, and analytics foundations that make information easier to use responsibly.",
        },
        {
          title: "AI Enablement",
          description:
            "Explore practical AI-assisted workflows and applications with appropriate data foundations, evaluation, and production controls.",
        },
        {
          title: "Security Engineering",
          description:
            "Integrate identity, application security, cloud security, architecture controls, and secure engineering practices into delivery.",
        },
      ]}
      focusTitle="Technology focus areas"
      focusAreas={[
        "Digital Applications",
        "Application Modernization",
        "Cloud Architecture",
        "Platform Engineering",
        "API Integration",
        "Data Engineering",
        "Analytics Platforms",
        "Generative AI",
        "Identity & Access",
        "DevSecOps",
        "Observability",
        "Reliability Engineering",
      ]}
      ctaEyebrow="Healthcare"
      ctaTitle="Build healthcare technology that can evolve with the work."
      ctaDescription="Whether you are modernizing an existing platform, improving data foundations, building a new digital experience, or strengthening engineering capabilities, we can help define and deliver the right technical approach."
    />
  );
}