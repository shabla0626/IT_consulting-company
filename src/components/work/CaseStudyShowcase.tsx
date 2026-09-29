import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    category: "Cloud Modernization",
    title: "Modernizing a platform for reliability, delivery, and scale.",
    description:
      "A representative engagement showing how legacy architecture, cloud foundations, delivery workflows, and operational practices can be modernized together rather than treated as isolated initiatives.",
    challenge:
      "A complex platform environment with aging services, inconsistent deployment processes, operational friction, and increasing pressure to release changes more safely.",
    approach: [
      "Assess application and infrastructure constraints",
      "Define a modernization roadmap",
      "Introduce cloud and platform engineering foundations",
      "Improve CI/CD, observability, and operational ownership",
    ],
    capabilities: [
      "Cloud Architecture",
      "Platform Engineering",
      "Application Modernization",
      "DevOps",
      "Observability",
    ],
    href: "/work/cloud-modernization-platform",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    background: "bg-sky-500/5",
  },
  {
    number: "02",
    category: "AI & Data",
    title: "Building a data and AI foundation for practical intelligence.",
    description:
      "A representative engagement focused on creating the data architecture, engineering workflows, and AI capabilities needed to move from fragmented information toward usable production systems.",
    challenge:
      "Data spread across multiple systems, inconsistent access patterns, limited analytical foundations, and growing demand for AI-enabled workflows.",
    approach: [
      "Clarify priority business use cases",
      "Improve data ingestion and platform foundations",
      "Design analytics and AI-ready architecture",
      "Introduce evaluation, monitoring, and production controls",
    ],
    capabilities: [
      "Data Engineering",
      "Analytics Platforms",
      "Generative AI",
      "Machine Learning",
      "AI Operations",
    ],
    href: "/work/data-ai-platform",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    background: "bg-violet-500/5",
  },
  {
    number: "03",
    category: "Digital Product",
    title: "Creating a digital platform around evolving business needs.",
    description:
      "A representative engagement showing how product engineering, architecture, APIs, cloud infrastructure, and delivery practices can come together around a modern digital product.",
    challenge:
      "A growing digital product with increasing feature demands, integration complexity, architectural friction, and a need for more sustainable engineering delivery.",
    approach: [
      "Understand product and user priorities",
      "Redesign key application and service boundaries",
      "Improve APIs and integration architecture",
      "Strengthen engineering quality and delivery practices",
    ],
    capabilities: [
      "Product Engineering",
      "Web Applications",
      "API Engineering",
      "Cloud-Native Development",
      "Quality Engineering",
    ],
    href: "/work/digital-product-platform",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    background: "bg-emerald-500/5",
  },
];

export default function CaseStudyShowcase() {
  return (
    <section
      id="featured-work"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Representative Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            See how complex technology problems can be approached end to end.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600">
            These representative engagements illustrate how our consulting
            approach connects business context, architecture, engineering,
            cloud, data, AI, security, and delivery. They are not presented as
            verified client case studies unless explicitly identified as such.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.href}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-[0.18em] text-slate-500">
                      {study.number}
                    </span>

                    <span
                      className={`text-sm font-semibold uppercase tracking-[0.18em] ${study.accent}`}
                    >
                      {study.category}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                    {study.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                    {study.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Representative Challenge
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                      {study.challenge}
                    </p>
                  </div>

                  <Link
                    href={study.href}
                    className="mt-9 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Explore Engagement
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>

                <div
                  className={`border-t ${study.border} ${study.background} p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${study.accent}`}>
                      Our Approach
                    </p>

                    <div className="mt-6 space-y-4">
                      {study.approach.map((item, index) => (
                        <div
                          key={item}
                          className="flex gap-4 border-b border-white/10 pb-4"
                        >
                          <span className="text-xs font-semibold tracking-[0.15em] text-slate-500">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm leading-6 text-slate-200">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className={`text-sm font-semibold ${study.accent}`}>
                      Capabilities Involved
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5">
          <p className="text-sm leading-6 text-amber-900">
            <span className="font-semibold">Content note:</span>{" "}
            These engagements are currently illustrative. Real client names,
            outcomes, metrics, testimonials, and business results should only
            be added once they are verified and approved for publication.
          </p>
        </div>
      </div>
    </section>
  );
}