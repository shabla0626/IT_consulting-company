"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Job } from "@/data/jobs";

type JobsExplorerProps = {
  jobs: Job[];
};

type JobRecord = Record<string, unknown>;

function asRecord(job: Job): JobRecord {
  return job as unknown as JobRecord;
}

function getString(
  job: Job,
  keys: string[],
  fallback = "",
) {
  const record = asRecord(job);

  for (const key of keys) {
    const value = record[key];

    if (
      typeof value === "string" &&
      value.trim().length > 0
    ) {
      return value.trim();
    }
  }

  return fallback;
}

function getStringArray(
  job: Job,
  keys: string[],
) {
  const record = asRecord(job);

  for (const key of keys) {
    const value = record[key];

    if (!Array.isArray(value)) {
      continue;
    }

    const strings = value.filter(
      (item): item is string =>
        typeof item === "string" &&
        item.trim().length > 0,
    );

    if (strings.length > 0) {
      return strings;
    }
  }

  return [];
}

function getTitle(job: Job) {
  return getString(
    job,
    ["title", "name", "role"],
    "Technology role",
  );
}

function getSlug(job: Job) {
  return getString(
    job,
    ["slug", "id"],
  );
}

function getTeam(job: Job) {
  return getString(
    job,
    [
      "department",
      "team",
      "discipline",
      "category",
    ],
  );
}

function getSummary(job: Job) {
  return getString(
    job,
    [
      "description",
      "summary",
      "overview",
      "excerpt",
    ],
  );
}

function getLocation(job: Job) {
  return getString(
    job,
    [
      "location",
      "officeLocation",
    ],
  );
}

function getLocationType(job: Job) {
  return getString(
    job,
    [
      "locationType",
      "workStyle",
      "workMode",
    ],
  );
}

function getEmploymentType(job: Job) {
  return getString(
    job,
    [
      "employmentType",
      "type",
    ],
  );
}

function getExperienceLevel(job: Job) {
  return getString(
    job,
    [
      "experienceLevel",
      "level",
      "seniority",
    ],
  );
}

function getTechnologies(job: Job) {
  return getStringArray(
    job,
    [
      "technologies",
      "skills",
      "techStack",
    ],
  );
}

function isVisibleJob(job: Job) {
  const status = getString(
    job,
    ["status"],
  ).toLowerCase();

  if (!status) {
    return true;
  }

  return ![
    "closed",
    "inactive",
    "archived",
    "draft",
  ].includes(status);
}

function uniqueValues(values: string[]) {
  return Array.from(
    new Set(
      values.filter(
        (value) => value.trim().length > 0,
      ),
    ),
  ).sort((a, b) => a.localeCompare(b));
}

