import Link from "next/link";

type SectionItem = {
  title: string;
  description: string;
};

type InsightArticleProps = {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;

  accentText: string;
  accentBg: string;
  accentSoftBg: string;
  accentBorder: string;

  category: string;
  readingLabel: string;
  statusLabel: string;

  introduction: string[];

  keyPointsTitle: string;
  keyPoints: SectionItem[];

  sections: {
    eyebrow: string;
    title: string;
    description: string[];
    items?: SectionItem[];
  }[];

  takeawayTitle: string;
  takeawayDescription: string;
  takeaways: string[];

  relatedSolutions: {
    title: string;
    href: string;
  }[];

  relatedWork?: {
    title: string;
    href: string;
  };

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

export default function InsightArticle({
  eyebrow,
  title,
  highlightedTitle,
  description,
  accentText,
  accentBg,
  accentSoftBg,
  accentBorder,
  category,
  readingLabel,
  statusLabel,
  introduction,
  keyPointsTitle,
  keyPoints,
  sections,
  takeawayTitle,
  takeawayDescription,
  takeaways,
  relatedSolutions,
  relatedWork,
  ctaEyebrow,
  ctaTitle,
  ctaDescription,
}: InsightArticleProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          className={`absolute -right-32 top-0 h-96 w-96 rounded-full ${accentBg} opacity-10 blur-3xl`}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.22em] ${accentText}`}
          >
            {eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
            {highlightedTitle && (
              <span className={`block ${accentText}`}>
                {highlightedTitle}
              </span>
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Topic
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                {category}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Reading
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                {readingLabel}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Status
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                {statusLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6">
            {introduction.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-slate-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}
            >
              Key Points
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {keyPointsTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {keyPoints.map((point, index) => (
              <article
                key={point.title}
                className={`rounded-3xl border ${accentBorder} ${accentSoftBg} p-7 sm:p-8`}
              >
                <span
                  className={`text-sm font-semibold tracking-[0.16em] ${accentText}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {point.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={`${section.eyebrow}-${section.title}`}
          className={
            sectionIndex % 2 === 0
              ? "bg-slate-50 py-24 sm:py-28"
              : "bg-white py-24 sm:py-28"
          }
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}
              >
                {section.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {section.title}
              </h2>

              <div className="mt-7 space-y-5">
                {section.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-7 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {section.items && (
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7"
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
            )}
          </div>
        </section>
      ))}

      {/* Takeaways */}
      <section className="bg-slate-950 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentText}`}
            >
              Practical Takeaway
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {takeawayTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-300">
              {takeawayDescription}
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {takeaways.map((takeaway, index) => (
              <div
                key={takeaway}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-[60px_1fr]"
              >
                <span className={`text-sm font-semibold ${accentText}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-200">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>

            {relatedWork && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Related Work
                </p>

                <Link
                  href={relatedWork.href}
                  className={`mt-5 inline-flex text-sm font-semibold ${accentText}`}
                >
                  {relatedWork.title}
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
      <section className={`${accentBg} py-20 text-white sm:py-24`}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
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