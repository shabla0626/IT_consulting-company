const topics = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Architecture, modernization, APIs, quality, developer experience, and sustainable software delivery.",
  },
  {
    number: "02",
    title: "AI & Data",
    description:
      "Data foundations, applied AI, machine learning, evaluation, integration, and production operations.",
  },
  {
    number: "03",
    title: "Cloud & Platforms",
    description:
      "Cloud modernization, platform engineering, DevOps, reliability, infrastructure, and operating models.",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Application security, cloud security, identity, architecture, automation, and engineering guardrails.",
  },
];

export default function InsightTopics() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Topics
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Explore technology
              <span className="block text-slate-500">
                through connected disciplines.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            The most useful technology perspectives often cross service
            boundaries because architecture, cloud, software, data, security,
            and delivery decisions influence one another.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          {topics.map((topic, index) => (
            <article
              key={topic.number}
              className={`grid min-w-0 gap-4 p-6 sm:p-7 lg:grid-cols-[72px_300px_1fr] lg:gap-8 lg:p-8 ${
                index !== topics.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                {topic.number}
              </span>

              <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                {topic.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}