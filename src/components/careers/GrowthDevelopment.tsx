const growthAreas = [
  {
    number: "01",
    title: "Learn through meaningful work",
    description:
      "Growth comes from solving real problems, taking on increasing responsibility, and working through decisions that require both technical depth and judgment.",
  },
  {
    number: "02",
    title: "Learn from experienced people",
    description:
      "Strong teams create opportunities to learn through collaboration, code and design reviews, architecture discussions, delivery retrospectives, and shared problem-solving.",
  },
  {
    number: "03",
    title: "Build depth and breadth",
    description:
      "People should be able to deepen their primary discipline while gaining a stronger understanding of adjacent areas such as cloud, data, AI, security, product, and consulting.",
  },
  {
    number: "04",
    title: "Grow into greater ownership",
    description:
      "As experience develops, so should responsibility for technical decisions, client communication, mentoring, delivery leadership, and wider project outcomes.",
  },
];

const developmentPaths = [
  {
    label: "Technical depth",
    description:
      "Develop deeper expertise in architecture, engineering, cloud, data, AI, security, platform, design, or another specialist discipline.",
  },
  {
    label: "Delivery leadership",
    description:
      "Grow into broader responsibility for coordination, planning, technical direction, risk, quality, and successful delivery.",
  },
  {
    label: "Consulting capability",
    description:
      "Strengthen communication, discovery, facilitation, stakeholder collaboration, problem framing, and technical advisory skills.",
  },
  {
    label: "People development",
    description:
      "Support the growth of others through mentoring, feedback, knowledge sharing, and leadership within teams.",
  },
];

export default function GrowthDevelopment() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Growth & Development
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Keep developing
              <span className="block text-slate-500">
                without following one narrow path.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Careers in technology do not all develop in the same direction.
              Some people want deeper technical specialization. Others grow
              toward architecture, consulting, delivery leadership, mentoring,
              or a combination of these.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We want development to reflect individual strengths, interests,
              experience, and the responsibilities people are ready to take on.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            {growthAreas.map((area, index) => (
              <article
                key={area.number}
                className={`grid gap-5 p-7 sm:p-8 md:grid-cols-[80px_1fr] ${
                  index !== growthAreas.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-violet-700">
                  {area.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Development Paths
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Different ways to grow.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Career development should not require everyone to become a
                manager. Strong specialist, consulting, delivery, and
                leadership paths can all create meaningful progression.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {developmentPaths.map((path) => (
                <article
                  key={path.label}
                  className="border-l border-slate-300 pl-5"
                >
                  <h4 className="text-base font-semibold text-slate-950">
                    {path.label}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {path.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                Development Philosophy
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Growth should increase judgment, not just title.
              </h3>
            </div>

            <p className="text-base leading-7 text-slate-300">
              Progression should mean stronger technical judgment, broader
              context, better communication, greater ownership, and the ability
              to help other people and teams succeed—not simply moving through
              a sequence of job titles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}