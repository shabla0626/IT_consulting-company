import Link from "next/link";
import type { ReactNode } from "react";

type ApplicationShellProps = {
  jobTitle: string;
  team?: string;
  location?: string;
  locationType?: string;
  employmentType?: string;
  children: ReactNode;
};

export default function ApplicationShell({
  jobTitle,
  team,
  location,
  locationType,
  employmentType,
  children,
}: ApplicationShellProps) {
  const roleDetails = [
    location,
    locationType,
    employmentType,
  ].filter(
    (value): value is string =>
      typeof value === "string" &&
      value.trim().length > 0,
  );

  return (
    <main className="bg-slate-50">
      {/* Back navigation */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:py-6 lg:px-8">
          <Link
            href="/careers/jobs"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
          >
            <span
              className="mr-2"
              aria-hidden="true"
            >
              ←
            </span>

            Back to open roles
          </Link>
        </div>
      </section>

      {/* Application heading */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
                Application
              </p>

              <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                Apply for

                <span className="block text-slate-500">
                  {jobTitle}
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Share the information needed to review your application
                against this role. You do not need to create a candidate
                account.
              </p>
            </div>

            {/* Selected role */}
            <div className="min-w-0 rounded-2xl border border-violet-100 bg-violet-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                Selected Role
              </p>

              <h2 className="mt-3 break-words text-lg font-semibold tracking-tight text-slate-950">
                {jobTitle}
              </h2>

              {team && (
                <p className="mt-2 text-sm font-medium text-violet-700">
                  {team}
                </p>
              )}

              {roleDetails.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                  {roleDetails.map((detail) => (
                    <span
                      key={detail}
                      className="break-words"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* Existing form will eventually render here */}
            <div className="min-w-0">
              {children}
            </div>

            {/* Guidance */}
            <aside className="order-first min-w-0 lg:order-last">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                  Before Submitting
                </p>

                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-[34px_1fr] gap-3">
                    <span className="text-xs font-semibold tracking-[0.14em] text-violet-700">
                      01
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">
                        Check your details
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Make sure your name and contact information are
                        accurate.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <div className="grid grid-cols-[34px_1fr] gap-3">
                      <span className="text-xs font-semibold tracking-[0.14em] text-violet-700">
                        02
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">
                          Review your links
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Include professional links only where they are
                          useful to the application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <div className="grid grid-cols-[34px_1fr] gap-3">
                      <span className="text-xs font-semibold tracking-[0.14em] text-violet-700">
                        03
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">
                          Check your resume
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Confirm you selected the intended resume before
                          submitting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs leading-5 text-slate-500">
                    Only provide information you are comfortable sharing
                    as part of the recruitment process.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}