import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received | Careers at Nexora",
  description:
    "Your application has been received. Explore more opportunities or learn more about careers at Nexora.",
};

export default function ApplicationSuccessPage() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-7 w-7 text-violet-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m5 12.5 4.2 4.2L19 7"
                />
              </svg>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Application Complete
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Thank you for applying.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Your application has reached the end of the candidate submission
              flow. Once the real recruiting backend is connected, this page
              will confirm that the application and uploaded resume have been
              successfully received.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/careers/jobs"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore More Roles
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Back to Careers
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm leading-6 text-slate-400">
                You do not need to create a candidate account to complete the
                initial application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border-t border-slate-300 pt-6">
              <p className="text-sm font-semibold text-slate-950">
                Application review
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Once the recruiting workflow is live, submitted applications
                will move into the appropriate review process for the selected
                role.
              </p>
            </article>

            <article className="border-t border-slate-300 pt-6">
              <p className="text-sm font-semibold text-slate-950">
                Candidate communication
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Candidates should receive clear communication about relevant
                next steps once an application has been reviewed.
              </p>
            </article>

            <article className="border-t border-slate-300 pt-6">
              <p className="text-sm font-semibold text-slate-950">
                Keep exploring
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                You can continue exploring teams, career paths, and other
                opportunities while your application is being considered.
              </p>
            </article>
          </div>

          <div className="mt-14 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
            <p className="text-sm font-semibold text-slate-950">
              Development note
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              This success page currently represents the final step of the
              frontend application prototype. It should only be shown after a
              successful real submission once the backend, file storage,
              validation, privacy controls, and recruiting workflow are
              connected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}