export default function JobsExplorer({
  jobs,
}: JobsExplorerProps) {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All");
  const [workStyle, setWorkStyle] =
    useState("All");
  const [experience, setExperience] =
    useState("All");

  const availableJobs = useMemo(
    () => jobs.filter(isVisibleJob),
    [jobs],
  );

  const teams = useMemo(
    () =>
      uniqueValues(
        availableJobs.map((job) => getTeam(job)),
      ),
    [availableJobs],
  );

  const workStyles = useMemo(
    () =>
      uniqueValues(
        availableJobs.map((job) =>
          getLocationType(job),
        ),
      ),
    [availableJobs],
  );

  const experienceLevels = useMemo(
    () =>
      uniqueValues(
        availableJobs.map((job) =>
          getExperienceLevel(job),
        ),
      ),
    [availableJobs],
  );

  const visibleJobs = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLowerCase();

    return availableJobs.filter((job) => {
      const title = getTitle(job);
      const jobTeam = getTeam(job);
      const summary = getSummary(job);
      const location = getLocation(job);
      const locationType =
        getLocationType(job);
      const employmentType =
        getEmploymentType(job);
      const experienceLevel =
        getExperienceLevel(job);
      const technologies =
        getTechnologies(job);

      const searchableText = [
        title,
        jobTeam,
        summary,
        location,
        locationType,
        employmentType,
        experienceLevel,
        ...technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(
          normalizedQuery,
        );

      const matchesTeam =
        team === "All" || jobTeam === team;

      const matchesWorkStyle =
        workStyle === "All" ||
        locationType === workStyle;

      const matchesExperience =
        experience === "All" ||
        experienceLevel === experience;

      return (
        matchesQuery &&
        matchesTeam &&
        matchesWorkStyle &&
        matchesExperience
      );
    });
  }, [
    availableJobs,
    query,
    team,
    workStyle,
    experience,
  ]);

  const filtersActive =
    query.trim().length > 0 ||
    team !== "All" ||
    workStyle !== "All" ||
    experience !== "All";

  function clearFilters() {
    setQuery("");
    setTeam("All");
    setWorkStyle("All");
    setExperience("All");
  }

  const selectClasses =
    "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10";

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search and filters */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                Find a Role
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Search current opportunities
              </h2>
            </div>

            <p
              className="shrink-0 text-sm text-slate-500"
              aria-live="polite"
            >
              {visibleJobs.length}{" "}
              {visibleJobs.length === 1
                ? "role"
                : "roles"}
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-1">
              <label
                htmlFor="job-search"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Search
              </label>

              <input
                id="job-search"
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Role, skill, technology..."
                className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="job-team"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Team
              </label>

              <select
                id="job-team"
                value={team}
                onChange={(event) =>
                  setTeam(event.target.value)
                }
                className={selectClasses}
              >
                <option value="All">
                  All teams
                </option>

                {teams.map((value) => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="job-work-style"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Work style
              </label>

              <select
                id="job-work-style"
                value={workStyle}
                onChange={(event) =>
                  setWorkStyle(event.target.value)
                }
                className={selectClasses}
              >
                <option value="All">
                  All work styles
                </option>

                {workStyles.map((value) => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="job-experience"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Experience
              </label>

              <select
                id="job-experience"
                value={experience}
                onChange={(event) =>
                  setExperience(event.target.value)
                }
                className={selectClasses}
              >
                <option value="All">
                  All levels
                </option>

                {experienceLevels.map(
                  (value) => (
                    <option
                      key={value}
                      value={value}
                    >
                      {value}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>

          {filtersActive && (
            <div className="mt-5 border-t border-slate-200 pt-5">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-violet-700 transition hover:text-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mt-8">
          {visibleJobs.length > 0 ? (
            <div className="space-y-4">
              {visibleJobs.map(
                (job, index) => {
                  const title =
                    getTitle(job);
                  const slug =
                    getSlug(job);
                  const jobTeam =
                    getTeam(job);
                  const summary =
                    getSummary(job);
                  const location =
                    getLocation(job);
                  const locationType =
                    getLocationType(job);
                  const employmentType =
                    getEmploymentType(job);
                  const experienceLevel =
                    getExperienceLevel(job);
                  const technologies =
                    getTechnologies(job);

                  const card = (
                    <article className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                      <div className="min-w-0">
                        {(jobTeam ||
                          experienceLevel) && (
                          <div className="flex flex-wrap gap-2">
                            {jobTeam && (
                              <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                                {jobTeam}
                              </span>
                            )}

                            {experienceLevel && (
                              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                                {experienceLevel}
                              </span>
                            )}
                          </div>
                        )}

                        <h3
                          className={`text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl ${
                            jobTeam ||
                            experienceLevel
                              ? "mt-4"
                              : ""
                          }`}
                        >
                          {title}
                        </h3>

                        {(location ||
                          locationType ||
                          employmentType) && (
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                            {location && (
                              <span>
                                {location}
                              </span>
                            )}

                            {locationType && (
                              <span>
                                {locationType}
                              </span>
                            )}

                            {employmentType && (
                              <span>
                                {employmentType}
                              </span>
                            )}
                          </div>
                        )}

                        {summary && (
                          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            {summary}
                          </p>
                        )}

                        {technologies.length >
                          0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {technologies
                              .slice(0, 6)
                              .map(
                                (
                                  technology,
                                ) => (
                                  <span
                                    key={
                                      technology
                                    }
                                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                                  >
                                    {
                                      technology
                                    }
                                  </span>
                                ),
                              )}
                          </div>
                        )}
                      </div>

                      {slug && (
                        <div className="flex items-center justify-between border-t border-slate-200 pt-5 lg:block lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                          <span className="text-sm font-semibold text-violet-700">
                            View role
                          </span>

                          <span
                            className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white lg:mt-4"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      )}
                    </article>
                  );

                  if (!slug) {
                    return (
                      <div
                        key={`${title}-${index}`}
                        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8"
                      >
                        {card}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={slug}
                      href={`/careers/jobs/${slug}`}
                      className="group block rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-violet-200 hover:shadow-lg hover:shadow-slate-950/5 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:p-7 lg:p-8"
                    >
                      {card}
                    </Link>
                  );
                },
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center sm:px-8">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-violet-700"
                aria-hidden="true"
              >
                ×
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                No roles match these filters.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                Try a broader search or remove one or more
                filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}