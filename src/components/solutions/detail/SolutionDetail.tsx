import Link from "next/link";

type Item = {
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
  capabilities: Item[];
  approachEyebrow: string;
  approachTitle: string;
  approachDescription: string;
  approach: Item[];
  technologyTitle: string;
  technologyAreas: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

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
      <section className="relative overflow-hidden bg-white">
        <div
          className={`pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full ${accentSoftBg} blur-3xl`}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className={`h-px w-10 ${accentBg}`} />
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accentText}`}>{eyebrow}</p>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
              {title}
              <span className={`mt-2 block ${accentText}`}>{highlightedTitle}</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">{description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Discuss Your Project
              </Link>
              <Link href="/work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950">
                View Our Work
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accentText}`}>{capabilityEyebrow}</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">{capabilityTitle}</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">{capabilityDescription}</p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl bg-neutral-200 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <article key={capability.title} className="bg-white p-7 sm:p-8">
                  <p className={`text-sm font-medium ${accentText}`}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-neutral-950">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accentText}`}>{approachEyebrow}</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{approachTitle}</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">{approachDescription}</p>
            </div>

            <div className="border-t border-white/10">
              {approach.map((item, index) => (
                <div key={item.title} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr] lg:py-8">
                  <span className={`text-sm font-medium ${accentText}`}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accentText}`}>Technology Areas</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">{technologyTitle}</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {technologyAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${accentDot}`} />
                    <span className="font-medium text-neutral-800">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${accentBg} text-white`}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{ctaEyebrow}</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{ctaTitle}</h2>
            </div>

            <div>
              <p className="max-w-md leading-7 text-white/80">{ctaDescription}</p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Discuss Your Project
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
