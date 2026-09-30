const reasons = [
  {
    number: "01",
    title: "Work on connected technology problems",
    description:
      "The most interesting challenges rarely belong to only one discipline. Software, cloud, data, AI, security, and architecture often meet in the same system.",
  },
  {
    number: "02",
    title: "Stay close to the technical work",
    description:
      "Consulting should not separate thinking from execution. Technical decisions are strongest when experienced practitioners remain involved.",
  },
  {
    number: "03",
    title: "Learn across disciplines",
    description:
      "Build depth in your own area while gaining a stronger understanding of the technologies, teams, and decisions around it.",
  },
  {
    number: "04",
    title: "Help shape what we build",
    description:
      "Growing a consulting company creates opportunities to improve practices, ways of working, knowledge sharing, and the employee experience.",
  },
];

export default function WhyJoinUs() {
  return (
    <section
      id="life-at-company"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Why Join Us
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Build depth
              <span className="block text-slate-500">
                without working in a silo.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            A strong consulting career combines technical expertise,
            communication, curiosity, collaboration, and an understanding of
            how different parts of a technology environment affect one another.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="rounded-3xl border border-violet-100 bg-violet-50/50 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                  {reason.number}
                </span>

                <span
                  className="h-2 w-2 rounded-full bg-violet-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}