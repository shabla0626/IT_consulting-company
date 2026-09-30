import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Design, build, modernize, and scale software products, platforms, APIs, and engineering foundations.",
    areas: [
      "Product Engineering",
      "Application Modernization",
      "APIs & Platforms",
      "Engineering Quality",
    ],
    href: "/solutions/software-engineering",
    accent: "text-cyan-700",
    accentBg: "bg-cyan-50",
    accentBorder: "border-cyan-100",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Turn data and AI opportunities into dependable platforms, analytics capabilities, and production-ready applications.",
    areas: [
      "Data Platforms",
      "Applied AI",
      "Analytics",
      "AI Operations",
    ],
    href: "/solutions/ai-data",
    accent: "text-violet-700",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Build cloud foundations, delivery platforms, automation, and reliability practices that help teams move with confidence.",
    areas: [
      "Cloud Modernization",
      "Platform Engineering",
      "DevOps",
      "Reliability",
    ],
    href: "/solutions/cloud-devops",
    accent: "text-sky-700",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-100",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Integrate security into applications, cloud environments, identity, architecture, and engineering delivery.",
    areas: [
      "Application Security",
      "Cloud Security",
      "Identity",
      "DevSecOps",
    ],
    href: "/solutions/cybersecurity",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Technology expertise
              <span className="block text-slate-500">
                connected to real outcomes.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Complex technology problems rarely belong to one discipline.
              We bring together the engineering, cloud, data, AI, security,
              design, and consulting capabilities needed for the challenge.
            </p>
          </div>
        </div>

        {/* Capability grid */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-6">
          {capabilities.map((capability) => (
            <Link
              key={capability.title}
              href={capability.href}
              className={`group min-w-0 rounded-3xl border ${capability.accentBorder} ${capability.accentBg} p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-7 lg:p-8`}
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className={`text-xs font-semibold tracking-[0.18em] sm:text-sm ${capability.accent}`}
                >
                  {capability.number}
                </span>

                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-white text-slate-700 shadow-sm transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {capability.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {capability.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {capability.areas.map((area) => (
                  <span
                    key={area}
                    className="max-w-full rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-slate-900/5 pt-5">
                <span
                  className={`inline-flex items-center text-sm font-semibold ${capability.accent}`}
                >
                  Explore capability
                  <span
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Cross-functional positioning */}
        <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white sm:mt-14 sm:p-9 lg:mt-16 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:text-sm">
                One Problem, Multiple Disciplines
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                The right team depends on the challenge.
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              A modernization program may involve software engineering, cloud,
              security, data, and product thinking at the same time. We shape
              teams around what the work requires rather than forcing every
              engagement into one predefined service category.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}