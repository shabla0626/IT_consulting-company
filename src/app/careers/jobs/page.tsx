import { Suspense } from "react";

import JobsExplorer from "@/components/careers/jobs/JobsExplorer";
import JobsHero from "@/components/careers/jobs/JobsHero";

function JobsExplorerFallback() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <div className="h-5 w-36 rounded bg-slate-200" />

          <div className="mt-5 h-14 rounded-2xl bg-slate-100" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <div className="h-3 w-20 rounded bg-slate-200" />
                <div className="mt-2 h-12 rounded-xl bg-slate-100" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`p-8 ${
                index !== 2 ? "border-b border-slate-200" : ""
              }`}
            >
              <div className="h-3 w-40 rounded bg-slate-200" />
              <div className="mt-4 h-7 w-72 max-w-full rounded bg-slate-200" />

              <div className="mt-4 max-w-2xl space-y-2">
                <div className="h-3 rounded bg-slate-100" />
                <div className="h-3 w-5/6 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function JobsPage() {
  return (
    <main>
      <JobsHero />

      <Suspense fallback={<JobsExplorerFallback />}>
        <JobsExplorer />
      </Suspense>
    </main>
  );
}