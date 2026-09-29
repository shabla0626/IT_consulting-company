import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Design, modernize, and build digital products, platforms, applications, APIs, and engineering foundations around real business needs.",
    capabilities: [
      "Product Engineering",
      "Application Modernization",
      "Platform Engineering",
      "API & Backend Engineering",
    ],
    href: "/solutions/software-engineering",
    accent: "text-cyan-600",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Build trusted data foundations, analytics platforms, machine-learning systems, and AI-enabled applications designed for production use.",
    capabilities: [
      "Data Engineering",
      "Generative AI",
      "Machine Learning",
      "Analytics Platforms",
    ],
    href: "/solutions/ai-data",
    accent: "text-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Create cloud, platform, automation, reliability, and delivery capabilities that help engineering teams build and operate technology effectively.",
    capabilities: [
      "Cloud Architecture",
      "Platform Engineering",
      "CI/CD Automation",
      "Reliability Engineering",
    ],
    href: "/solutions/cloud-devops",
    accent: "text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Integrate security into architecture, software delivery, cloud environments, identity, applications, and engineering practices.",
    capabilities: [
      "Application Security",
      "Cloud Security",
      "Identity & Access",
      "DevSecOps",
    ],
    href: "/solutions/cybersecurity",
    accent: "text-emerald-600",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function EngagementAreas() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Engagement Areas
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              One challenge can require
              <span className="block text-slate-500">
                several disciplines working together.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Consulting engagements rarely fit cleanly into one technology
              category. A modernization program may involve software
              architecture, cloud platforms, data pipelines, security, and
              engineering practices at the same time.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We bring the relevant capabilities together around the problem
              instead of forcing the problem into a predefined service box.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className={`group rounded-3xl border ${area.border} ${area.soft} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span
                    className={`text-sm font-semibold tracking-[0.18em] ${area.accent}`}
                  >
                    {area.number}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${area.border} bg-white text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-950">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-white bg-white/80 px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                <p className={`mt-7 text-sm font-semibold ${area.accent}`}>
                  Explore capability
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Multidisciplinary Delivery
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                The engagement follows the problem.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-300">
              A digital product may need software engineering, cloud
              architecture, data services, security controls, observability,
              and platform automation together. Our delivery model is designed
              to bring those disciplines into one coordinated team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}