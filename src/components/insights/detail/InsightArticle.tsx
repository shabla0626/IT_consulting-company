import Link from "next/link";

type ArticleItem =
  | string
  | {
      title: string;
      description?: string;
      href?: string;
    };

type ArticleSection = {
  title: string;
  eyebrow?: string;
  description?: string;
  paragraphs?: string[];
  points?: ArticleItem[];
};

type InsightArticleProps = {
  eyebrow?: string;
  topic?: string;

  title?: string;
  highlightedTitle?: string;
  description?: string;

  accentText?: string;
  accentBg?: string;
  accentSoftBg?: string;
  accentDot?: string;

  intro?: string;
  introduction?: string[];

  keyPoints?: unknown;
  highlights?: unknown;

  sections?: unknown;
  deepDiveSections?: unknown;

  takeawayTitle?: string;
  takeawayDescription?: string;
  takeaways?: unknown;

  relatedSolutions?: unknown;
  relatedWork?: unknown;

  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
} & Record<string, unknown>;

function getString(
  props: InsightArticleProps,
  keys: string[],
  fallback = "",
) {
  for (const key of keys) {
    const value = props[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return fallback;
}

function normalizeItems(value: unknown): ArticleItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item): ArticleItem[] => {
    if (typeof item === "string") {
      return [item];
    }

    if (!item || typeof item !== "object") {
      return [];
    }

    const record = item as Record<string, unknown>;

    const title =
      record.title ??
      record.name ??
      record.label ??
      record.heading;

    if (typeof title !== "string" || !title.trim()) {
      return [];
    }

    const description =
      record.description ??
      record.body ??
      record.copy ??
      record.text;

    const href = record.href ?? record.url ?? record.path;

    return [
      {
        title,
        description:
          typeof description === "string" ? description : undefined,
        href: typeof href === "string" ? href : undefined,
      },
    ];
  });
}

function getItems(
  props: InsightArticleProps,
  keys: string[],
): ArticleItem[] {
  for (const key of keys) {
    const items = normalizeItems(props[key]);

    if (items.length > 0) {
      return items;
    }
  }

  return [];
}

function normalizeSections(value: unknown): ArticleSection[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((section): ArticleSection[] => {
    if (!section || typeof section !== "object") {
      return [];
    }

    const record = section as Record<string, unknown>;

    const title =
      record.title ??
      record.heading ??
      record.name;

    if (typeof title !== "string" || !title.trim()) {
      return [];
    }

    const eyebrow =
      typeof record.eyebrow === "string"
        ? record.eyebrow
        : undefined;

    const description =
      typeof record.description === "string"
        ? record.description
        : typeof record.intro === "string"
          ? record.intro
          : undefined;

    const paragraphs = Array.isArray(record.paragraphs)
      ? record.paragraphs.filter(
          (paragraph): paragraph is string =>
            typeof paragraph === "string",
        )
      : typeof record.body === "string"
        ? [record.body]
        : [];

    const points = normalizeItems(
      record.points ?? record.items ?? record.bullets,
    );

    return [
      {
        title,
        eyebrow,
        description,
        paragraphs,
        points,
      },
    ];
  });
}

function getSections(props: InsightArticleProps) {
  for (const key of [
    "sections",
    "deepDiveSections",
    "contentSections",
    "articleSections",
  ]) {
    const sections = normalizeSections(props[key]);

    if (sections.length > 0) {
      return sections;
    }
  }

  return [];
}

function getItemTitle(item: ArticleItem) {
  return typeof item === "string" ? item : item.title;
}

function getItemDescription(item: ArticleItem) {
  return typeof item === "string" ? undefined : item.description;
}

function getItemHref(item: ArticleItem) {
  return typeof item === "string" ? undefined : item.href;
}

