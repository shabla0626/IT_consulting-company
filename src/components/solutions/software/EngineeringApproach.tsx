const principles = [
  { number: "01", title: "Start with the problem", description: "Technology decisions begin with the business objective, users, operational constraints, and desired outcomes." },
  { number: "02", title: "Design for change", description: "Architecture should support future change without turning every new requirement into a major rewrite." },
  { number: "03", title: "Automate quality", description: "Testing, delivery, infrastructure, security checks, and observability become part of the engineering workflow." },
  { number: "04", title: "Operate what we build", description: "Reliability, monitoring, deployment, troubleshooting, and maintainability are considered from the beginning." },
];

export default function EngineeringApproach() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">Engineering Approach</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Software that works today and remains workable tomorrow.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">Good engineering is not only about shipping features. It is also about creating systems that remain understandable, reliable, and adaptable as the business changes.</p>
          </div>

          <div className="border-t border-white/10">
            {principles.map((principle) => (
              <div key={principle.number} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] lg:py-8">
                <span className="text-sm font-medium text-cyan-400">{principle.number}</span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{principle.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
