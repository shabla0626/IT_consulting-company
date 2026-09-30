import type { Metadata } from "next";
import SolutionDetail from "@/components/solutions/detail/SolutionDetail";

import { siteConfig } from "@/lib/site";


const pageTitle =
  "Cloud & DevOps";

const pageDescription =
  "Cloud architecture, platform engineering, DevOps automation, infrastructure, observability, and reliability consulting.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/solutions/cloud-devops",
  },

  openGraph: {
    type: "website",
    url: "/solutions/cloud-devops",
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

export default function CloudDevOpsPage() {
  return (
    <SolutionDetail
      eyebrow="Cloud & DevOps"
      title="Build cloud platforms"
      highlightedTitle="teams can rely on."
      description="We help organizations modernize infrastructure, automate delivery, improve reliability, and create cloud platforms that support faster and safer software development."
      accentText="text-sky-400"
      accentBg="bg-sky-600"
      accentSoftBg="bg-sky-200/60"
      accentDot="bg-sky-500"
      capabilityEyebrow="Cloud Capabilities"
      capabilityTitle="Infrastructure designed around engineering velocity."
      capabilityDescription="Cloud transformation works best when infrastructure, developer experience, reliability, security, and operations are treated as one system."
      capabilities={[
        { title: "Cloud Architecture", description: "Design scalable cloud environments and application architectures around business, technical, and operational requirements." },
        { title: "Platform Engineering", description: "Create reusable internal platforms that give development teams safer and faster paths to production." },
        { title: "CI/CD Automation", description: "Automate testing, building, deployment, release management, and infrastructure changes." },
        { title: "Infrastructure as Code", description: "Make infrastructure repeatable, reviewable, versioned, and easier to manage across environments." },
        { title: "Cloud Modernization", description: "Move legacy workloads toward modern architectures incrementally instead of relying on unnecessary big-bang migrations." },
        { title: "Reliability Engineering", description: "Improve monitoring, observability, resilience, incident response, performance, and operational readiness." },
      ]}
      approachEyebrow="Cloud Approach"
      approachTitle="Cloud should simplify delivery, not add another layer of complexity."
      approachDescription="Infrastructure exists to support products and teams. We design cloud environments around how engineers actually build and operate software."
      approach={[
        { title: "Understand the workload", description: "Architecture begins with application characteristics, scale, security, reliability, and business requirements." },
        { title: "Automate repeatable work", description: "Infrastructure, testing, deployment, configuration, and operational workflows should be automated wherever practical." },
        { title: "Create clear platform paths", description: "Teams should have understandable, secure, self-service ways to deploy and operate applications." },
        { title: "Measure reliability", description: "Observability and operational metrics help teams understand system health and improve reliability over time." },
      ]}
      technologyTitle="Modern infrastructure across the delivery lifecycle."
      technologyAreas={["AWS / Azure / GCP", "Kubernetes", "Containers", "Infrastructure as Code", "CI/CD", "Platform Engineering", "Observability", "Site Reliability"]}
      ctaEyebrow="Modernize Your Platform"
      ctaTitle="Need a cloud platform that helps engineering move faster?"
      ctaDescription="We can help assess your current environment, identify bottlenecks, and design a practical modernization path."
    />
  );
}
