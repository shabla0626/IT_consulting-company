import Link from "next/link";

type IndustryItem = {
  title: string;
  description: string;
};

type IndustryDetailProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  accentText: string;
  accentBg: string;
  accentSoftBg: string;
  accentBorder: string;

  contextEyebrow: string;
  contextTitle: string;
  contextDescription: string;
  contextItems: IndustryItem[];

  capabilityEyebrow: string;
  capabilityTitle: string;
  capabilityDescription: string;
  capabilities: IndustryItem[];

  focusTitle: string;
  focusAreas: string[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

export default function IndustryDetail({
  eyebrow,
  title,
  highlightedTitle,
  description,
  accentText,
  accentBg,
  accentSoftBg,
  accentBorder,
  contextEyebrow,
  contextTitle,
  contextDescription,
  contextItems,
  capabilityEyebrow,
  capabilityTitle,
  capabilityDescription,
  capabilities,
  focusTitle,
  focusAreas,
  ctaEyebrow,
  ctaTitle,
  ctaDescription,
}: IndustryDetailProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`absolute -right-32 top-0 h-96 w-96 rounded-full ${accentBg} opacity-10 blur-3xl`}
        />

        <div
          className={`absolute -left-40 bottom-0 h-80 w-80 rounded-full ${accentBg} opacity-10 blur-3xl`}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.22em] ${accentText}`}
            >
              {eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
              <span className={`block ${accentText}`}>
                {highlightedTitle}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Talk to an Expert
              </Link>

              <Link
                href="/industries"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Explore Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}
              >
                {contextEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {contextTitle}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                {contextDescription}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {contextItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border ${accentBorder} ${accentSoftBg} p-7`}
                >
                  <span
                    className={`text-sm font-semibold tracking-[0.15em] ${accentText}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}
            >
              {capabilityEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {capabilityTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {capabilityDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5"
              >
                <span
                  className={`text-sm font-semibold tracking-[0.15em] ${accentText}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {focusTitle}
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${accentBg} py-20 text-white sm:py-24`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {ctaEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {ctaTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
                {ctaDescription}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to an Expert
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}