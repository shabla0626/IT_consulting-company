import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-indigo-600" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              {eyebrow}
            </p>
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            {description}
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
          >
            <span
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              ←
            </span>

            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}