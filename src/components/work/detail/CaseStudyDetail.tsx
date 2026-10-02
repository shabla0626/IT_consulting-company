import Link from "next/link";
import ArrowIcon from "@/components/shared/ArrowIcon";

type DetailItem =
  | string
  | {
      title: string;
      description?: string;
      href?: string;
    };

type CaseStudyDetailProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;

  accentText?: string;
  accentBg?: string;
  accentSoftBg?: string;
  accentDot?: string;

  overview?: unknown;
  engagementOverview?: unknown;
  overviewItems?: unknown;

  challengeTitle?: string;
  challengeDescription?: string;
  challenges?: unknown;

  assessmentTitle?: string;
  assessmentDescription?: string;
  assessment?: unknown;
  assessmentItems?: unknown;

  approachTitle?: string;
  approachDescription?: string;
  approach?: unknown;

  architectureTitle?: string;
  architectureDescription?: string;
  solutionArchitecture?: unknown;
  architecture?: unknown;

  technologyTitle?: string;
  technologyAreas?: unknown;
  technologies?: unknown;

  deliveryTitle?: string;
  deliveryDescription?: string;
  delivery?: unknown;
  deliveryItems?: unknown;

  decisionsTitle?: string;
  decisionsDescription?: string;
  decisions?: unknown;
  tradeoffs?: unknown;

  outcomesTitle?: string;
  outcomesDescription?: string;
  outcomes?: unknown;

  enabledTitle?: string;
  enabledDescription?: string;
  whatThisEnabled?: unknown;
  enabled?: unknown;

  relatedSolutions?: unknown;
  relatedIndustries?: unknown;
  relatedIndustry?: unknown;

  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
} & Record<string, unknown>;

function getString(
  props: CaseStudyDetailProps,
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

function normalizeItems(value: unknown): DetailItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item): DetailItem[] => {
    if (typeof item === "string") {
      return [item];
    }

    if (!item || typeof item !== "object") {
      return [];
    }

    const record = item as Record<string, unknown>;

    const titleCandidate =
      record.title ??
      record.name ??
      record.label ??
      record.heading ??
      record.key;

    if (typeof titleCandidate !== "string" || !titleCandidate.trim()) {
      return [];
    }

    const descriptionCandidate =
      record.description ??
      record.body ??
      record.copy ??
      record.text ??
      record.value;

    const hrefCandidate =
      record.href ?? record.url ?? record.path;

    return [
      {
        title: titleCandidate,
        description:
          typeof descriptionCandidate === "string"
            ? descriptionCandidate
            : undefined,
        href: typeof hrefCandidate === "string" ? hrefCandidate : undefined,
      },
    ];
  });
}

function getItems(
  props: CaseStudyDetailProps,
  keys: string[],
): DetailItem[] {
  for (const key of keys) {
    const items = normalizeItems(props[key]);

    if (items.length > 0) {
      return items;
    }
  }

  return [];
}

function getItemTitle(item: DetailItem) {
  return typeof item === "string" ? item : item.title;
}

function getItemDescription(item: DetailItem) {
  return typeof item === "string" ? undefined : item.description;
}

function getItemHref(item: DetailItem) {
  return typeof item === "string" ? undefined : item.href;
}

type SectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: DetailItem[];
  accentText: string;
  accentDot: string;
  background?: "white" | "slate";
};

