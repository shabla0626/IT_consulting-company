const culturePrinciples = [
  {
    number: "01",
    title: "Collaboration over silos",
    description:
      "We want people to work across disciplines, share context, and solve problems together instead of protecting narrow areas of ownership.",
  },
  {
    number: "02",
    title: "Feedback that helps people grow",
    description:
      "Good feedback should be clear, respectful, timely, and useful. We want teams where people can challenge ideas without making work personal.",
  },
  {
    number: "03",
    title: "Ownership with support",
    description:
      "People should have meaningful responsibility, but ownership does not mean working alone. Strong teams make help, context, and expertise available when needed.",
  },
  {
    number: "04",
    title: "Quality matters",
    description:
      "We care about the details that make technology dependable: architecture, testing, security, reliability, documentation, observability, and maintainability.",
  },
  {
    number: "05",
    title: "Learning is part of the job",
    description:
      "Technology changes continuously. We want people to keep developing their judgment, technical depth, communication, and understanding of adjacent disciplines.",
  },
  {
    number: "06",
    title: "Respect for different expertise",
    description:
      "Engineering, design, cloud, data, AI, security, consulting, and business perspectives all contribute something important to successful delivery.",
  },
];

const workingValues = [
  {
    title: "Clear communication",
    description:
      "Share context early, make expectations visible, and surface risks before they become surprises.",
  },
  {
    title: "Thoughtful disagreement",
    description:
      "Challenge assumptions and technical decisions constructively while respecting the people involved.",
  },
  {
    title: "Practical decision-making",
    description:
      "Prefer useful, understandable solutions over complexity that does not create clear value.",
  },
  {
    title: "Shared success",
    description:
      "Strong delivery comes from teams succeeding together, not individuals optimizing only for their own area.",
  },
];

export default function Culture() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Our Culture
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A culture built around
              <span className="block text-slate-500">
                craft, trust, and shared ownership.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              We want people to have enough autonomy to make meaningful
              decisions, enough support to keep learning, and enough context to
              understand why the work matters.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Strong culture is not a list of slogans. It shows up in how teams
              communicate, review work, handle disagreement, share knowledge,
              respond to mistakes, and take responsibility for outcomes.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {culturePrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
                  {principle.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              How We Try to Work
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Professional without becoming rigid.
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-300">
              We want high standards without unnecessary hierarchy, thoughtful
              process without bureaucracy, and accountability without creating
              a culture where people are afraid to ask questions or surface
              problems.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workingValues.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h4 className="text-base font-semibold text-white">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}