"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import {
  openJobs,
  type EmploymentType,
  type ExperienceLevel,
  type JobLocationType,
  type JobTeam,
} from "@/data/jobs";

const teamQueryMap: Record<string, JobTeam> = {
  engineering: "Engineering",
  cloud: "Cloud",
  "data-ai": "Data & AI",
  design: "Design",
  consulting: "Consulting",
  security: "Security",
};

const teamSlugMap: Record<JobTeam, string> = {
  Engineering: "engineering",
  Cloud: "cloud",
  "Data & AI": "data-ai",
  Design: "design",
  Consulting: "consulting",
  Security: "security",
};

function uniqueValues<T extends string>(values: T[]) {
  return Array.from(new Set(values));
}

export default function JobsExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialTeamParam = searchParams.get("team");

  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const [team, setTeam] = useState<JobTeam | "">(
    initialTeamParam && teamQueryMap[initialTeamParam]
      ? teamQueryMap[initialTeamParam]
      : "",
  );

  const [location, setLocation] = useState(
    searchParams.get("location") ?? "",
  );

  const [locationType, setLocationType] = useState<
    JobLocationType | ""
  >(
    (searchParams.get("workType") as JobLocationType | null) ?? "",
  );

  const [employmentType, setEmploymentType] = useState<
    EmploymentType | ""
  >(
    (searchParams.get("employmentType") as EmploymentType | null) ?? "",
  );

  const [experienceLevel, setExperienceLevel] = useState<
    ExperienceLevel | ""
  >(
    (searchParams.get("level") as ExperienceLevel | null) ?? "",
  );

  const teams = useMemo(
    () => uniqueValues(openJobs.map((job) => job.team)),
    [],
  );

  const locations = useMemo(
    () => uniqueValues(openJobs.map((job) => job.location)),
    [],
  );

  const locationTypes = useMemo(
    () => uniqueValues(openJobs.map((job) => job.locationType)),
    [],
  );

  const employmentTypes = useMemo(
    () => uniqueValues(openJobs.map((job) => job.employmentType)),
    [],
  );

  const experienceLevels = useMemo(
    () => uniqueValues(openJobs.map((job) => job.experienceLevel)),
    [],
  );

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return openJobs.filter((job) => {
      const searchableContent = [
        job.title,
        job.team,
        job.location,
        job.locationType,
        job.employmentType,
        job.experienceLevel,
        job.summary,
        ...job.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery ||
        searchableContent.includes(normalizedQuery);

      const matchesTeam = !team || job.team === team;

      const matchesLocation =
        !location || job.location === location;

      const matchesLocationType =
        !locationType || job.locationType === locationType;

      const matchesEmployment =
        !employmentType ||
        job.employmentType === employmentType;

      const matchesExperience =
        !experienceLevel ||
        job.experienceLevel === experienceLevel;

      return (
        matchesQuery &&
        matchesTeam &&
        matchesLocation &&
        matchesLocationType &&
        matchesEmployment &&
        matchesExperience
      );
    });
  }, [
    query,
    team,
    location,
    locationType,
    employmentType,
    experienceLevel,
  ]);

  const hasActiveFilters =
    query ||
    team ||
    location ||
    locationType ||
    employmentType ||
    experienceLevel;

  useEffect(() => {
    const params = new URLSearchParams();

    if (query.trim()) {
      params.set("q", query.trim());
    }

    if (team) {
      params.set("team", teamSlugMap[team]);
    }

    if (location) {
      params.set("location", location);
    }

    if (locationType) {
      params.set("workType", locationType);
    }

    if (employmentType) {
      params.set("employmentType", employmentType);
    }

    if (experienceLevel) {
      params.set("level", experienceLevel);
    }

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false },
    );
  }, [
    query,
    team,
    location,
    locationType,
    employmentType,
    experienceLevel,
    pathname,
    router,
  ]);

  function clearFilters() {
    setQuery("");
    setTeam("");
    setLocation("");
    setLocationType("");
    setEmploymentType("");
    setExperienceLevel("");
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search area */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <label
              htmlFor="job-search"
              className="text-sm font-semibold text-slate-950"
            >
              Search opportunities
            </label>

            <div className="relative mt-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                />
              </svg>

              <input
                id="job-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role, technology, team, or skill"
                className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <FilterSelect
              label="Team"
              value={team}
              onChange={(value) => setTeam(value as JobTeam | "")}
              options={teams}
            />

            <FilterSelect
              label="Location"
              value={location}
              onChange={setLocation}
              options={locations}
            />

            <FilterSelect
              label="Work arrangement"
              value={locationType}
              onChange={(value) =>
                setLocationType(value as JobLocationType | "")
              }
              options={locationTypes}
            />

            <FilterSelect
              label="Employment type"
              value={employmentType}
              onChange={(value) =>
                setEmploymentType(value as EmploymentType | "")
              }
              options={employmentTypes}
            />

            <FilterSelect
              label="Experience level"
              value={experienceLevel}
              onChange={(value) =>
                setExperienceLevel(value as ExperienceLevel | "")
              }
              options={experienceLevels}
            />
          </div>

          {/* Filter status */}
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-sm text-slate-600"
              aria-live="polite"
            >
              <span className="font-semibold text-slate-950">
                {filteredJobs.length}
              </span>{" "}
              {filteredJobs.length === 1
                ? "opportunity"
                : "opportunities"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="w-fit text-sm font-semibold text-violet-700 transition hover:text-violet-900"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mt-10">
          {filteredJobs.length > 0 ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {filteredJobs.map((job, index) => (
                <Link
                  key={job.id}
                  href={`/careers/jobs/${job.slug}`}
                  className={`group block p-7 transition duration-300 hover:bg-slate-50 sm:p-8 ${
                    index !== filteredJobs.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <div className="grid gap-7 lg:grid-cols-[1fr_240px_auto] lg:items-center">
                    {/* Job information */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                          {job.team}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-xs font-medium text-slate-500">
                          {job.employmentType}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-xs font-medium text-slate-500">
                          {job.experienceLevel}
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                        {job.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                        {job.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.technologies.slice(0, 5).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {job.location}
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        {job.locationType}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-start lg:justify-end">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center sm:px-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                  />
                </svg>
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-950">
                No matching roles
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
                We could not find an opportunity matching the current
                combination of search terms and filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Development notice */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-5">
          <p className="text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-900">
              Development note:
            </span>{" "}
            The current opportunities are representative data used to build
            and validate the Careers experience. Real openings and employment
            details should replace them before public recruiting begins.
          </p>
        </div>
      </div>
    </section>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
      >
        <option value="">All</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}