function DetailSection({
  eyebrow,
  title,
  description,
  items,
  accentText,
  accentDot,
  background = "white",
}: SectionProps) {
  if (!description && items.length === 0) {
    return null;
  }

  return (
    <section
      className={`py-20 sm:py-24 lg:py-28 ${
        background === "slate" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
            >
              {eyebrow}
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <div className="min-w-0">
            {description && (
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                {description}
              </p>
            )}

            {items.length > 0 && (
              <div
                className={`overflow-hidden rounded-3xl border border-slate-200 ${
                  description ? "mt-8" : ""
                }`}
              >
                {items.map((item, index) => (
                  <article
                    key={`${getItemTitle(item)}-${index}`}
                    className={`grid min-w-0 gap-4 bg-white p-6 sm:p-7 lg:grid-cols-[64px_280px_1fr] lg:gap-8 lg:p-8 ${
                      index !== items.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.18em] ${accentText}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex min-w-0 gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`}
                        aria-hidden="true"
                      />

                      <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                        {getItemTitle(item)}
                      </h3>
                    </div>

                    {getItemDescription(item) && (
                      <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {getItemDescription(item)}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDetail(props: CaseStudyDetailProps) {
  const eyebrow = getString(
    props,
    ["eyebrow", "category", "caseStudyType"],
    "Representative Case Study",
  );

  const title = getString(
    props,
    ["title", "heroTitle"],
    "Technology transformation",
  );

  const highlightedTitle = getString(
    props,
    ["highlightedTitle", "heroHighlightedTitle", "titleAccent"],
    "from problem to delivery.",
  );

  const description = getString(
    props,
    ["description", "heroDescription"],
    "A representative scenario showing how a multidisciplinary technology engagement can move from context and assessment through architecture, delivery, and long-term ownership.",
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

  const overviewItems = getItems(props, [
    "engagementOverview",
    "overview",
    "overviewItems",
    "engagementDetails",
  ]);

  const challengeDescription = getString(props, [
    "challengeDescription",
    "challenge",
  ]);

  const challengeItems = getItems(props, [
    "challenges",
    "challengeItems",
  ]);

  const assessmentDescription = getString(props, [
    "assessmentDescription",
    "assessmentSummary",
  ]);

  const assessmentItems = getItems(props, [
    "assessment",
    "assessmentItems",
    "findings",
  ]);

  const approachDescription = getString(props, [
    "approachDescription",
  ]);

  const approachItems = getItems(props, [
    "approach",
    "approachItems",
    "workstreams",
  ]);

  const architectureDescription = getString(props, [
    "architectureDescription",
    "solutionArchitectureDescription",
  ]);

  const architectureItems = getItems(props, [
    "solutionArchitecture",
    "architecture",
    "architectureItems",
  ]);

  const technologyItems = getItems(props, [
    "technologyAreas",
    "technologies",
    "technology",
  ]);

  const deliveryDescription = getString(props, [
    "deliveryDescription",
  ]);

  const deliveryItems = getItems(props, [
    "delivery",
    "deliveryItems",
    "deliveryApproach",
  ]);

  const decisionDescription = getString(props, [
    "decisionsDescription",
    "tradeoffsDescription",
  ]);

  const decisionItems = getItems(props, [
    "decisions",
    "tradeoffs",
    "decisionsAndTradeoffs",
  ]);

  const outcomesDescription = getString(props, [
    "outcomesDescription",
  ]);

  const outcomeItems = getItems(props, [
    "outcomes",
    "illustrativeOutcomes",
    "outcomeItems",
  ]);

  const enabledDescription = getString(props, [
    "enabledDescription",
    "whatThisEnabledDescription",
  ]);

  const enabledItems = getItems(props, [
    "whatThisEnabled",
    "enabled",
    "enabledItems",
  ]);

  const relatedSolutions = getItems(props, [
    "relatedSolutions",
    "solutions",
  ]);

  const relatedIndustries = getItems(props, [
    "relatedIndustries",
    "relatedIndustry",
    "industries",
  ]);

  const ctaEyebrow = getString(
    props,
    ["ctaEyebrow"],
    "Your Technology Challenge",
  );

  const ctaTitle = getString(
    props,
    ["ctaTitle"],
    "Have a complex technology problem to work through?",
  );

  const ctaDescription = getString(
    props,
    ["ctaDescription"],
    "Tell us what you are trying to change, what surrounds the problem, and where you need experienced technical support.",
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
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
            <div className="min-w-0">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                {eyebrow}
              </p>

              <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
                {title}

                {highlightedTitle && (
                  <span className="block text-slate-400">
                    {highlightedTitle}
                  </span>
                )}
              </h1>
            </div>

            <div className="min-w-0">
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                >
                  Talk to an Expert
                  <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  All Case Studies
                </Link>
              </div>

              <p className="mt-6 text-xs leading-5 text-slate-500">
                Representative scenario for website development. Replace with
                verified client evidence before production use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement overview */}
      {overviewItems.length > 0 && (
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {overviewItems.map((item, index) => (
                <div
                  key={`${getItemTitle(item)}-${index}`}
                  className="min-w-0"
                >
                  <p className={`text-xs font-semibold ${accentText}`}>
                    {getItemTitle(item)}
                  </p>

                  {getItemDescription(item) && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {getItemDescription(item)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <DetailSection
        eyebrow="Challenge"
        title={getString(
          props,
          ["challengeTitle"],
          "Understanding the problem before choosing the solution.",
        )}
        description={challengeDescription}
        items={challengeItems}
        accentText={accentText}
        accentDot={accentDot}
      />

      <DetailSection
        eyebrow="Assessment"
        title={getString(
          props,
          ["assessmentTitle"],
          "Making the existing environment visible.",
        )}
        description={assessmentDescription}
        items={assessmentItems}
        accentText={accentText}
        accentDot={accentDot}
        background="slate"
      />

      <DetailSection
        eyebrow="Approach"
        title={getString(
          props,
          ["approachTitle"],
          "Shaping the path from decisions to delivery.",
        )}
        description={approachDescription}
        items={approachItems}
        accentText={accentText}
        accentDot={accentDot}
      />

      <DetailSection
        eyebrow="Solution Architecture"
        title={getString(
          props,
          ["architectureTitle", "solutionArchitectureTitle"],
          "Architecture shaped around the problem.",
        )}
        description={architectureDescription}
        items={architectureItems}
        accentText={accentText}
        accentDot={accentDot}
        background="slate"
      />

      {/* Technology */}
      {technologyItems.length > 0 && (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
                >
                  Technology
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {getString(
                    props,
                    ["technologyTitle"],
                    "Technology areas involved in the engagement.",
                  )}
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {technologyItems.map((item, index) => (
                  <div
                    key={`${getItemTitle(item)}-${index}`}
                    className={`flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 p-4 sm:p-5 ${accentSoftBg}`}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                      aria-hidden="true"
                    />

                    <span className="text-sm font-semibold text-slate-800 sm:text-base">
                      {getItemTitle(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <DetailSection
        eyebrow="Delivery"
        title={getString(
          props,
          ["deliveryTitle"],
          "Turning architecture into working technology.",
        )}
        description={deliveryDescription}
        items={deliveryItems}
        accentText={accentText}
        accentDot={accentDot}
        background="slate"
      />

      <DetailSection
        eyebrow="Decisions & Trade-offs"
        title={getString(
          props,
          ["decisionsTitle", "tradeoffsTitle"],
          "Making the important choices explicit.",
        )}
        description={decisionDescription}
        items={decisionItems}
        accentText={accentText}
        accentDot={accentDot}
      />

      {/* Outcomes */}
      {(outcomesDescription || outcomeItems.length > 0) && (
        <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
                >
                  Illustrative Outcomes
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {getString(
                    props,
                    ["outcomesTitle"],
                    "What the engagement could improve.",
                  )}
                </h2>

                {outcomesDescription && (
                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                    {outcomesDescription}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {outcomeItems.map((item, index) => (
                  <article
                    key={`${getItemTitle(item)}-${index}`}
                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
                  >
                    <span
                      className={`text-xs font-semibold ${accentText}`}
                    >
                      Illustrative
                    </span>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {getItemTitle(item)}
                    </h3>

                    {getItemDescription(item) && (
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {getItemDescription(item)}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <DetailSection
        eyebrow="What This Enabled"
        title={getString(
          props,
          ["enabledTitle", "whatThisEnabledTitle"],
          "Creating a stronger foundation for what comes next.",
        )}
        description={enabledDescription}
        items={enabledItems}
        accentText={accentText}
        accentDot={accentDot}
        background="slate"
      />

      {/* Related */}
      {(relatedSolutions.length > 0 || relatedIndustries.length > 0) && (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
                >
                  Related
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Explore the expertise around the work.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[...relatedSolutions, ...relatedIndustries].map(
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
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-indigo-700 px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div
              className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl ${accentBg}`}
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
                  {ctaEyebrow}
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {ctaTitle}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
                  {ctaDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50 sm:w-auto"
                >
                  Talk to an Expert
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}