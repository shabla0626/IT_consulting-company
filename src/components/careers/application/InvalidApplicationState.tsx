import Link from "next/link";

type InvalidApplicationStateProps = {
  type?: "missing" | "unknown" | "closed";
};

const states = {
  missing: {
    symbol: "?",
    eyebrow: "No Role Selected",
    title: "Choose a role before starting an application.",
    description:
      "Applications should begin from an open role so we know which opportunity you are applying for.",
  },

  unknown: {
    symbol: "!",
    eyebrow: "Role Not Found",
    title: "We could not find the selected role.",
    description:
      "The role may have changed, been removed, or the application link may no longer be valid.",
  },

  closed: {
    symbol: "×",
    eyebrow: "Applications Closed",
    title: "This role is not currently accepting applications.",
    description:
      "Explore the current opportunities to find another role that matches your experience.",
  },
};

export default function InvalidApplicationState({
  type = "unknown",
}: InvalidApplicationStateProps) {
  const content = states[type];

  return (
    <main className="bg-slate-50">
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10 lg:p-12">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-xl font-semibold text-violet-700"
            aria-hidden="true"
          >
            {content.symbol}
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
            {content.eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/careers/jobs"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-700/10 sm:w-auto"
            >
              View Open Roles
            </Link>

            <Link
              href="/careers"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-950/5 sm:w-auto"
            >
              Back to Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}