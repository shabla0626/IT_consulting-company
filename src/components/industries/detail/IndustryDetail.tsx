import Link from "next/link";

type DetailItem =
  | string
  | {
      title: string;
      description?: string;
    };

type IndustryDetailProps = {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;

  accentText?: string;
  accentBg?: string;
  accentSoftBg?: string;
  accentDot?: string;

  challengeEyebrow?: string;
  challengeTitle?: string;
  challengeDescription?: string;
  challenges?: unknown;

  priorityEyebrow?: string;
  priorityTitle?: string;
  priorityDescription?: string;
  priorities?: unknown;

  capabilityEyebrow?: string;
  capabilityTitle?: string;
  capabilityDescription?: string;
  capabilities?: unknown;

  focusEyebrow?: string;
  focusTitle?: string;
  focusDescription?: string;
  focusAreas?: unknown;

  technologyTitle?: string;
  technologyAreas?: unknown;

  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
} & Record<string, unknown>;

function getString(
  props: IndustryDetailProps,
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
      record.title ?? record.name ?? record.label ?? record.heading;

    if (typeof titleCandidate !== "string" || !titleCandidate.trim()) {
      return [];
    }

    const descriptionCandidate =
      record.description ?? record.body ?? record.copy ?? record.text;

    return [
      {
        title: titleCandidate,
        description:
          typeof descriptionCandidate === "string"
            ? descriptionCandidate
            : undefined,
      },
    ];
  });
}

