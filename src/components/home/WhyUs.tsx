const principles = [
  {
    number: "01",
    title: "Senior expertise stays involved",
    description:
      "Experienced engineers, architects, designers, and consultants stay close to the work from strategy through delivery.",
  },
  {
    number: "02",
    title: "Business outcomes come first",
    description:
      "Technology decisions are connected to measurable goals such as speed, reliability, customer experience, and operational efficiency.",
  },
  {
    number: "03",
    title: "One multidisciplinary team",
    description:
      "Strategy, design, engineering, cloud, data, and security work together instead of operating as disconnected functions.",
  },
  {
    number: "04",
    title: "Built for long-term ownership",
    description:
      "We design systems that internal teams can understand, operate, maintain, and continue improving after delivery.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Why Work With Us
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Consulting that stays close to the technology and the outcome.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We combine strategic thinking with hands-on delivery. Our goal is
              not only to recommend what should change, but to help design,
              build, and improve the systems that make that change real.
            </p>
          </div>

          {/* Principles */}
          <div className="grid gap-px overflow-hidden rounded-3xl bg-neutral-300 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group bg-white p-7 transition-colors hover:bg-neutral-950 sm:p-8"
              >
                <p className="text-sm font-medium text-neutral-400 transition-colors group-hover:text-neutral-600">
                  {principle.number}
                </p>

                <h3 className="mt-12 text-xl font-semibold tracking-tight text-neutral-950 transition-colors group-hover:text-white sm:text-2xl">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600 transition-colors group-hover:text-neutral-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}