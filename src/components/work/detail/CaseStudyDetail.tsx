import Link from "next/link";

type DetailItem = {
  title: string;
  description: string;
};

type MetricItem = {
  label: string;
  value: string;
};

type CaseStudyDetailProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  accentText: string;
  accentBg: string;
  accentSoftBg: string;
  accentBorder: string;

  engagementType: string;
  industry: string;
  duration: string;
  team: string;

  challengeTitle: string;
  challengeDescription: string;
  challengeItems: DetailItem[];

  assessmentTitle: string;
  assessmentDescription: string;
  assessmentItems: DetailItem[];

  approachTitle: string;
  approachDescription: string;
  approachItems: DetailItem[];

  architectureTitle: string;
  architectureDescription: string;
  architectureItems: DetailItem[];

  technologyTitle: string;
  technologies: string[];

  deliveryTitle: string;
  deliveryDescription: string;
  deliveryItems: DetailItem[];

  decisionsTitle: string;
  decisionsDescription: string;
  decisions: DetailItem[];

  outcomesTitle: string;
  outcomesDescription: string;
  outcomes: MetricItem[];

  enabledTitle: string;
  enabledDescription: string;
  enabledItems: DetailItem[];

  relatedSolutions: {
    title: string;
    href: string;
  }[];

  relatedIndustry?: {
    title: string;
    href: string;
  };

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

export default function CaseStudyDetail({
  eyebrow,
  title,
  highlightedTitle,
  description,
  accentText,
  accentBg,
  accentSoftBg,
  accentBorder,
  engagementType,
  industry,
  duration,
  team,
  challengeTitle,
  challengeDescription,
  challengeItems,
  assessmentTitle,
  assessmentDescription,
  assessmentItems,
  approachTitle,
  approachDescription,
  approachItems,
  architectureTitle,
  architectureDescription,
  architectureItems,
  technologyTitle,
  technologies,
  deliveryTitle,
  deliveryDescription,
  deliveryItems,
  decisionsTitle,
  decisionsDescription,
  decisions,
  outcomesTitle,
  outcomesDescription,
  outcomes,
  enabledTitle,
  enabledDescription,
  enabledItems,
  relatedSolutions,
  relatedIndustry,
  ctaEyebrow,
  ctaTitle,
  ctaDescription,
}: CaseStudyDetailProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`absolute -right-32 top-0 h-96 w-96 rounded-full ${accentBg} opacity-10 blur-3xl`}
        />
        <div
          className={`absolute -left-32 bottom-0 h-80 w-80 rounded-full ${accentBg} opacity-10 blur-3xl`}
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

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {description}
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Overview */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Engagement", engagementType],
              ["Industry", industry],
              ["Duration", duration],
              ["Team", team],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
                The Challenge
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {challengeTitle}
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-600">
                {challengeDescription}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {challengeItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border ${accentBorder} ${accentSoftBg} p-7`}
                >
                  <span className={`text-sm font-semibold ${accentText}`}>
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

      {/* Assessment */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              Our Assessment
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {assessmentTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {assessmentDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {assessmentItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {approachTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {approachDescription}
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {approachItems.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-3xl border border-slate-200 p-7 md:grid-cols-[80px_1fr] sm:p-8"
              >
                <span className={`text-sm font-semibold ${accentText}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-slate-950 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              Solution Architecture
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {architectureTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-300">
              {architectureDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {architectureItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {technologyTitle}
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              Delivery
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {deliveryTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {deliveryDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {deliveryItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
                Decisions & Trade-offs
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {decisionsTitle}
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-600">
                {decisionsDescription}
              </p>
            </div>

            <div className="space-y-5">
              {decisions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-7"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
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

      {/* Outcomes */}
      <section className={`${accentBg} py-24 text-white sm:py-28`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {outcomesTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-white/80">
              {outcomesDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-7"
              >
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Enabled */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              What This Enabled
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {enabledTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {enabledDescription}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {enabledItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Related Solutions
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {relatedSolutions.map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>

            {relatedIndustry && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Related Industry
                </p>

                <Link
                  href={relatedIndustry.href}
                  className="mt-5 inline-flex text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                  {relatedIndustry.title}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}>
                {ctaEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {ctaTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                {ctaDescription}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
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