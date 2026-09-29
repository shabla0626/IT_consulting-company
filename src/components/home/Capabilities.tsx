import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Design and build reliable digital products, platforms, APIs, and modern web applications.",
    href: "/solutions/software-engineering",
    gradient: "from-blue-500 to-cyan-400",
    hover: "group-hover:text-blue-600",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Turn data into useful products with analytics, AI systems, machine learning, and intelligent automation.",
    href: "/solutions/ai-data",
    gradient: "from-violet-500 to-purple-400",
    hover: "group-hover:text-violet-600",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Modernize infrastructure, improve deployment velocity, and build scalable cloud-native platforms.",
    href: "/solutions/cloud-devops",
    gradient: "from-sky-500 to-teal-400",
    hover: "group-hover:text-sky-600",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Strengthen applications, cloud environments, identity, security architecture, and operational resilience.",
    href: "/solutions/cybersecurity",
    gradient: "from-emerald-500 to-green-400",
    hover: "group-hover:text-emerald-600",
  },
];

export default function Capabilities() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Our Capabilities
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Technology expertise built around real business problems.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              From product engineering to AI, cloud, and security, we help
              organizations modernize technology and create systems that are
              easier to scale, operate, and evolve.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="group grid gap-5 py-8 transition sm:grid-cols-[70px_1fr_auto] sm:items-start"
              >
                <span className="text-sm font-medium text-neutral-400">
                  {capability.number}
                </span>

                <div>
                  <div
                    className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${capability.gradient}`}
                  />
                  <h3
                    className={`text-2xl font-semibold tracking-tight text-neutral-950 transition-colors ${capability.hover}`}
                  >
                    {capability.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                    {capability.description}
                  </p>
                </div>

                <span
                  className="text-2xl text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-neutral-950"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
