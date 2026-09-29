const capabilities = [
  { number: "01", title: "Digital Product Engineering", description: "Design and build customer-facing digital products from early concept through production and continuous improvement." },
  { number: "02", title: "Web Application Development", description: "Modern, responsive, accessible web applications built around maintainable architecture and strong user experiences." },
  { number: "03", title: "Platform Engineering", description: "Shared technical platforms that improve consistency, reliability, developer productivity, and delivery speed." },
  { number: "04", title: "API & Backend Engineering", description: "Reliable services, APIs, integrations, and backend systems designed around clear domain and operational boundaries." },
  { number: "05", title: "Application Modernization", description: "Incrementally improve legacy applications and architecture without forcing unnecessary full-system rewrites." },
  { number: "06", title: "Engineering Enablement", description: "Improve developer workflows, technical standards, testing, automation, observability, and delivery practices." },
];

export default function SoftwareCapabilities() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">What We Build</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">Engineering across the product lifecycle.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">Our teams work across frontend, backend, platform, architecture, quality, and operations to turn business ideas into sustainable software.</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-neutral-200 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.number} className="bg-white p-7 sm:p-8">
                <p className="text-sm font-medium text-blue-600">{capability.number}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-neutral-950">{capability.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
