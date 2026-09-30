import type { Metadata } from "next";

import CaseStudyDetail from "@/components/work/detail/CaseStudyDetail";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Data & AI Platform Engineering";

const pageDescription =
  "A representative technology consulting engagement exploring data engineering, analytics, machine learning, generative AI, evaluation, observability, cloud foundations, and production AI operations.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/work/data-ai-platform",
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
    url: "/work/data-ai-platform",
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

export default function DataAIPlatformPage() {
  return (
    <CaseStudyDetail
      eyebrow="Representative Engagement · AI & Data"
      title="Building a data foundation for"
      highlightedTitle="practical, production-ready AI."
      description="An illustrative consulting engagement showing how fragmented data, analytics requirements, machine learning, generative AI, evaluation, and production operations can be addressed as one connected data and intelligence platform."
      accentText="text-violet-400"
      accentBg="bg-violet-600"
      accentSoftBg="bg-violet-50"
      accentBorder="border-violet-100"

      engagementType="Representative data & AI engagement"
      industry="Cross-industry example"
      duration="Illustrative scope"
      team="Data, AI, cloud, software, and platform specialists"

      challengeTitle="Growing demand for intelligence without a dependable data foundation."
      challengeDescription="The representative organization had valuable information across multiple systems, but inconsistent pipelines, fragmented access patterns, unclear ownership, and limited production controls made advanced analytics and AI difficult to scale responsibly."
      challengeItems={[
        {
          title: "Fragmented data",
          description:
            "Important business information existed across operational systems, databases, files, APIs, and analytical tools without a consistent integration model.",
        },
        {
          title: "Inconsistent pipelines",
          description:
            "Data movement and transformation relied on different patterns and workflows, making quality, lineage, maintenance, and troubleshooting more difficult.",
        },
        {
          title: "AI experimentation without production foundations",
          description:
            "Early AI and machine-learning experiments demonstrated potential but lacked repeatable evaluation, deployment, monitoring, and operational controls.",
        },
        {
          title: "Limited trust and visibility",
          description:
            "Teams could not always determine where data originated, how it had changed, whether it was current, or how an analytical or AI output had been produced.",
        },
      ]}

      assessmentTitle="The AI problem was also a data, platform, and operating-model problem."
      assessmentDescription="The assessment treated AI as the top layer of a broader system. Reliable AI applications depend on trusted data, clear use cases, production architecture, evaluation, security, monitoring, and ownership. Improving only the model layer would leave the underlying constraints unresolved."
      assessmentItems={[
        {
          title: "Use-case assessment",
          description:
            "Separate valuable business problems from technology-led experimentation and identify where analytics, automation, machine learning, or generative AI are genuinely appropriate.",
        },
        {
          title: "Data readiness",
          description:
            "Assess sources, pipelines, quality, ownership, access, lineage, transformation logic, and the suitability of existing information for target use cases.",
        },
        {
          title: "Production readiness",
          description:
            "Review deployment patterns, evaluation, security, observability, model or prompt lifecycle management, and the operational responsibilities needed for production systems.",
        },
      ]}

      approachTitle="Build intelligence on top of trusted foundations."
      approachDescription="The representative approach begins with the highest-value use cases and builds the data, platform, and operational capabilities needed to support them rather than creating a large data platform without clear demand."
      approachItems={[
        {
          title: "Prioritize business use cases",
          description:
            "Define the decisions, workflows, user experiences, or operational problems that data and AI should improve before selecting models or platform technologies.",
        },
        {
          title: "Establish dependable data pipelines",
          description:
            "Create repeatable ingestion, transformation, validation, and publishing workflows that make important data easier to trust and reuse.",
        },
        {
          title: "Create shared data foundations",
          description:
            "Organize data products, storage, metadata, access patterns, and analytical layers around clear ownership and reusable platform capabilities.",
        },
        {
          title: "Develop analytical and AI services",
          description:
            "Build analytics, machine-learning, search, retrieval, and generative AI capabilities around specific product or business workflows.",
        },
        {
          title: "Introduce systematic evaluation",
          description:
            "Define measurable evaluation approaches for data quality, model behavior, retrieval quality, AI responses, latency, cost, and other relevant system characteristics.",
        },
        {
          title: "Operationalize the platform",
          description:
            "Add deployment automation, monitoring, observability, security controls, lifecycle management, and ownership practices needed to operate AI and data systems over time.",
        },
      ]}

      architectureTitle="A layered architecture from source systems to intelligent applications."
      architectureDescription="The illustrative architecture separates ingestion, storage, transformation, serving, AI capabilities, application experiences, and operational controls so individual parts can evolve without tightly coupling every use case to every data source."
      architectureItems={[
        {
          title: "Source & ingestion layer",
          description:
            "Operational databases, SaaS platforms, files, event streams, and APIs connect through defined ingestion and integration patterns.",
        },
        {
          title: "Data platform",
          description:
            "Structured storage, transformation, metadata, quality controls, and data-product patterns create reusable foundations for downstream use.",
        },
        {
          title: "Analytics & serving",
          description:
            "Curated datasets, semantic models, APIs, search, and analytical interfaces provide dependable ways for applications and users to consume information.",
        },
        {
          title: "AI & machine-learning layer",
          description:
            "Machine-learning models, LLM applications, retrieval pipelines, embeddings, and related AI services are developed around defined use cases.",
        },
        {
          title: "Application layer",
          description:
            "Digital products, internal tools, workflows, APIs, and decision-support experiences consume data and AI capabilities through explicit interfaces.",
        },
        {
          title: "Operations & governance",
          description:
            "Evaluation, observability, access control, lineage, deployment automation, monitoring, and lifecycle management operate across the platform.",
        },
      ]}

      technologyTitle="Representative technology areas"
      technologies={[
        "Data Engineering",
        "Cloud Data Platforms",
        "Data Pipelines",
        "Analytics",
        "Machine Learning",
        "Generative AI",
        "LLM Applications",
        "Vector Search",
        "Retrieval-Augmented Generation",
        "APIs",
        "MLOps",
        "AI Evaluation",
        "AI Observability",
        "Data Quality",
      ]}

      deliveryTitle="Deliver value through focused use cases while building reusable foundations."
      deliveryDescription="Rather than spending a long period building a platform before users receive value, the representative delivery model combines foundational work with practical business use cases so both evolve together."
      deliveryItems={[
        {
          title: "Use-case-led increments",
          description:
            "Each delivery increment connects platform improvements to a concrete analytical, product, automation, or AI use case.",
        },
        {
          title: "Reusable foundations",
          description:
            "Common ingestion, transformation, evaluation, security, and deployment capabilities are developed as reusable platform services instead of being rebuilt for every use case.",
        },
        {
          title: "Cross-functional ownership",
          description:
            "Data engineers, AI specialists, software engineers, cloud engineers, security practitioners, and business stakeholders work around shared outcomes.",
        },
      ]}

      decisionsTitle="Not every problem needs AI, and not every AI problem needs the most complex model."
      decisionsDescription="A credible data and AI engagement includes disciplined technical choices. The goal is to use the simplest architecture capable of delivering useful, reliable, and maintainable outcomes."
      decisions={[
        {
          title: "Choose the technique after the problem",
          description:
            "Rules, analytics, search, traditional machine learning, generative AI, or combinations of these are selected according to the use case rather than technology popularity.",
        },
        {
          title: "Reuse foundation models where appropriate",
          description:
            "Custom model development is justified only where the use case, data, performance requirements, or differentiation genuinely require it.",
        },
        {
          title: "Treat retrieval quality as a system problem",
          description:
            "For knowledge-based AI applications, source quality, chunking, indexing, metadata, search, permissions, and evaluation matter as much as the language model.",
        },
        {
          title: "Design for uncertainty",
          description:
            "AI outputs are evaluated and monitored with the understanding that probabilistic systems require different controls than deterministic software.",
        },
      ]}

      outcomesTitle="What a successful data and AI platform should enable."
      outcomesDescription="Because this remains a representative engagement rather than a verified client case study, these describe intended qualitative outcomes rather than published client metrics."
      outcomes={[
        {
          value: "Illustrative",
          label:
            "More dependable data foundations that can support multiple analytical and AI use cases.",
        },
        {
          value: "Illustrative",
          label:
            "A repeatable path from AI experimentation to evaluated production deployment.",
        },
        {
          value: "Illustrative",
          label:
            "Greater visibility into data quality, AI behavior, system performance, and operational issues.",
        },
        {
          value: "Illustrative",
          label:
            "Reusable platform capabilities that reduce duplication across future data and AI initiatives.",
        },
      ]}

      enabledTitle="A foundation for expanding data and AI capabilities deliberately."
      enabledDescription="The value of the platform is not limited to the first analytical or AI use case. Shared engineering foundations allow additional products, workflows, models, and data sources to be introduced with less repeated infrastructure work."
      enabledItems={[
        {
          title: "New use cases",
          description:
            "Teams can build additional analytical, automation, search, machine-learning, and generative AI experiences on top of established platform capabilities.",
        },
        {
          title: "Continuous evaluation",
          description:
            "Evaluation and observability become part of the development lifecycle, allowing data and AI behavior to be measured as systems evolve.",
        },
        {
          title: "Operational ownership",
          description:
            "Documentation, monitoring, platform standards, deployment processes, and knowledge transfer support long-term internal ownership.",
        },
      ]}

      relatedSolutions={[
        {
          title: "AI & Data",
          href: "/solutions/ai-data",
        },
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

      ctaEyebrow="AI & Data"
      ctaTitle="Start with the problem AI or data needs to solve."
      ctaDescription="If your organization has fragmented data, disconnected analytics, promising AI experiments, or uncertainty about how to move an AI use case into production, we can help assess the foundations and define a practical path forward."
    />
  );
}