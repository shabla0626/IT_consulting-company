import Link from "next/link";

const careerAreas = [
  {
    title: "Software Engineering",
    description:
      "Product engineering, applications, platforms, APIs, architecture, and modernization.",
  },
  {
    title: "AI & Data",
    description:
      "Data engineering, applied AI, machine learning, analytics, and production AI systems.",
  },
  {
    title: "Cloud & Platform",
    description:
      "Cloud engineering, platform engineering, DevOps, infrastructure, observability, and reliability.",
  },
  {
    title: "Cybersecurity",
    description:
      "Application security, cloud security, identity, architecture, automation, and security engineering.",
  },
];

export default function FeaturedRoles() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Open Roles
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Find the role
              <span className="block text-slate-500">
                that fits your next step.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Current vacancies, locations, employment types, experience
              levels, responsibilities, and requirements belong in the live
              Jobs Explorer rather than being duplicated here.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {careerAreas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-violet-700 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Ready to see current opportunities?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-violet-100 sm:text-base">
              Browse the live role list and filter opportunities by the details
              that matter to you.
            </p>
          </div>

          <Link
            href="/careers/jobs"
            className="mt-6 inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-800 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-white/30 sm:mt-0 sm:w-auto"
          >
            View Open Roles

            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}