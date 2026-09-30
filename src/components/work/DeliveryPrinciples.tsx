const principles = [
  {
    title: "Senior expertise stays involved",
    description:
      "Important technical and delivery decisions should remain close to experienced practitioners throughout the engagement.",
  },
  {
    title: "Business context comes first",
    description:
      "Architecture and engineering choices should connect to the actual problem rather than technology trends in isolation.",
  },
  {
    title: "One multidisciplinary team",
    description:
      "Product, architecture, software, cloud, data, security, and delivery perspectives should work around shared outcomes.",
  },
  {
    title: "Ownership matters after launch",
    description:
      "Maintainability, observability, documentation, reliability, and knowledge transfer are part of delivery.",
  },
];

export default function DeliveryPrinciples() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Delivery Principles
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              How the work is done
              <span className="block text-slate-500">
                matters as much as what is built.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Sustainable consulting work should improve the technology and the
            organization&apos;s ability to continue owning and evolving it.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:mt-14 lg:mt-16">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={`grid min-w-0 gap-4 p-6 sm:p-7 lg:grid-cols-[72px_320px_1fr] lg:gap-8 lg:p-8 ${
                index !== principles.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-indigo-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                {principle.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}