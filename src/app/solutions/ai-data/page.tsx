import type { Metadata } from "next";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import SolutionDetail from "@/components/solutions/detail/SolutionDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "AI & Data Consulting";

const pageDescription =
  "AI, machine learning, data engineering, analytics, and intelligent application consulting for modern production environments.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/solutions/ai-data",
  },

  openGraph: {
    type: "website",
    url: "/solutions/ai-data",
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

export default function AIDataPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "AI & Data", href: "/solutions/ai-data" },
        ]}
      />
      <SolutionDetail
      eyebrow="AI & Data"
      title="Turn information into"
      highlightedTitle="useful intelligence."
      description="We help organizations build reliable data foundations, intelligent applications, analytics platforms, and AI systems designed for real production environments."
      accentText="text-violet-500"
      accentBg="bg-violet-600"
      accentSoftBg="bg-violet-200/60"
      accentDot="bg-violet-500"
      capabilityEyebrow="What We Build"
      capabilityTitle="From data foundations to intelligent products."
      capabilityDescription="AI is most useful when strong data engineering, product design, software engineering, and operations work together."
      capabilities={[
        {
          title: "Generative AI Applications",
          description:
            "Build AI-powered products, copilots, assistants, search experiences, and workflow automation around real user needs.",
        },
        {
          title: "Data Engineering",
          description:
            "Create dependable pipelines, transformation systems, data models, and platforms for operational and analytical workloads.",
        },
        {
          title: "Machine Learning",
          description:
            "Develop and operationalize predictive models and machine learning capabilities with measurable objectives.",
        },
        {
          title: "Analytics Platforms",
          description:
            "Turn trusted data into useful dashboards, reporting, metrics, and decision-support capabilities.",
        },
        {
          title: "AI Integration",
          description:
            "Connect models and AI services to existing products, workflows, enterprise systems, and APIs.",
        },
        {
          title: "AI Operations",
          description:
            "Improve evaluation, observability, security, governance, reliability, and lifecycle management for AI systems.",
        },
      ]}
      approachEyebrow="AI Approach"
      approachTitle="Useful AI requires more than a model."
      approachDescription="We treat AI as a complete product and engineering discipline, not an isolated experiment."
      approach={[
        {
          title: "Start with the use case",
          description:
            "Define the user problem, expected value, risk, and measurable outcome before selecting models or tools.",
        },
        {
          title: "Build on trusted data",
          description:
            "Reliable AI depends on data quality, ownership, lineage, access, and well-designed information architecture.",
        },
        {
          title: "Evaluate continuously",
          description:
            "Model and application quality should be measured with repeatable evaluation rather than intuition alone.",
        },
        {
          title: "Design for production",
          description:
            "Security, monitoring, cost, latency, fallbacks, governance, and operational ownership are considered from the beginning.",
        },
      ]}
      technologyTitle="Engineering for modern data and AI."
      technologyAreas={[
        "Generative AI",
        "LLM Applications",
        "Machine Learning",
        "Data Engineering",
        "Vector Search",
        "Analytics",
        "MLOps",
        "AI Observability",
      ]}
      ctaEyebrow="Build With AI"
      ctaTitle="Have an AI or data opportunity worth exploring?"
      ctaDescription="Tell us where AI, data, or automation could improve your product or operation, and we can help shape the technical path."
      />
    </>
  );
}