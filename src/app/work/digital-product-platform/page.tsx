import type { Metadata } from "next";

import CaseStudyDetail from "@/components/work/detail/CaseStudyDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Digital Product Platform Engineering";

const pageDescription =
  "A representative technology consulting engagement exploring digital product engineering, software architecture, APIs, cloud foundations, quality engineering, observability, and platform delivery.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical:
      "/work/digital-product-platform",
  },

  robots: {
    index: false,
    follow: true,

    googleBot: {
      index: false,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "/work/digital-product-platform",
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

export default function DigitalProductPlatformPage() {
  return (
    <CaseStudyDetail
      eyebrow="Representative Engagement · Digital Product"
      title="Building a digital product around"
      highlightedTitle="evolving business and user needs."
      description="An illustrative consulting engagement showing how product thinking, software architecture, API engineering, cloud foundations, quality practices, and delivery capabilities can come together to create a maintainable digital platform."
      accentText="text-emerald-400"
      accentBg="bg-emerald-600"
      accentSoftBg="bg-emerald-50"
      accentBorder="border-emerald-100"

      engagementType="Representative digital product engagement"
      industry="Cross-industry example"
      duration="Illustrative scope"
      team="Product, software, cloud, quality, and platform specialists"

      challengeTitle="A growing digital product constrained by the technology behind it."
      challengeDescription="The representative organization had an established digital product, but increasing feature demand, integration complexity, architectural friction, and inconsistent delivery practices were making continued product evolution harder."
      challengeItems={[
        {
          title: "Growing product complexity",
          description:
            "New capabilities had accumulated across the application without clear boundaries, increasing coupling and making changes more difficult to reason about.",
        },
        {
          title: "Integration pressure",
          description:
            "The product depended on multiple internal and external systems, but integration patterns were inconsistent and increasingly difficult to maintain.",
        },
        {
          title: "Delivery friction",
          description:
            "Testing, deployment, environment management, and release activities were slowing development and making changes harder to deliver confidently.",
        },
        {
          title: "Operational blind spots",
          description:
            "Limited observability made it difficult to understand performance, failures, user-impacting issues, and service behavior in production.",
        },
      ]}

      assessmentTitle="The product problem extended beyond the user interface."
      assessmentDescription="Improving the digital experience required examining the complete system behind it: product workflows, application architecture, APIs, integrations, cloud infrastructure, delivery practices, quality engineering, observability, and ownership."
      assessmentItems={[
        {
          title: "Product & user flows",
          description:
            "Understand the critical journeys, business workflows, user needs, and product constraints driving technology decisions.",
        },
        {
          title: "Application architecture",
          description:
            "Assess frontend, backend, APIs, services, dependencies, integrations, data flows, and areas where architectural friction affects product delivery.",
        },
        {
          title: "Engineering system",
          description:
            "Review testing, CI/CD, environments, observability, release practices, developer experience, and operational responsibilities.",
        },
      ]}

      approachTitle="Evolve the product and its engineering foundations together."
      approachDescription="The representative approach avoids separating product delivery from technical modernization. Customer-facing improvements and engineering foundations progress together so architecture work remains connected to real product needs."
      approachItems={[
        {
          title: "Clarify product priorities",
          description:
            "Identify the user journeys, business capabilities, operational workflows, and technical constraints that should drive the next stage of the product.",
        },
        {
          title: "Define architectural boundaries",
          description:
            "Restructure application and service responsibilities where necessary so capabilities can evolve with less unnecessary coupling.",
        },
        {
          title: "Strengthen API architecture",
          description:
            "Create clearer contracts and integration patterns between frontend applications, backend services, external systems, and platform capabilities.",
        },
        {
          title: "Modernize engineering workflows",
          description:
            "Improve testing, CI/CD, environments, deployment automation, and development practices to make delivery more repeatable.",
        },
        {
          title: "Improve operational visibility",
          description:
            "Introduce logs, metrics, traces, dashboards, and application monitoring to make product behavior easier to understand in production.",
        },
        {
          title: "Enable continued ownership",
          description:
            "Document architecture, establish engineering conventions, improve developer experience, and transfer knowledge to the teams responsible for future evolution.",
        },
      ]}

      architectureTitle="A product architecture with clearer boundaries and reusable platform capabilities."
      architectureDescription="The illustrative architecture separates user experience, application services, integrations, platform concerns, and operations so product teams can evolve features without every change becoming a system-wide dependency."
      architectureItems={[
        {
          title: "Experience layer",
          description:
            "Web and mobile interfaces organize user journeys around reusable components, clear application state, accessibility, and responsive interaction patterns.",
        },
        {
          title: "Application services",
          description:
            "Backend capabilities are organized around explicit business responsibilities rather than tightly coupled application logic.",
        },
        {
          title: "API layer",
          description:
            "Defined APIs provide stable contracts between experiences, services, integrations, and external consumers.",
        },
        {
          title: "Integration layer",
          description:
            "External systems and enterprise platforms connect through explicit integration patterns with clearer error handling and ownership.",
        },
        {
          title: "Cloud & platform foundation",
          description:
            "Infrastructure, deployment, configuration, secrets, environments, and shared operational capabilities are managed consistently.",
        },
        {
          title: "Observability & quality",
          description:
            "Testing, monitoring, metrics, tracing, error reporting, and operational feedback are integrated into the engineering lifecycle.",
        },
      ]}

      technologyTitle="Representative technology areas"
      technologies={[
        "Product Engineering",
        "React / Next.js",
        "TypeScript",
        "API Engineering",
        "Backend Services",
        "Cloud-Native Applications",
        "Containers",
        "CI/CD",
        "Automated Testing",
        "Quality Engineering",
        "Observability",
        "Platform Engineering",
        "Developer Experience",
        "Application Security",
      ]}

      deliveryTitle="Deliver product value while strengthening the system underneath it."
      deliveryDescription="The representative delivery model combines product increments with targeted technical improvements so modernization remains tied to actual business and user priorities."
      deliveryItems={[
        {
          title: "Product-led increments",
          description:
            "Delivery is organized around useful product capabilities rather than large technical phases that remain disconnected from users.",
        },
        {
          title: "Architecture through evolution",
          description:
            "Technical boundaries and platform capabilities improve incrementally as product work reveals where change creates the most value.",
        },
        {
          title: "Integrated quality",
          description:
            "Testing, automation, observability, security, and operational readiness are part of normal delivery instead of separate activities at the end.",
        },
      ]}

      decisionsTitle="Good product architecture balances flexibility with simplicity."
      decisionsDescription="A digital platform can become harder to evolve when architecture is either too rigid or unnecessarily sophisticated. The representative engagement focuses on selecting patterns that match the actual scale, team structure, and product needs."
      decisions={[
        {
          title: "Avoid premature distribution",
          description:
            "Services are separated when ownership, scaling, deployment, domain boundaries, or technical constraints justify it—not simply because microservices are fashionable.",
        },
        {
          title: "Keep APIs intentional",
          description:
            "Interfaces are designed around stable responsibilities and consumer needs rather than exposing internal implementation details.",
        },
        {
          title: "Modernize where friction exists",
          description:
            "Existing technology can remain when it works well. Modernization focuses on parts of the system that meaningfully constrain product delivery or maintainability.",
        },
        {
          title: "Optimize developer experience deliberately",
          description:
            "Local development, testing, deployment, documentation, and platform workflows are treated as part of product delivery because engineering friction affects product velocity.",
        },
      ]}

      outcomesTitle="What a successful digital product engagement should enable."
      outcomesDescription="Because this is a representative engagement rather than a verified client case study, these describe intended qualitative outcomes rather than published client performance claims."
      outcomes={[
        {
          value: "Illustrative",
          label:
            "A product architecture that is easier to understand, maintain, and evolve.",
        },
        {
          value: "Illustrative",
          label:
            "More repeatable engineering, testing, deployment, and release workflows.",
        },
        {
          value: "Illustrative",
          label:
            "Clearer API and integration boundaries across the product ecosystem.",
        },
        {
          value: "Illustrative",
          label:
            "Stronger operational visibility and long-term engineering ownership.",
        },
      ]}

      enabledTitle="A stronger foundation for continued product evolution."
      enabledDescription="The objective is not simply to complete the current roadmap. The product and its engineering foundations should support future capabilities, integrations, teams, and changing user expectations."
      enabledItems={[
        {
          title: "Faster product learning",
          description:
            "Clearer delivery paths and modular responsibilities make it easier for teams to introduce, evaluate, and refine new product capabilities.",
        },
        {
          title: "Sustainable engineering",
          description:
            "Improved architecture, testing, platform foundations, and observability reduce the amount of repeated technical friction around future work.",
        },
        {
          title: "Internal ownership",
          description:
            "Architecture knowledge, documentation, engineering standards, operational visibility, and collaborative delivery help internal teams continue evolving the platform.",
        },
      ]}

      relatedSolutions={[
        {
          title: "Software Engineering",
          href: "/solutions/software-engineering",
        },
        {
          title: "Cloud & DevOps",
          href: "/solutions/cloud-devops",
        },
        {
          title: "AI & Data",
          href: "/solutions/ai-data",
        },
        {
          title: "Cybersecurity",
          href: "/solutions/cybersecurity",
        },
      ]}

      relatedIndustry={{
        title: "Explore Industries",
        href: "/industries",
      }}

      ctaEyebrow="Digital Product Engineering"
      ctaTitle="Build the product and the engineering foundation behind it."
      ctaDescription="If your digital product is becoming harder to evolve, integrations are increasing, architecture is creating friction, or engineering delivery needs stronger foundations, we can help assess the current system and define a practical path forward."
    />
  );
}