import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JobDetail from "@/components/careers/jobs/JobDetail";
import { getJobBySlug, jobs } from "@/data/jobs";

type JobPageProps = {
  params: Promise<{
    "job-slug": string;
  }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({
    "job-slug": job.slug,
  }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams["job-slug"];

  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found | Nexora Careers",
      description:
        "The requested career opportunity could not be found.",
    };
  }

  return {
    title: `${job.title} | Careers at Nexora`,
    description: job.summary,
  };
}

export default async function JobPage({
  params,
}: JobPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["job-slug"];

  const job = getJobBySlug(slug);

  if (!job || job.status !== "open") {
    notFound();
  }

  return <JobDetail job={job} />;
}