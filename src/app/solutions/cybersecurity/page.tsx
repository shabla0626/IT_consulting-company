import type { Metadata } from "next";

import SolutionDetail from "@/components/solutions/detail/SolutionDetail";

import { siteConfig } from "@/lib/site";


const pageTitle =
  "Cybersecurity";

const pageDescription =
  "Application security, cloud security, identity, security architecture, and DevSecOps consulting.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/solutions/cybersecurity",
  },

  openGraph: {
    type: "website",
    url: "/solutions/cybersecurity",
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

export default function CybersecurityPage() {
  return (
    <SolutionDetail
      eyebrow="Cybersecurity"
      title="Build security into"
      highlightedTitle="the technology itself."
      description="We help organizations strengthen applications, cloud platforms, identity systems, engineering practices, and technical architecture without treating security as an afterthought."
      accentText="text-emerald-400"
      accentBg="bg-emerald-600"
      accentSoftBg="bg-emerald-200/60"
      accentDot="bg-emerald-500"
      capabilityEyebrow="Security Capabilities"
      capabilityTitle="Security integrated into modern engineering."
      capabilityDescription="Strong security comes from architecture, engineering practices, operational controls, identity, automation, and clear ownership working together."
      capabilities={[
        {
          title: "Application Security",
          description:
            "Identify and reduce security risk across application architecture, code, APIs, dependencies, and development practices.",
        },
        {
          title: "Cloud Security",
          description:
            "Strengthen cloud architecture, configuration, access, network boundaries, workloads, and operational controls.",
        },
        {
          title: "Identity & Access",
          description:
            "Improve authentication, authorization, privileged access, service identity, and access-management architecture.",
        },
        {
          title: "Security Architecture",
          description:
            "Design security into systems, platforms, integrations, infrastructure, and technical decision-making.",
        },
        {
          title: "DevSecOps",
          description:
            "Integrate automated security checks and controls into software delivery and infrastructure workflows.",
        },
        {
          title: "Security Engineering",
          description:
            "Build practical technical controls, automation, detection, and engineering capabilities around identified risks.",
        },
      ]}
      approachEyebrow="Security Approach"
      approachTitle="Security should enable good engineering."
      approachDescription="Controls work best when they are understandable, automated, appropriately scoped, and integrated into normal engineering workflows."
      approach={[
        {
          title: "Understand the threat",
          description:
            "Security decisions begin with the system, data, users, business context, and realistic threat scenarios.",
        },
        {
          title: "Reduce risk by design",
          description:
            "Architecture and engineering choices can eliminate entire categories of risk before compensating controls are required.",
        },
        {
          title: "Automate guardrails",
          description:
            "Security checks and policies should become repeatable parts of development, deployment, and infrastructure workflows.",
        },
        {
          title: "Prepare for failure",
          description:
            "Detection, observability, response, recovery, and operational resilience are essential parts of security engineering.",
        },
      ]}
      technologyTitle="Security across applications and infrastructure."
      technologyAreas={[
        "Application Security",
        "Cloud Security",
        "Identity & Access",
        "DevSecOps",
        "Threat Modeling",
        "Security Architecture",
        "Security Automation",
        "Observability & Detection",
      ]}
      ctaEyebrow="Strengthen Your Systems"
      ctaTitle="Have a security challenge connected to your technology?"
      ctaDescription="We can help understand the technical risk and design security improvements that fit the way your systems and teams actually work."
    />
  );
}