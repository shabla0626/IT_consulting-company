const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We start with the business problem, users, constraints, systems, and outcomes that matter.",
  },
  {
    number: "02",
    title: "Design",
    description: "We shape the product, architecture, technical approach, and delivery plan together.",
  },
  {
    number: "03",
    title: "Build",
    description: "Multidisciplinary teams turn the strategy into working technology through iterative delivery.",
  },
  {
    number: "04",
    title: "Improve",
    description: "We measure, operate, optimize, and help internal teams continue evolving the system.",
  },
];

export default function DeliveryProcess() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">How We Work</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              From uncertainty to working technology.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              Consulting and engineering stay connected throughout the engagement so strategy does not become disconnected from implementation.
            </p>
          </div>

          <div className="border-t border-white/10">
            {steps.map((step) => (
              <div key={step.number} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] lg:py-8">
                <span className="text-sm font-medium text-indigo-400">{step.number}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
