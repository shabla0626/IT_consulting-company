const reasons = [
  {
    number: "01",
    title: "Senior people stay close to the work.",
    description:
      "Experienced consultants and engineers remain involved in architecture, technical decisions, delivery, and problem-solving rather than disappearing after the initial engagement.",
  },
  {
    number: "02",
    title: "We connect strategy to implementation.",
    description:
      "Recommendations stay grounded in what can actually be designed, built, deployed, operated, and maintained by real engineering teams.",
  },
  {
    number: "03",
    title: "We bring disciplines together.",
    description:
      "Software, cloud, data, AI, security, platform, and delivery expertise can work as one coordinated team around the same business problem.",
  },
  {
    number: "04",
    title: "We make trade-offs visible.",
    description:
      "Clients should understand why technical decisions are being made, what alternatives were considered, and what risks or constraints come with each direction.",
  },
  {
    number: "05",
    title: "We build for ownership.",
    description:
      "Architecture, documentation, observability, engineering practices, and knowledge transfer are designed so internal teams can continue operating and evolving the result.",
  },
  {
    number: "06",
    title: "We focus on the problem, not a fixed service package.",
    description:
      "The engagement is shaped around the actual challenge rather than forcing every client into the same predefined delivery model or technology stack.",
  },
];

export default function WhyClientsWorkWithUs() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Why Clients Work With Us
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A consulting partner,
              <span className="block text-slate-400">
                not simply extra capacity.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Clients should expect more from consulting than additional
              developers or a set of recommendations. The value is in bringing
              judgment, technical depth, coordinated delivery, and ownership
              together around the problem.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">
                The difference we aim to create
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Better technical decisions, stronger engineering foundations,
                clearer ownership, and a solution the client can continue to
                evolve after the engagement.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-indigo-300">
                  {reason.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Advisory + Engineering
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Technical direction remains connected to implementation.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Multidisciplinary
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                The right expertise is combined around the engagement.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Ownership-focused
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                The client should become stronger, not more dependent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}