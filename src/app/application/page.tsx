import type { Metadata } from "next";
import Link from "next/link";

import ApplicationForm from "@/components/careers/application/ApplicationForm";
import { getJobBySlug } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Job Application | Careers at Nexora",
  description:
    "Apply for an opportunity at Nexora and share your experience, professional profiles, and resume.",
};

type ApplicationPageProps = {
  searchParams: Promise<{
    job?: string | string[];
  }>;
};

export default async function ApplicationPage({
  searchParams,
}: ApplicationPageProps) {
  const resolvedSearchParams = await searchParams;

  const jobParam = resolvedSearchParams.job;

  const jobSlug =
    typeof jobParam === "string"
      ? jobParam
      : Array.isArray(jobParam)
        ? jobParam[0]
        : undefined;

  const job = jobSlug ? getJobBySlug(jobSlug) : undefined;

  if (!jobSlug) {
    return <MissingJobState />;
  }

  if (!job || job.status !== "open") {
    return <UnavailableJobState />;
  }

  return (
    <main className="bg-white">
      {/* Application hero */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <Link
              href="/careers"
              className="transition hover:text-white"
            >
              Careers
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/careers/jobs"
              className="transition hover:text-white"
            >
              Open Roles
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href={`/careers/jobs/${job.slug}`}
              className="transition hover:text-white"
            >
              {job.title}
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-slate-200">Apply</span>
          </nav>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Job Application
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Apply for {job.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Share the information that helps us understand your background
                and interest in the role. You do not need to create a candidate
                account to complete this application.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Applying for
              </p>

              <p className="mt-2 font-semibold text-white">
                {job.title}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {job.team} · {job.experienceLevel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application body */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20 lg:px-8">
          <div className="min-w-0">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                Your Application
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Tell us about yourself.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Complete the sections below with information relevant to this
                opportunity. Fields marked with an asterisk are required.
              </p>
            </div>

            <ApplicationForm job={job} />
          </div>

          {/* Sticky role summary */}
          <aside className="self-start lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                Role Summary
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                {job.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {job.summary}
              </p>

              <dl className="mt-7 space-y-5 border-t border-slate-200 pt-6">
                <ApplicationMetadata
                  label="Team"
                  value={job.team}
                />

                <ApplicationMetadata
                  label="Experience"
                  value={job.experienceLevel}
                />

                <ApplicationMetadata
                  label="Employment"
                  value={job.employmentType}
                />

                <ApplicationMetadata
                  label="Location"
                  value={job.location}
                />

                <ApplicationMetadata
                  label="Arrangement"
                  value={job.locationType}
                />
              </dl>

              <Link
                href={`/careers/jobs/${job.slug}`}
                className="mt-7 inline-flex text-sm font-semibold text-violet-700 transition hover:text-violet-900"
              >
                Review full job description
                <span className="ml-1.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">
                Before submitting
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Make sure your contact details are accurate and that your
                resume reflects the experience most relevant to this role.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold text-slate-950">
                Development environment
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The current form validates the candidate experience only.
                Applications and uploaded files are not yet transmitted or
                stored.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

type ApplicationMetadataProps = {
  label: string;
  value: string;
};

function ApplicationMetadata({
  label,
  value,
}: ApplicationMetadataProps) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </dt>

      <dd className="mt-1.5 text-sm font-medium text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function MissingJobState() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Application
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Choose a role before applying.
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Applications are connected to a specific opportunity so we can
            understand which team and role you are interested in.
          </p>

          <Link
            href="/careers/jobs"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Browse open roles
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function UnavailableJobState() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Opportunity Unavailable
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            This role is not currently available.
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            The opportunity may have been closed, changed, or the application
            link may be incorrect. You can explore the currently available
            roles instead.
          </p>

          <Link
            href="/careers/jobs"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View open roles
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}