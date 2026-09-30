import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Design, modernize, or scale software products, applications, APIs, and engineering platforms with stronger architecture, quality, and maintainability.",
    examples: [
      "Application modernization",
      "Product engineering",
      "API & platform development",
      "Engineering quality",
    ],
    href: "/solutions/software-engineering",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Turn data and AI opportunities into practical systems, from data foundations and analytics to production-ready AI-enabled applications.",
    examples: [
      "Data platforms",
      "AI-enabled products",
      "Analytics foundations",
      "Production AI systems",
    ],
    href: "/solutions/ai-data",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Improve cloud foundations, delivery pipelines, infrastructure automation, reliability, and developer experience across modern technology environments.",
    examples: [
      "Cloud modernization",
      "Platform engineering",
      "DevOps transformation",
      "Reliability & observability",
    ],
    href: "/solutions/cloud-devops",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Strengthen applications, cloud environments, identity, architecture, and engineering delivery by integrating security into how technology is built and operated.",
    examples: [
      "Application security",
      "Cloud security",
      "Identity & access",
      "DevSecOps",
    ],
    href: "/solutions/cybersecurity",
  },
];

export default function ContactAreas() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              What Can We Help With?
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Start with the challenge,
              <span className="block text-slate-500">
                not the service label.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Technology problems rarely fit neatly into one category. A cloud
              initiative may involve software architecture. An AI project may
              depend on data foundations, security, and platform engineering.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Choose the area that feels closest to your situation, or simply
              describe the problem in your own terms when you contact us.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            {areas.map((area, index) => (
              <article
                key={area.title}
                className={`group p-7 transition duration-300 hover:bg-white sm:p-8 ${
                  index !== areas.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="grid gap-6 md:grid-cols-[72px_1fr_auto] md:items-start">
                  <span className="text-sm font-semibold tracking-[0.18em] text-indigo-700">
                    {area.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={area.href}
                    aria-label={`Explore ${area.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                  >
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Broader Technology Challenge
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Not sure where it fits?
              </h3>
            </div>

            <div>
              <p className="text-base leading-7 text-slate-600">
                That is completely fine. Many engagements begin with an
                unclear or cross-functional problem. Tell us what is changing,
                where progress is blocked, what risks you are facing, or what
                outcome you are trying to achieve.
              </p>

              <a
                href="#contact-form"
                className="mt-5 inline-flex text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
              >
                Describe your challenge
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}