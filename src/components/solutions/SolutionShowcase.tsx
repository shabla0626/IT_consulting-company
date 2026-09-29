import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Software Engineering",
    eyebrow: "Build",
    description:
      "Design and engineer modern applications, APIs, digital products, and platforms that are reliable, maintainable, and built to evolve.",
    capabilities: [
      "Web & product engineering",
      "Platform development",
      "API architecture",
      "Application modernization",
      "Engineering enablement",
    ],
    href: "/solutions/software-engineering",
    gradient: "from-blue-500 to-cyan-400",
    background: "from-blue-50 to-cyan-50",
    text: "text-blue-600",
  },
  {
    number: "02",
    title: "AI & Data",
    eyebrow: "Intelligence",
    description:
      "Turn fragmented information into useful data products, intelligent applications, analytics platforms, and production-ready AI systems.",
    capabilities: [
      "Generative AI applications",
      "Data engineering",
      "Machine learning",
      "Analytics platforms",
      "AI operations",
    ],
    href: "/solutions/ai-data",
    gradient: "from-violet-500 to-purple-400",
    background: "from-violet-50 to-purple-50",
    text: "text-violet-600",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    eyebrow: "Modernize",
    description:
      "Create scalable cloud foundations, automate delivery, strengthen reliability, and improve the experience of engineering teams.",
    capabilities: [
      "Cloud architecture",
      "Platform engineering",
      "CI/CD automation",
      "Infrastructure as code",
      "Observability & reliability",
    ],
    href: "/solutions/cloud-devops",
    gradient: "from-sky-500 to-teal-400",
    background: "from-sky-50 to-teal-50",
    text: "text-sky-600",
  },
  {
    number: "04",
    title: "Cybersecurity",
    eyebrow: "Protect",
    description:
      "Build security into applications, cloud platforms, identity systems, architecture, and engineering practices from the beginning.",
    capabilities: [
      "Application security",
      "Cloud security",
      "Identity & access",
      "Security architecture",
      "DevSecOps",
    ],
    href: "/solutions/cybersecurity",
    gradient: "from-emerald-500 to-green-400",
    background: "from-emerald-50 to-green-50",
    text: "text-emerald-600",
  },
];

export default function SolutionShowcase() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">What We Do</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            One technology partner.
            <span className="block text-neutral-400">Multiple disciplines.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className={`overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br ${solution.background}`}
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-semibold ${solution.text}`}>{solution.eyebrow}</p>
                    <p className="text-sm font-medium text-neutral-400">{solution.number}</p>
                  </div>

                  <div className={`mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r ${solution.gradient}`} />

                  <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-4xl">
                    {solution.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
                    {solution.description}
                  </p>

                  <Link href={solution.href} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
                    Explore {solution.title}
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="border-t border-neutral-200/80 bg-white/50 p-7 backdrop-blur sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Capabilities</p>
                  <div className="mt-6 divide-y divide-neutral-200">
                    {solution.capabilities.map((capability, index) => (
                      <div key={capability} className="flex items-center gap-5 py-4">
                        <span className="text-xs font-medium text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                        <span className="text-base font-medium text-neutral-800">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
