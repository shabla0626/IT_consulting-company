const culturePrinciples = [
  {
    number: "01",
    title: "Curiosity over certainty",
    description:
      "Technology changes quickly. Asking good questions and being willing to revise an assumption are valuable professional habits.",
  },
  {
    number: "02",
    title: "Explain the reasoning",
    description:
      "Good technical decisions become more useful when teammates understand the assumptions, constraints, trade-offs, and consequences.",
  },
  {
    number: "03",
    title: "Quality is shared",
    description:
      "Reliability, maintainability, security, accessibility, and operational quality are team concerns rather than someone else's final step.",
  },
  {
    number: "04",
    title: "Share what you learn",
    description:
      "Documentation, mentoring, reviews, pairing, and open technical discussion help individual knowledge become team capability.",
  },
];

export default function Culture() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-sm">
                Culture
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Strong teams make
                <span className="block text-slate-400">
                  technical thinking visible.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                The working environment we want to build values curiosity,
                thoughtful challenge, clear communication, technical quality,
                knowledge sharing, and respect for different areas of
                expertise.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <div className="space-y-7">
                {culturePrinciples.map((principle, index) => (
                  <article
                    key={principle.number}
                    className={
                      index > 0 ? "border-t border-white/10 pt-7" : ""
                    }
                  >
                    <div className="grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[52px_1fr]">
                      <span className="text-xs font-semibold tracking-[0.16em] text-violet-300">
                        {principle.number}
                      </span>

                      <div>
                        <h3 className="text-base font-semibold text-white sm:text-lg">
                          {principle.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}