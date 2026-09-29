import IndustryDetail from "@/components/industries/detail/IndustryDetail";

export default function RetailCommercePage() {
  return (
    <IndustryDetail
      eyebrow="Retail & Commerce"
      title="Build commerce experiences"
      highlightedTitle="that adapt as customers do."
      description="We help retail and commerce organizations modernize digital platforms, improve customer and operational experiences, strengthen data foundations, and build technology that can evolve with changing demand."
      accentText="text-violet-500"
      accentBg="bg-violet-600"
      accentSoftBg="bg-violet-50"
      accentBorder="border-violet-100"
      contextEyebrow="Industry Context"
      contextTitle="Modern commerce depends on more than the storefront."
      contextDescription="Customer experiences are shaped by the systems behind them: product data, commerce platforms, integrations, fulfillment workflows, analytics, cloud infrastructure, and engineering operations. Strong digital experiences depend on these parts working together."
      contextItems={[
        {
          title: "Digital experience",
          description:
            "Create responsive, intuitive customer experiences across web, mobile, commerce, account, and service journeys.",
        },
        {
          title: "Platform complexity",
          description:
            "Simplify and modernize the applications, services, integrations, and platforms that support digital commerce.",
        },
        {
          title: "Connected data",
          description:
            "Improve how customer, product, transaction, and operational data moves across systems and supports decision-making.",
        },
        {
          title: "Scalable delivery",
          description:
            "Strengthen engineering platforms, automation, observability, and delivery practices so teams can respond to change more effectively.",
        },
      ]}
      capabilityEyebrow="How We Help"
      capabilityTitle="Technology capabilities for modern retail and commerce."
      capabilityDescription="We bring together product engineering, cloud, data, AI, platform engineering, integration, and security capabilities to improve the systems behind customer and operational experiences."
      capabilities={[
        {
          title: "Digital Commerce Engineering",
          description:
            "Design and build customer-facing commerce applications, digital storefronts, account experiences, and supporting services.",
        },
        {
          title: "Application Modernization",
          description:
            "Modernize existing commerce and operational applications while improving flexibility, maintainability, and integration.",
        },
        {
          title: "API & Integration Engineering",
          description:
            "Connect commerce platforms, services, payment systems, product information, fulfillment workflows, and other business systems.",
        },
        {
          title: "Cloud & Platform Engineering",
          description:
            "Create cloud foundations, delivery platforms, automation, and scalable infrastructure for digital products and engineering teams.",
        },
        {
          title: "Data & AI",
          description:
            "Build data foundations and AI-enabled capabilities for analytics, search, customer experiences, operations, and decision support.",
        },
        {
          title: "Security Engineering",
          description:
            "Integrate application security, identity, cloud security, secure delivery practices, and architecture controls into the technology stack.",
        },
      ]}
      focusTitle="Technology focus areas"
      focusAreas={[
        "Digital Commerce",
        "Web Applications",
        "Mobile Experiences",
        "API Engineering",
        "Systems Integration",
        "Cloud Architecture",
        "Platform Engineering",
        "Data Engineering",
        "Analytics",
        "Generative AI",
        "Search",
        "Observability",
      ]}
      ctaEyebrow="Retail & Commerce"
      ctaTitle="Create commerce technology ready for continuous change."
      ctaDescription="Whether you are modernizing a commerce platform, improving the customer experience, connecting fragmented systems, or strengthening engineering capabilities, we can help design and deliver the technical path forward."
    />
  );
}