const developmentAreas = [
  {
    number: "01",
    title: "Build technical depth",
    description:
      "Develop stronger knowledge in your primary discipline through increasingly complex problems and responsibility.",
  },
  {
    number: "02",
    title: "Learn the surrounding system",
    description:
      "Understand how your work interacts with architecture, product, cloud, data, security, operations, and delivery.",
  },
  {
    number: "03",
    title: "Grow through collaboration",
    description:
      "Use design discussions, reviews, pairing, mentoring, documentation, and shared problem solving as everyday learning opportunities.",
  },
  {
    number: "04",
    title: "Expand your influence",
    description:
      "As experience grows, contribute through technical leadership, mentoring, architecture, client communication, and better ways of working.",
  },
];

export default function GrowthDevelopment() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              Growth & Development
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Growth is more than
              <span className="block text-slate-500">
                moving to the next title.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Career development can include deeper technical expertise, broader
            system understanding, stronger communication, mentoring, delivery,
            architecture, and leadership.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:mt-14 lg:mt-16">
          {developmentAreas.map((area, index) => (
            <article
              key={area.number}
              className={`grid min-w-0 gap-4 p-6 sm:p-7 lg:grid-cols-[72px_320px_1fr] lg:gap-8 lg:p-8 ${
                index !== developmentAreas.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                {area.number}
              </span>

              <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                {area.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}