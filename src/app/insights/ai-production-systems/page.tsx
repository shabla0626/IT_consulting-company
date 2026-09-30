import type { Metadata } from "next";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import InsightArticle from "@/components/insights/detail/InsightArticle";
import { siteConfig } from "@/lib/site";

const pageTitle =
  "Designing AI Systems for Production";

const pageDescription =
  "A practical perspective on building production AI systems across use-case design, data quality, evaluation, architecture, observability, security, cost, and operational ownership.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical:
      "/insights/ai-production-systems",
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
    type: "article",
    url: "/insights/ai-production-systems",
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

export default function AIProductionSystemsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
          { name: "Designing AI Systems for Production", href: "/insights/ai-production-systems" },
        ]}
      />
      <InsightArticle
      eyebrow="AI & Data Perspective"
      title="Designing AI systems for"
      highlightedTitle="production, not just prototypes."
      description="A practical perspective on what changes when an AI experiment becomes a real software system that people and organizations need to rely on."
      accentText="text-violet-600"
      accentBg="bg-violet-600"
      accentSoftBg="bg-violet-50"
      accentBorder="border-violet-100"

      category="AI & Data"
      readingLabel="Long-form perspective"
      statusLabel="Representative editorial content"

      introduction={[
        "Building an AI prototype has become increasingly accessible. Building an AI system that can operate reliably inside a real product, workflow, or organization is a different engineering problem.",
        "Once an AI capability reaches production, the model is only one part of the system. Data quality, retrieval, application architecture, evaluation, security, latency, cost, observability, fallback behavior, and operational ownership become equally important.",
        "The practical question is therefore not simply whether a model can produce an impressive response. It is whether the complete system can produce useful behavior consistently enough for its intended context.",
      ]}

      keyPointsTitle="Production AI is a systems problem."
      keyPoints={[
        {
          title: "Start with the use case",
          description:
            "Define the user, workflow, decision, or business problem first. The model and architecture should follow the problem rather than become the starting point.",
        },
        {
          title: "Build on trusted data",
          description:
            "AI quality depends heavily on the information available to the system, how that information is prepared, and whether its provenance and access are understood.",
        },
        {
          title: "Evaluate continuously",
          description:
            "Teams need repeatable ways to assess quality, failure modes, retrieval, latency, cost, and other behavior as models, prompts, data, and applications change.",
        },
        {
          title: "Design for operation",
          description:
            "Security, observability, deployment, incident handling, ownership, and lifecycle management should be considered before an AI capability becomes critical.",
        },
      ]}

      sections={[
        {
          eyebrow: "01 · Use Case",
          title: "The model should not define the problem.",
          description: [
            "AI initiatives often begin with a technology question: where can we use generative AI, machine learning, or an LLM? That framing can lead teams toward demonstrations that are technically interesting but operationally weak.",
            "A stronger starting point is the workflow. What is the user trying to accomplish? What decision needs support? What information is required? What level of uncertainty is acceptable? What happens when the system is wrong?",
            "Those questions help determine whether the right solution is generative AI, traditional machine learning, search, analytics, rules, conventional software, or some combination of them.",
          ],
          items: [
            {
              title: "Define the user",
              description:
                "Understand who interacts with the system and what knowledge, permissions, expectations, and responsibilities they bring.",
            },
            {
              title: "Define the task",
              description:
                "Identify the specific workflow or decision the AI capability is expected to support rather than beginning with a general-purpose assistant.",
            },
            {
              title: "Define acceptable failure",
              description:
                "A brainstorming tool and a system supporting a critical operational workflow require very different levels of control and validation.",
            },
            {
              title: "Define success",
              description:
                "Agree on observable measures of usefulness before optimizing prompts, models, or infrastructure.",
            },
          ],
        },
        {
          eyebrow: "02 · Data",
          title: "AI quality starts before the model.",
          description: [
            "For many production AI systems, especially knowledge-oriented applications, the quality of the underlying data and retrieval process matters as much as the choice of language model.",
            "Incomplete documents, outdated information, inconsistent metadata, weak permissions, or poor retrieval can produce unreliable outputs even when the underlying model is capable.",
            "Data engineering and AI engineering therefore need to be treated as connected disciplines rather than separate phases.",
          ],
          items: [
            {
              title: "Source quality",
              description:
                "Understand which sources are authoritative, current, complete, and appropriate for the intended use case.",
            },
            {
              title: "Retrieval quality",
              description:
                "Chunking, indexing, metadata, embeddings, ranking, filtering, and permissions all influence what context reaches the model.",
            },
            {
              title: "Access controls",
              description:
                "The system should respect the same information boundaries that apply to the users and systems around it.",
            },
            {
              title: "Data lifecycle",
              description:
                "Plan how new, changed, or removed information propagates through the AI system over time.",
            },
          ],
        },
        {
          eyebrow: "03 · Evaluation",
          title: "If quality cannot be measured, it cannot be managed.",
          description: [
            "Traditional software usually has deterministic expectations: given a defined input, the program should produce a predictable result. Generative AI introduces probabilistic behavior, which changes how quality needs to be tested.",
            "Evaluation should include representative examples from real workflows and should examine more than whether an answer appears plausible.",
            "The right evaluation strategy depends on the use case, but it should become part of normal engineering work rather than a one-time test before launch.",
          ],
          items: [
            {
              title: "Task quality",
              description:
                "Measure whether the system performs the actual task well enough for the intended user and operating context.",
            },
            {
              title: "Retrieval evaluation",
              description:
                "Check whether the right supporting information is being found before evaluating what the model does with it.",
            },
            {
              title: "Failure analysis",
              description:
                "Capture recurring failure modes and use them to improve prompts, data, retrieval, guardrails, or product design.",
            },
            {
              title: "Regression testing",
              description:
                "Re-run representative evaluations when models, prompts, retrieval logic, data, or application behavior changes.",
            },
          ],
        },
        {
          eyebrow: "04 · Architecture",
          title: "Keep AI behind clear system boundaries.",
          description: [
            "AI capabilities should usually be treated as one part of a broader application architecture rather than allowing model-specific logic to spread throughout the product.",
            "Clear interfaces make it easier to change models, modify prompts, introduce evaluation, enforce policy, add caching, control costs, or replace an AI capability when requirements change.",
            "This also makes the system easier to test and gives engineering teams better visibility into which layer is responsible when behavior degrades.",
          ],
          items: [
            {
              title: "Explicit AI service boundaries",
              description:
                "Centralize model interaction, prompt logic, retrieval, policy, and related behavior behind maintainable application interfaces.",
            },
            {
              title: "Model flexibility",
              description:
                "Avoid architecture that assumes one model provider will always be the correct choice for every workload.",
            },
            {
              title: "Fallback behavior",
              description:
                "Define how the application behaves when models fail, time out, exceed cost limits, or produce output that cannot be trusted.",
            },
            {
              title: "Deterministic controls",
              description:
                "Use conventional software for permissions, validation, transactions, workflow state, and other behavior that should remain deterministic.",
            },
          ],
        },
        {
          eyebrow: "05 · Operations",
          title: "Production AI needs observability beyond infrastructure health.",
          description: [
            "A service being technically available does not mean its AI behavior is useful. Production monitoring needs to look at both conventional system health and the behavior of the AI capability itself.",
            "Teams may need visibility into latency, token usage, model errors, retrieval behavior, evaluation results, cost, user feedback, and recurring failure patterns.",
            "Operational ownership also needs to be clear. Someone must be able to understand when quality is deteriorating and determine which part of the system needs attention.",
          ],
          items: [
            {
              title: "Technical observability",
              description:
                "Monitor latency, availability, errors, dependencies, resource use, queues, and application health.",
            },
            {
              title: "AI observability",
              description:
                "Track model usage, retrieval behavior, evaluation outcomes, prompt versions, failure patterns, and other use-case-specific signals.",
            },
            {
              title: "Cost visibility",
              description:
                "Measure the cost of model calls, embeddings, storage, retrieval, infrastructure, and supporting services relative to the value of the workflow.",
            },
            {
              title: "Operational ownership",
              description:
                "Define who investigates quality issues, changes prompts or models, maintains evaluations, and approves production changes.",
            },
          ],
        },
        {
          eyebrow: "06 · Security",
          title: "AI introduces new risks without replacing existing ones.",
          description: [
            "An AI-enabled application still needs conventional application security, identity, access control, secrets management, secure software delivery, and infrastructure protection.",
            "It may also introduce additional concerns around prompt injection, unsafe tool execution, sensitive information exposure, external model providers, untrusted retrieved content, and excessive system permissions.",
            "Security should therefore be built into the architecture rather than added as a final review after the AI workflow is already established.",
          ],
          items: [
            {
              title: "Least privilege",
              description:
                "Give AI-enabled services and tools only the permissions required for their intended workflows.",
            },
            {
              title: "Untrusted inputs",
              description:
                "Treat user prompts, retrieved content, uploaded documents, and external information as potentially untrusted.",
            },
            {
              title: "Sensitive information",
              description:
                "Understand what data is sent to models, logs, vector stores, external services, and downstream tools.",
            },
            {
              title: "Controlled actions",
              description:
                "Use explicit authorization and deterministic validation when AI systems can trigger external actions or modify important data.",
            },
          ],
        },
      ]}

      takeawayTitle="The prototype is the beginning, not the architecture."
      takeawayDescription="Moving AI into production requires engineering discipline across the whole system. The strongest implementations treat AI as a capability embedded within a dependable software, data, security, and operational foundation."
      takeaways={[
        "Begin with a specific workflow or business problem, not a preferred model or AI technique.",
        "Invest in data quality, retrieval, access controls, and source understanding before assuming the model is the primary quality problem.",
        "Build evaluation into development so changes to prompts, models, data, and retrieval can be assessed systematically.",
        "Keep probabilistic AI behavior behind clear application boundaries and retain deterministic controls where certainty is required.",
        "Monitor AI quality, cost, latency, retrieval, and failure behavior alongside traditional application and infrastructure health.",
        "Design for ownership: production AI needs people, processes, documentation, and operational responsibility after launch.",
      ]}

      relatedSolutions={[
        {
          title: "AI & Data",
          href: "/solutions/ai-data",
        },
        {
          title: "Software Engineering",
          href: "/solutions/software-engineering",
        },
        {
          title: "Cloud & DevOps",
          href: "/solutions/cloud-devops",
        },
        {
          title: "Cybersecurity",
          href: "/solutions/cybersecurity",
        },
      ]}

      relatedWork={{
        title: "Data & AI Platform representative engagement",
        href: "/work/data-ai-platform",
      }}

      ctaEyebrow="AI & Data"
      ctaTitle="Moving an AI use case beyond the prototype?"
      ctaDescription="We can help evaluate the use case, data foundations, architecture, evaluation strategy, security, and operational capabilities needed to turn experimentation into a dependable production system."
      />
    </>
  );
}