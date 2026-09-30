const capabilities = [
  {
    number: "01",
    title: "Digital Product Engineering",
    description:
      "Design and build digital products that connect user needs, business goals, architecture, and reliable engineering delivery.",
    areas: ["Product Architecture", "Frontend", "Backend", "Delivery"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Build modern web applications with maintainable frontend architecture, dependable services, strong performance, and accessible user experiences.",
    areas: ["Web Platforms", "Frontend", "Performance", "Accessibility"],
  },
  {
    number: "03",
    title: "Platform Engineering",
    description:
      "Create reusable platform foundations that help engineering teams build, deploy, operate, and evolve software more effectively.",
    areas: ["Developer Platforms", "Automation", "Cloud Native", "Observability"],
  },
  {
    number: "04",
    title: "API & Backend Engineering",
    description:
      "Design APIs, services, integrations, and backend systems around clear contracts, reliability, scalability, and maintainability.",
    areas: ["APIs", "Services", "Integrations", "Data"],
  },
  {
    number: "05",
    title: "Application Modernization",
    description:
      "Evolve legacy applications incrementally by improving architecture, reducing technical constraints, and creating safer paths for future change.",
    areas: ["Legacy Modernization", "Architecture", "Cloud", "Migration"],
  },
  {
    number: "06",
    title: "Engineering Enablement",
    description:
      "Improve the practices and technical foundations that support quality, delivery speed, observability, developer experience, and ownership.",
    areas: ["Quality", "CI/CD", "Observability", "Developer Experience"],
  },
];

export default function SoftwareCapabilities() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
              What We Build
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Software engineering
              <span className="block text-slate-500">
                across the full system.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Strong software depends on more than individual features. We work
              across products, platforms, APIs, architecture, modernization,
              and engineering practices to improve the system as a whole.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
          {capabilities.map((capability, index) => (
            <article
              key={capability.number}
              className={`grid min-w-0 gap-5 p-6 sm:p-7 lg:grid-cols-[70px_280px_1fr] lg:gap-8 lg:p-8 ${
                index !== capabilities.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              {/* Number */}
              <div>
                <span className="text-xs font-semibold tracking-[0.18em] text-cyan-700 sm:text-sm">
                  {capability.number}
                </span>
              </div>

              {/* Title */}
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {capability.title}
                </h3>
              </div>

              {/* Detail */}
              <div className="min-w-0">
                <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {capability.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {capability.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Engineering scope */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Product
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              Build what users need.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Connect product thinking, experience, architecture, and
              engineering around the same outcome.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Platform
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              Strengthen the foundations.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Improve APIs, services, cloud foundations, automation, and the
              systems that support engineering teams.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Practice
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              Improve how software is delivered.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Treat quality, observability, automation, and developer
              experience as part of the engineering system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}