export default function InsightArticle(props: InsightArticleProps) {
  const eyebrow = getString(
    props,
    ["eyebrow", "topic", "category"],
    "Technology Perspective",
  );

  const title = getString(
    props,
    ["title", "heroTitle"],
    "A practical technology perspective",
  );

  const highlightedTitle = getString(
    props,
    ["highlightedTitle", "titleAccent", "heroHighlightedTitle"],
  );

  const description = getString(
    props,
    ["description", "heroDescription", "summary"],
    "A representative long-form perspective exploring the architecture, engineering, and delivery considerations behind modern technology decisions.",
  );

  const accentText = getString(
    props,
    ["accentText"],
    "text-indigo-300",
  );

  const accentBg = getString(
    props,
    ["accentBg"],
    "bg-indigo-500",
  );

  const accentSoftBg = getString(
    props,
    ["accentSoftBg"],
    "bg-indigo-50",
  );

  const accentDot = getString(
    props,
    ["accentDot"],
    "bg-indigo-500",
  );

  const intro = getString(
    props,
    ["intro", "introduction", "introText"],
  );

  const keyPoints = getItems(props, [
    "keyPoints",
    "highlights",
    "summaryPoints",
  ]);

  const sections = getSections(props);

  const takeawayTitle = getString(
    props,
    ["takeawayTitle"],
    "Practical takeaway",
  );

  const takeawayDescription = getString(
    props,
    ["takeawayDescription"],
  );

  const takeaways = getItems(props, [
    "takeaways",
    "practicalTakeaways",
    "takeawayPoints",
  ]);

  const relatedSolutions = getItems(props, [
    "relatedSolutions",
    "solutions",
  ]);

  const relatedWork = getItems(props, [
    "relatedWork",
    "caseStudies",
  ]);

  const ctaEyebrow = getString(
    props,
    ["ctaEyebrow"],
    "From Perspective to Practice",
  );

  const ctaTitle = getString(
    props,
    ["ctaTitle"],
    "Working through a similar technology challenge?",
  );

  const ctaDescription = getString(
    props,
    ["ctaDescription"],
    "We can help connect the strategy, architecture, engineering, and delivery decisions around the problem.",
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10 blur-3xl sm:h-96 sm:w-96 ${accentBg}`}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
            >
              {eyebrow}
            </p>

            <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl">
              {title}

              {highlightedTitle && (
                <span className="block text-slate-400">
                  {highlightedTitle}
                </span>
              )}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Representative Editorial
              </span>

              <Link
                href="/insights"
                className="text-sm font-semibold text-white transition hover:text-slate-300"
              >
                All Insights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      {intro && (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-8 text-slate-700 sm:text-2xl sm:leading-9">
                {intro}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Key points */}
      {keyPoints.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                Key Points
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                {keyPoints.map((item, index) => (
                  <div
                    key={`${getItemTitle(item)}-${index}`}
                    className={`grid gap-4 p-6 sm:grid-cols-[54px_1fr] sm:p-7 ${
                      index !== keyPoints.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.18em] ${accentText}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="text-lg font-semibold text-slate-950">
                        {getItemTitle(item)}
                      </h2>

                      {getItemDescription(item) && (
                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                          {getItemDescription(item)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article sections */}
      {sections.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className={
            index % 2 === 0
              ? "bg-white py-20 sm:py-24 lg:py-28"
              : "bg-slate-50 py-20 sm:py-24 lg:py-28"
          }
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div>
                {section.eyebrow && (
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}
                  >
                    {section.eyebrow}
                  </p>
                )}

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {section.title}
                </h2>
              </div>

              <div className="min-w-0">
                {section.description && (
                  <p className="text-base leading-7 text-slate-700">
                    {section.description}
                  </p>
                )}

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className={`text-base leading-8 text-slate-600 ${
                      section.description || paragraphIndex > 0
                        ? "mt-5"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {section.points && section.points.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {section.points.map((point, pointIndex) => (
                      <div
                        key={`${getItemTitle(point)}-${pointIndex}`}
                        className={`rounded-2xl border border-slate-200 p-5 ${accentSoftBg}`}
                      >
                        <div className="flex gap-3">
                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`}
                            aria-hidden="true"
                          />

                          <div>
                            <h3 className="font-semibold text-slate-900">
                              {getItemTitle(point)}
                            </h3>

                            {getItemDescription(point) && (
                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {getItemDescription(point)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Practical takeaway */}
      {(takeawayDescription || takeaways.length > 0) && (
        <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}
                >
                  Practical Takeaway
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {takeawayTitle}
                </h2>
              </div>

              <div>
                {takeawayDescription && (
                  <p className="text-base leading-7 text-slate-300">
                    {takeawayDescription}
                  </p>
                )}

                {takeaways.length > 0 && (
                  <div className="mt-7 space-y-4">
                    {takeaways.map((item, index) => (
                      <div
                        key={`${getItemTitle(item)}-${index}`}
                        className="flex gap-3 border-t border-white/10 pt-4"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`}
                          aria-hidden="true"
                        />

                        <div>
                          <p className="font-semibold text-white">
                            {getItemTitle(item)}
                          </p>

                          {getItemDescription(item) && (
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {getItemDescription(item)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {(relatedSolutions.length > 0 || relatedWork.length > 0) && (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}
                >
                  Related
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Continue exploring the topic.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[...relatedSolutions, ...relatedWork].map(
                  (item, index) => {
                    const href = getItemHref(item);

                    const content = (
                      <>
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                          aria-hidden="true"
                        />

                        <span className="font-semibold text-slate-900">
                          {getItemTitle(item)}
                        </span>

                        {href && (
                          <span
                            className="ml-auto text-slate-400"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        )}
                      </>
                    );

                    return href ? (
                      <Link
                        key={`${getItemTitle(item)}-${index}`}
                        href={href}
                        className="flex min-h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={`${getItemTitle(item)}-${index}`}
                        className="flex min-h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        {content}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {ctaEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {ctaTitle}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/insights"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 sm:w-auto"
              >
                All Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}