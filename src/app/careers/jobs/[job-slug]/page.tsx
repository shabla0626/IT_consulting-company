import { notFound } from "next/navigation";

import JobDetail from "@/components/careers/jobs/JobDetail";
import { jobs } from "@/data/jobs";

type JobPageProps = {
  params: Promise<{
    "job-slug": string;
  }>;
};

export default async function JobPage({
  params,
}: JobPageProps) {
  const { "job-slug": jobSlug } =
    await params;

  const job = jobs.find((item) => {
    const record =
      item as unknown as Record<
        string,
        unknown
      >;

    return (
      record.slug === jobSlug ||
      record.id === jobSlug
    );
  });

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}