function getItems(
  props: IndustryDetailProps,
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

export default function IndustryDetail(props: IndustryDetailProps) {
  /*
   * Hero
   *
   * Multiple aliases are intentionally supported here so this shared
   * responsive component can remain compatible with older industry page data.
   */
  const eyebrow = getString(
    props,
    ["eyebrow", "industry", "industryName", "heroEyebrow"],
    "Industry",
  );

  const title = getString(
    props,
    ["title", "heroTitle"],
    "Technology built around",
  );

  const highlightedTitle = getString(
    props,
    ["highlightedTitle", "heroHighlightedTitle", "titleAccent"],
    "industry context.",
  );

  const description = getString(
    props,
    ["description", "heroDescription"],
    "We connect technology expertise with the business, operational, and technical environment surrounding the work.",
  );

  /*
   * Accent system
   */
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

  /*
   * Industry context / challenges
   */
  const contextEyebrow = getString(
    props,
    [
      "challengeEyebrow",
      "priorityEyebrow",
      "contextEyebrow",
    ],
    "Industry Context",
  );

  const contextTitle = getString(
    props,
    [
      "challengeTitle",
      "priorityTitle",
      "contextTitle",
    ],
    "Technology decisions are shaped by the environment.",
  );

  const contextDescription = getString(
    props,
    [
      "challengeDescription",
      "priorityDescription",
      "contextDescription",
    ],
    "Organizations rarely make technology decisions in isolation. Existing systems, operating requirements, users, risk, data, and delivery constraints all influence the right approach.",
  );

  const contextItems = getItems(props, [
    "challenges",
    "priorities",
    "industryChallenges",
    "industryPriorities",
    "contextItems",
  ]);

  /*
   * Where we help / capabilities
   */
  const capabilityEyebrow = getString(
    props,
    [
      "capabilityEyebrow",
      "focusEyebrow",
      "opportunityEyebrow",
    ],
    "Where We Help",
  );

  const capabilityTitle = getString(
    props,
    [
      "capabilityTitle",
      "focusTitle",
      "opportunityTitle",
    ],
    "Technology expertise applied to the work that matters.",
  );

  const capabilityDescription = getString(
    props,
    [
      "capabilityDescription",
      "focusDescription",
      "opportunityDescription",
    ],
    "The right engagement may involve software, cloud, data, AI, security, design, consulting, or several disciplines working together.",
  );

  const capabilityItems = getItems(props, [
    "capabilities",
    "focusAreas",
    "opportunities",
    "whereWeHelp",
    "solutionAreas",
  ]);

  /*
   * Technology / themes
   */
  const technologyTitle = getString(
    props,
    [
      "technologyTitle",
      "themesTitle",
      "technologyAreasTitle",
    ],
    "Technology areas",
  );

  const technologyAreas = getItems(props, [
    "technologyAreas",
    "technologyThemes",
    "themes",
    "areas",
  ]);

  /*
   * CTA
   */
  const ctaEyebrow = getString(
    props,
    ["ctaEyebrow"],
    "Start a Conversation",
  );

  const ctaTitle = getString(
    props,
    ["ctaTitle"],
    "Have a technology challenge in this environment?",
  );

  const ctaDescription = getString(
    props,
    ["ctaDescription"],
    "Tell us what you are trying to change, what systems and constraints surround the problem, and where you need the most support.",
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

                {highlightedTitle && (
                  <span className="block text-slate-400">
                    {highlightedTitle}
                  </span>
                )}
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

          <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16 lg:mt-20">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-sm font-semibold text-white">
                  Understand the context
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Start with the organization, users, existing systems, and
                  operating environment.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="text-sm font-semibold text-white">
                  Connect the disciplines
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Bring together the technology capabilities required by the
                  actual problem.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="text-sm font-semibold text-white">
                  Build for ownership
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Make decisions teams can maintain, operate, and evolve over
                  the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry context */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accentText}`}
              >
                {contextEyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {contextTitle}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              {contextDescription}
            </p>
          </div>

          {contextItems.length > 0 && (
            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
              {contextItems.map((item, index) => {
                const itemDescription = getItemDescription(item);

                return (
                  <article
                    key={`${getItemTitle(item)}-${index}`}
                    className={`grid min-w-0 gap-4 p-6 sm:p-7 lg:grid-cols-[72px_300px_1fr] lg:gap-8 lg:p-8 ${
                      index !== contextItems.length - 1
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
                      {getItemTitle(item)}
                    </h3>

                    {itemDescription && (
                      <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {itemDescription}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Where we help */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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

          {capabilityItems.length > 0 && (
            <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {capabilityItems.map((item, index) => {
                const itemDescription = getItemDescription(item);

                return (
                  <article
                    key={`${getItemTitle(item)}-${index}`}
                    className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8"
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

                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                      {getItemTitle(item)}
                    </h3>

                    {itemDescription && (
                      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {itemDescription}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Technology areas */}
      {technologyAreas.length > 0 && (
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
                {technologyAreas.map((item, index) => (
                  <div
                    key={`${getItemTitle(item)}-${index}`}
                    className={`flex min-h-14 min-w-0 items-center gap-3 rounded-2xl border border-slate-200 p-4 sm:p-5 ${accentSoftBg}`}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`}
                      aria-hidden="true"
                    />

                    <span className="min-w-0 text-sm font-semibold text-slate-800 sm:text-base">
                      {getItemTitle(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industry + multidisciplinary positioning */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="p-7 sm:p-9 lg:p-12">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${accentText}`}
                >
                  Industry + Expertise
                </p>

                <h2 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
                  Industry context and engineering depth belong together.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Understanding an industry helps frame the problem. Solving it
                  still requires strong software, cloud, data, AI, security,
                  design, and delivery capabilities.
                </p>
              </div>

              <div className="border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    "Software engineering",
                    "Cloud & platform engineering",
                    "Data & AI",
                    "Cybersecurity",
                    "Product & experience",
                    "Technology consulting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex min-w-0 gap-3 border-t border-white/10 pt-4"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`}
                        aria-hidden="true"
                      />

                      <p className="text-sm leading-6 text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/solutions"
                  className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-white transition hover:text-slate-200"
                >
                  Explore our solutions

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 sm:text-sm">
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
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
                >
                  Talk to an Expert

                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/industries"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
                >
                  All Industries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}