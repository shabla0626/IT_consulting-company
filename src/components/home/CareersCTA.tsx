import Link from "next/link";

const careerPoints = [
  {
    title: "Meaningful technology work",
    description:
      "Contribute to software, cloud, data, AI, security, design, and consulting challenges that require real problem-solving.",
  },
  {
    title: "Experienced multidisciplinary teams",
    description:
      "Work with people from different disciplines and learn how strong technology decisions come together across an engagement.",
  },
  {
    title: "Growth through ownership",
    description:
      "Build depth, broaden your perspective, and take on increasing responsibility as your experience develops.",
  },
];

export default function CareersCTA() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          {/* Main message */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
              Build With Us
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Do meaningful technology work
              <span className="block text-slate-400">
                with people who care about the craft.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
              Nexora is being built as a place where experienced practitioners
              can solve difficult technology problems, learn across
              disciplines, take meaningful ownership, and keep developing
              their craft.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/careers"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Explore Careers
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/careers/jobs"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                View Open Roles
              </Link>
            </div>
          </div>

          {/* Supporting points */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            {careerPoints.map((point, index) => (
              <article
                key={point.title}
                className={`grid gap-4 p-6 sm:p-7 ${
                  index !== careerPoints.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-xs font-semibold text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom path */}
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-14 lg:mt-16">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Explore the culture
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn how we think about collaboration, ownership, feedback,
                and quality.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Find your team
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Explore engineering, cloud, data, AI, security, design, and
                consulting career paths.
              </p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-white">
                Review open roles
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Search opportunities by discipline, experience level, and
                working arrangement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}