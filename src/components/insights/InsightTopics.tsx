import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Architecture, product engineering, APIs, modernization, platform design, quality, and the decisions involved in building software that can evolve.",
    href: "/solutions/software-engineering",
    accent: "text-cyan-700",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Data foundations, machine learning, generative AI, evaluation, production systems, analytics, and responsible operational practices.",
    href: "/solutions/ai-data",
    accent: "text-violet-700",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, platform engineering, infrastructure automation, CI/CD, reliability, observability, and modernization strategy.",
    href: "/solutions/cloud-devops",
    accent: "text-sky-700",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Application security, cloud security, identity, DevSecOps, threat modeling, secure architecture, and engineering guardrails.",
    href: "/solutions/cybersecurity",
    accent: "text-emerald-700",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    number: "05",
    title: "Architecture & Modernization",
    description:
      "How to evolve legacy systems, simplify complexity, make better architectural trade-offs, and modernize without unnecessary disruption.",
    href: "/work/cloud-modernization-platform",
    accent: "text-indigo-700",
    soft: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    number: "06",
    title: "Engineering Leadership",
    description:
      "Delivery systems, developer experience, technical decision-making, team effectiveness, ownership, and building stronger engineering organizations.",
    href: "/company",
    accent: "text-slate-700",
    soft: "bg-slate-100",
    border: "border-slate-200",
  },
];

export default function InsightTopics() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Topics We Explore
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Practical perspectives across
            <span className="block text-slate-500">
              the technology lifecycle.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            The goal of our Insights content is to help technical and business
            leaders think more clearly about architecture, engineering,
            modernization, cloud, data, AI, security, and long-term ownership.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.href}
              className={`group rounded-3xl border ${topic.border} ${topic.soft} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  className={`text-sm font-semibold tracking-[0.18em] ${topic.accent}`}
                >
                  {topic.number}
                </span>

                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                {topic.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>

              <p className={`mt-7 text-sm font-semibold ${topic.accent}`}>
                Explore related work
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}