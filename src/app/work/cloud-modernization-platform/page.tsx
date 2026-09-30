import type { Metadata } from "next";

import CaseStudyDetail from "@/components/work/detail/CaseStudyDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Cloud Modernization & Platform Engineering";

const pageDescription =
  "A representative technology consulting engagement exploring application modernization, cloud architecture, platform engineering, CI/CD, observability, reliability, automation, and operational ownership.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical:
      "/work/cloud-modernization-platform",
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
    url: "/work/cloud-modernization-platform",
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

export default function CloudModernizationPlatformPage() {
  return (
    <CaseStudyDetail
      eyebrow="Representative Engagement · Cloud Modernization"
      title="Modernizing a platform for"
      highlightedTitle="reliability, delivery, and scale."
      description="An illustrative consulting engagement showing how application modernization, cloud architecture, platform engineering, automation, and operational practices can be addressed as one connected transformation."
      accentText="text-sky-400"
      accentBg="bg-sky-600"
      accentSoftBg="bg-sky-50"
      accentBorder="border-sky-100"

      engagementType="Representative modernization engagement"
      industry="Cross-industry example"
      duration="Illustrative scope"
      team="Multidisciplinary consulting team"

      challengeTitle="A platform that had become increasingly difficult to change."
      challengeDescription="The representative environment had grown over time through new features, integrations, infrastructure decisions, and operational workarounds. Delivery was becoming harder because application architecture, infrastructure, deployment processes, and operational practices were tightly connected but evolving separately."
      challengeItems={[
        {
          title: "Aging application architecture",
          description:
            "Core services had accumulated dependencies and technical constraints that made seemingly small changes increasingly difficult to deliver safely.",
        },
        {
          title: "Manual delivery processes",
          description:
            "Build, deployment, configuration, and release activities relied on inconsistent manual steps that increased operational effort and delivery risk.",
        },
        {
          title: "Infrastructure inconsistency",
          description:
            "Environments were not managed through a consistent platform approach, making configuration, scaling, and operational support more difficult.",
        },
        {
          title: "Limited operational visibility",
          description:
            "Teams lacked a clear, unified view of application behavior, infrastructure health, service dependencies, and failures in production.",
        },
      ]}

      assessmentTitle="The issue was broader than a cloud migration."
      assessmentDescription="Moving workloads to cloud infrastructure alone would not have addressed the underlying engineering and operational constraints. The assessment therefore treated application architecture, infrastructure, deployment practices, observability, reliability, and team ownership as parts of the same modernization problem."
      assessmentItems={[
        {
          title: "Application architecture",
          description:
            "Identify service boundaries, dependencies, legacy constraints, and modernization candidates before deciding what should move, change, or remain.",
        },
        {
          title: "Engineering workflow",
          description:
            "Understand how code moves from development through testing and deployment, and where manual processes or unclear ownership create friction.",
        },
        {
          title: "Operational model",
          description:
            "Review observability, reliability practices, incident response, infrastructure ownership, and the ability of teams to operate what they build.",
        },
      ]}

      approachTitle="Modernize the platform in controlled, incremental stages."
      approachDescription="Instead of treating modernization as a single migration event, the representative approach separates the work into manageable technical streams that can improve the platform while reducing unnecessary disruption."
      approachItems={[
        {
          title: "Map the current platform",
          description:
            "Document application dependencies, infrastructure, integration points, deployment paths, operational risks, and modernization constraints.",
        },
        {
          title: "Define the target architecture",
          description:
            "Establish clearer application and service boundaries, cloud architecture principles, deployment patterns, and platform responsibilities.",
        },
        {
          title: "Create cloud foundations",
          description:
            "Introduce repeatable infrastructure, environment standards, networking, access controls, and deployment foundations through automation.",
        },
        {
          title: "Modernize delivery",
          description:
            "Improve build, test, deployment, and release workflows so software changes can move through environments more consistently.",
        },
        {
          title: "Strengthen observability",
          description:
            "Add structured logging, metrics, tracing, dashboards, and service-level visibility to make platform behavior easier to understand.",
        },
        {
          title: "Transition ownership",
          description:
            "Ensure documentation, operational practices, architecture knowledge, and platform capabilities can be owned and evolved by internal teams.",
        },
      ]}

      architectureTitle="A platform architecture designed around clear responsibilities."
      architectureDescription="The illustrative target architecture separates application concerns, platform capabilities, delivery automation, and operational visibility so individual parts of the system can evolve without requiring every change to become a platform-wide event."
      architectureItems={[
        {
          title: "Application services",
          description:
            "Applications and services are organized around clearer responsibilities with explicit interfaces and reduced unnecessary coupling.",
        },
        {
          title: "API & integration layer",
          description:
            "Service communication and external integrations use defined APIs and integration patterns rather than hidden point-to-point dependencies.",
        },
        {
          title: "Cloud foundation",
          description:
            "Networking, identity, environments, infrastructure policies, and reusable cloud foundations are managed consistently.",
        },
        {
          title: "Platform capabilities",
          description:
            "Reusable deployment, configuration, service, and operational capabilities reduce repeated engineering effort across teams.",
        },
        {
          title: "Delivery automation",
          description:
            "CI/CD workflows provide repeatable paths for testing, packaging, deploying, and promoting changes between environments.",
        },
        {
          title: "Observability layer",
          description:
            "Logs, metrics, traces, dashboards, and alerts create shared visibility across application and infrastructure behavior.",
        },
      ]}

      technologyTitle="Representative technology areas"
      technologies={[
        "Cloud Architecture",
        "AWS / Azure / GCP",
        "Containers",
        "Kubernetes",
        "Infrastructure as Code",
        "CI/CD",
        "API Engineering",
        "Platform Engineering",
        "Observability",
        "Site Reliability Engineering",
        "Application Modernization",
        "Security Automation",
      ]}

      deliveryTitle="Modernization delivered as an evolving program, not a big-bang rewrite."
      deliveryDescription="The representative delivery model focuses on creating useful improvements early while gradually moving applications, infrastructure, and engineering practices toward the target architecture."
      deliveryItems={[
        {
          title: "Incremental modernization",
          description:
            "Prioritize components according to business value, technical risk, dependencies, and modernization readiness rather than replacing everything at once.",
        },
        {
          title: "Platform alongside product",
          description:
            "Develop cloud and platform capabilities in parallel with application modernization so delivery improvements become reusable across teams.",
        },
        {
          title: "Joint ownership",
          description:
            "Consulting and internal engineering teams work together on architecture, implementation, operations, documentation, and knowledge transfer.",
        },
      ]}

      decisionsTitle="Modernization depends on choosing what not to change."
      decisionsDescription="A credible modernization program requires trade-offs. The objective is not to introduce newer technology everywhere, but to change the parts of the platform where modernization creates meaningful technical or operational value."
      decisions={[
        {
          title: "Modernize selectively",
          description:
            "Stable components can remain in place when changing them would create more risk than value. Modernization effort is directed toward genuine constraints.",
        },
        {
          title: "Avoid unnecessary service fragmentation",
          description:
            "Smaller services are introduced only where independent ownership, scaling, deployment, or domain boundaries justify the additional operational complexity.",
        },
        {
          title: "Standardize the platform without over-constraining teams",
          description:
            "Reusable platform paths provide consistency for common workflows while allowing exceptions when a workload has legitimate technical requirements.",
        },
        {
          title: "Build operational capability alongside architecture",
          description:
            "Observability, incident readiness, ownership, and reliability are treated as part of the platform design rather than work deferred until after migration.",
        },
      ]}

      outcomesTitle="What a successful modernization should enable."
      outcomesDescription="Because this is currently a representative engagement rather than a verified client case study, these are qualitative target outcomes—not published client results or performance claims."
      outcomes={[
        {
          value: "Illustrative",
          label:
            "A clearer application and platform architecture with better-defined responsibilities.",
        },
        {
          value: "Illustrative",
          label:
            "More repeatable infrastructure and software delivery through automation.",
        },
        {
          value: "Illustrative",
          label:
            "Improved operational visibility across applications and infrastructure.",
        },
        {
          value: "Illustrative",
          label:
            "A stronger foundation for continued modernization and internal ownership.",
        },
      ]}

      enabledTitle="A platform that can continue evolving after the engagement."
      enabledDescription="The purpose of modernization is not simply to reach a new technical state. It is to create a foundation from which engineering teams can continue improving applications, delivery practices, reliability, and platform capabilities."
      enabledItems={[
        {
          title: "Safer evolution",
          description:
            "Clearer architecture and automated delivery paths make future application changes easier to isolate, understand, and manage.",
        },
        {
          title: "Reusable engineering foundations",
          description:
            "Cloud and platform capabilities can support additional services and teams instead of solving the same infrastructure problems repeatedly.",
        },
        {
          title: "Long-term ownership",
          description:
            "Documentation, observability, operational practices, and knowledge transfer help internal teams continue operating and improving the platform.",
        },
      ]}

      relatedSolutions={[
        {
          title: "Cloud & DevOps",
          href: "/solutions/cloud-devops",
        },
        {
          title: "Software Engineering",
          href: "/solutions/software-engineering",
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

      ctaEyebrow="Cloud Modernization"
      ctaTitle="Modernization starts with understanding what is actually holding the platform back."
      ctaDescription="If your organization is dealing with aging applications, cloud complexity, delivery friction, reliability challenges, or platform constraints, we can start by assessing the current environment and defining a practical modernization path."
    />
  );
}