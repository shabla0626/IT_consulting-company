import JobsExplorer from "@/components/careers/jobs/JobsExplorer";
import JobsHero from "@/components/careers/jobs/JobsHero";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <main>
      <JobsHero />
      <JobsExplorer jobs={jobs} />
    </main>
  );
}