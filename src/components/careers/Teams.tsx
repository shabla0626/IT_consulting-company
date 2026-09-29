import Link from "next/link";

const teams = [
  {
    number: "01",
    title: "Engineering",
    description:
      "Build digital products, platforms, APIs, services, and engineering foundations across modern software environments.",
    focus: [
      "Frontend Engineering",
      "Backend Engineering",
      "Platform Engineering",
      "Quality Engineering",
    ],
    href: "/careers/jobs?team=engineering",
    accent: "text-cyan-700",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    number: "02",
    title: "Cloud",
    description:
      "Design cloud foundations, developer platforms, infrastructure automation, CI/CD systems, and reliability capabilities.",
    focus: [
      "Cloud Architecture",
      "DevOps",
      "Infrastructure as Code",
      "Site Reliability",
    ],
    href: "/careers/jobs?team=cloud",
    accent: "text-sky-700",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    number: "03",
    title: "Data & AI",
    description:
      "Build data platforms, analytics systems, machine-learning capabilities, and production-ready AI applications.",
    focus: [
      "Data Engineering",
      "Machine Learning",
      "Generative AI",
      "AI Operations",
    ],
    href: "/careers/jobs?team=data-ai",
    accent: "text-violet-700",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Shape useful, accessible, and thoughtful digital experiences while working closely with product, engineering, and consulting teams.",
    focus: [
      "Product Design",
      "UX Research",
      "Interaction Design",
      "Design Systems",
    ],
    href: "/careers/jobs?team=design",
    accent: "text-fuchsia-700",
    soft: "bg-fuchsia-50",
    border: "border-fuchsia-100",
  },
  {
    number: "05",
    title: "Consulting",
    description:
      "Connect business context, technology strategy, delivery, architecture, and client collaboration across complex engagements.",
    focus: [
      "Technology Strategy",
      "Architecture",
      "Delivery Leadership",
      "Client Collaboration",
    ],
    href: "/careers/jobs?team=consulting",
    accent: "text-indigo-700",
    soft: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    number: "06",
    title: "Security",
    description:
      "Integrate security into applications, cloud environments, identity, architecture, engineering workflows, and delivery practices.",
    focus: [
      "Application Security",
      "Cloud Security",
      "Identity & Access",
      "DevSecOps",
    ],
    href: "/careers/jobs?team=security",
    accent: "text-emerald-700",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function Teams() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Our Teams
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Find the discipline where
            <span className="block text-slate-500">
              your strengths can grow.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Our teams have distinct areas of expertise, but they do not work in
            isolation. Client engagements often bring several disciplines
            together around the same technology challenge.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Link
              key={team.title}
              href={team.href}
              className={`group rounded-3xl border ${team.border} ${team.soft} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  className={`text-sm font-semibold tracking-[0.18em] ${team.accent}`}
                >
                  {team.number}
                </span>

                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                {team.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {team.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {team.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white bg-white/80 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className={`mt-7 text-sm font-semibold ${team.accent}`}>
                View related roles
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                Cross-Functional Work
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Your team is your home base, not your boundary.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-300">
              An engagement may bring together software engineers, cloud
              specialists, data and AI practitioners, designers, security
              engineers, and consultants. You can develop depth in your own
              discipline while learning how other specialties contribute to the
              same outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}