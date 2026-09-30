const qualities = [
  {
    number: "01",
    title: "Experienced people close to the work",
    description:
      "Important architecture, engineering, and delivery decisions should stay connected to practitioners who understand their consequences.",
  },
  {
    number: "02",
    title: "Advice connected to execution",
    description:
      "Recommendations are more useful when they account for what teams need to build, migrate, secure, operate, and maintain.",
  },
  {
    number: "03",
    title: "Capability across disciplines",
    description:
      "Complex problems can require software, cloud, data, AI, security, architecture, and product expertise at the same time.",
  },
  {
    number: "04",
    title: "Transparent technical reasoning",
    description:
      "Key decisions should make assumptions, trade-offs, constraints, and implications understandable to the people involved.",
  },
];

export default function WhyClientsWorkWithUs() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Working Together
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What a strong consulting
              <span className="block text-slate-400">
                relationship should provide.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              The goal is not simply to add capacity. It is to bring useful
              expertise, sound decisions, effective delivery, and stronger
              technology ownership to the problem.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            {qualities.map((quality, index) => (
              <article
                key={quality.number}
                className={`grid min-w-0 gap-4 p-6 sm:grid-cols-[52px_1fr] sm:p-7 lg:grid-cols-[64px_250px_1fr] lg:gap-7 lg:p-8 ${
                  index !== qualities.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-indigo-300">
                  {quality.number}
                </span>

                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {quality.title}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  {quality.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}