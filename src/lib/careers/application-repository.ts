import type {
  ApplicationRecord,
  ApplicationStatus,
  CreateApplicationInput,
} from "@/lib/careers/application-record";

export type ApplicationListFilters = {
  jobId?: string;
  status?: ApplicationStatus;
  email?: string;

  limit?: number;
  offset?: number;
};

export interface ApplicationRepository {
  create(
    input: CreateApplicationInput,
  ): Promise<ApplicationRecord>;

  findById(
    id: string,
  ): Promise<ApplicationRecord | null>;

  list(
    filters?: ApplicationListFilters,
  ): Promise<ApplicationRecord[]>;

  updateStatus(
    id: string,
    status: ApplicationStatus,
  ): Promise<ApplicationRecord | null>;
}