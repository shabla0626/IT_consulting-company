import Link from "next/link";

const roles = [
  {
    title: "Senior Software Engineer",
    team: "Engineering",
    location: "Location to be confirmed",
    workType: "Working arrangement to be confirmed",
    employmentType: "Full-time",
    description:
      "Work across modern applications, APIs, platforms, and engineering foundations while contributing to architecture, quality, delivery, and long-term maintainability.",
    href: "/careers/jobs/senior-software-engineer",
  },
  {
    title: "Cloud Platform Engineer",
    team: "Cloud",
    location: "Location to be confirmed",
    workType: "Working arrangement to be confirmed",
    employmentType: "Full-time",
    description:
      "Build cloud foundations, infrastructure automation, CI/CD capabilities, observability, and platform services that help engineering teams deliver reliably.",
    href: "/careers/jobs/cloud-platform-engineer",
  },
  {
    title: "Data & AI Engineer",
    team: "Data & AI",
    location: "Location to be confirmed",
    workType: "Working arrangement to be confirmed",
    employmentType: "Full-time",
    description:
      "Develop data pipelines, analytics foundations, AI-enabled applications, evaluation workflows, and production-ready data and AI systems.",
    href: "/careers/jobs/data-ai-engineer",
  },
];

export default function FeaturedRoles() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Open Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Find work that matches
              <span className="block text-slate-500">
                where you want to grow.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Explore opportunities across engineering, cloud, data, AI,
              security, design, and consulting. Each job page should clearly
              explain the role, expectations, working arrangement, and hiring
              process before you apply.
            </p>
          </div>

          <Link
            href="/careers/jobs"
            className="inline-flex w-fit items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View All Open Roles
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200">
          {roles.map((role, index) => (
            <Link
              key={role.title}
              href={role.href}
              className={`group block bg-white p-7 transition hover:bg-slate-50 sm:p-8 ${
                index !== roles.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_220px_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                      {role.team}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="text-xs font-medium text-slate-500">
                      {role.employmentType}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {role.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {role.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-800">
                    {role.location}
                  </p>

                  <p className="text-sm text-slate-500">
                    {role.workType}
                  </p>
                </div>

                <div className="flex justify-start lg:justify-end">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
          <p className="text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-900">
              Current development note:
            </span>{" "}
            These roles are representative frontend content. Final openings,
            locations, compensation, working arrangements, and employment
            details should come from the real recruiting data source once the
            jobs backend is implemented.
          </p>
        </div>
      </div>
    </section>
  );
}