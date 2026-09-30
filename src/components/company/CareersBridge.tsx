import Link from "next/link";

const careerPoints = [
  "Work on multidisciplinary technology problems",
  "Learn alongside experienced practitioners",
  "Develop depth without losing broader context",
];

export default function CareersBridge() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
                Careers
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                The company we build
                <span className="block text-slate-500">
                  depends on the people building it.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                We want Careers to be more than a list of vacancies. It should
                explain the kind of work, teams, learning, culture, and
                professional environment candidates could become part of.
              </p>

              <Link
                href="/careers"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-700/10 sm:w-auto"
              >
                Explore Careers

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="border-t border-violet-100 bg-violet-50 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                People + Technology
              </p>

              <div className="mt-7 space-y-5">
                {careerPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`flex gap-4 ${
                      index > 0 ? "border-t border-violet-200 pt-5" : ""
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-[0.16em] text-violet-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-violet-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-950">
                  Looking for open positions?
                </p>

                <Link
                  href="/careers/jobs"
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-violet-700 transition hover:text-violet-900"
                >
                  View open roles

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}