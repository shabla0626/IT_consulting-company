import Link from "next/link";

type DetailItem =
  | string
  | {
      title: string;
      description: string;
    };

type SolutionDetailProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  accentText: string;
  accentBg: string;
  accentSoftBg: string;
  accentDot: string;

  capabilityEyebrow: string;
  capabilityTitle: string;
  capabilityDescription: string;
  capabilities: DetailItem[];

  approachEyebrow: string;
  approachTitle: string;
  approachDescription: string;
  approach: DetailItem[];

  technologyTitle: string;
  technologyAreas: string[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;

  [key: string]: unknown;
};

function getItemTitle(item: DetailItem) {
  return typeof item === "string" ? item : item.title;
}

function getItemDescription(item: DetailItem) {
  return typeof item === "string" ? null : item.description;
}

export default function SolutionDetail({
  eyebrow,
  title,
  highlightedTitle,
  description,
  accentText,
  accentBg,
  accentSoftBg,
  accentDot,
  capabilityEyebrow,
  capabilityTitle,
  capabilityDescription,
  capabilities,
  approachEyebrow,
  approachTitle,
  approachDescription,
  approach,
  technologyTitle,
  technologyAreas,
  ctaEyebrow,
  ctaTitle,
  ctaDescription,
}: SolutionDetailProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10 blur-3xl sm:h-96 sm:w-96 ${accentBg}`}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                  aria-hidden="true"
                />

                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
                >
                  {eyebrow}
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
                {title}

                <span className="block text-slate-400">
                  {highlightedTitle}
                </span>
              </h1>
            </div>

            <div className="min-w-0 lg:pb-1">
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
                >
                  Talk to an Expert
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                {capabilityEyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {capabilityTitle}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              {capabilityDescription}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
            {capabilities.map((capability, index) => {
              const description = getItemDescription(capability);

              return (
                <article
                  key={`${getItemTitle(capability)}-${index}`}
                  className={`grid min-w-0 gap-4 p-6 sm:p-7 md:grid-cols-[60px_1fr] lg:grid-cols-[80px_300px_1fr] lg:gap-8 lg:p-8 ${
                    index !== capabilities.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] sm:text-sm ${accentText}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {getItemTitle(capability)}
                  </h3>

                  {description && (
                    <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {description}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                {approachEyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {approachTitle}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              {approachDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {approach.map((item, index) => {
              const description = getItemDescription(item);

              return (
                <article
                  key={`${getItemTitle(item)}-${index}`}
                  className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-xs font-semibold tracking-[0.18em] ${accentText}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {getItemTitle(item)}
                  </h3>

                  {description && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology areas */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                Technology Areas
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {technologyTitle}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {technologyAreas.map((technology) => (
                <div
                  key={technology}
                  className={`flex min-h-14 min-w-0 items-center gap-3 rounded-2xl border border-slate-200 p-4 sm:p-5 ${accentSoftBg}`}
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                    aria-hidden="true"
                  />

                  <span className="min-w-0 text-sm font-semibold text-slate-800 sm:text-base">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                {ctaEyebrow}
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {ctaTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}