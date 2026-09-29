const reasons = [
  {
    number: "01",
    title: "Work on meaningful technology problems",
    description:
      "Contribute to software, cloud, data, AI, security, and platform challenges that require real technical thinking rather than repetitive implementation work.",
  },
  {
    number: "02",
    title: "Learn from experienced practitioners",
    description:
      "Work alongside people with different technical and consulting backgrounds, and learn through real collaboration rather than isolated delivery.",
  },
  {
    number: "03",
    title: "Take ownership of the work",
    description:
      "We want people to understand the problem, participate in decisions, and take responsibility for the quality and long-term maintainability of what they help build.",
  },
  {
    number: "04",
    title: "Grow across disciplines",
    description:
      "Projects often cross software engineering, cloud, data, AI, security, product, and consulting, creating opportunities to broaden your perspective.",
  },
  {
    number: "05",
    title: "Work with clarity and transparency",
    description:
      "Good teams make goals, trade-offs, risks, feedback, and expectations visible instead of relying on unnecessary hierarchy or hidden decision-making.",
  },
  {
    number: "06",
    title: "Build things that last",
    description:
      "Quality, reliability, security, documentation, observability, and maintainability are part of the work—not tasks left until the end.",
  },
];

export default function WhyJoinUs() {
  return (
    <section id="life-at-nexora" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Why Join Us
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Build your career around
              <span className="block text-slate-500">
                meaningful work and strong craft.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              We want Nexora to be a place where people can do serious
              technology work, learn from experienced teammates, contribute
              beyond a narrow job description, and grow through real
              responsibility.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              The goal is not simply to fill project roles. It is to build
              teams of people who care about solving problems well and who
              continue developing their skills while doing it.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
                  {reason.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                What We Want to Build
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                A place where strong people make each other better.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-300">
              The best consulting teams combine technical depth, curiosity,
              communication, humility, and ownership. We want people to learn
              from one another, challenge ideas constructively, and take pride
              in both the quality of the work and the way it gets delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}