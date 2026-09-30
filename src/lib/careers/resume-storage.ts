export type StoredResume = {
  storageKey: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
};

export type StoreResumeInput = {
  applicationId: string;
  file: File;
};

export interface ResumeStorage {
  store(
    input: StoreResumeInput,
  ): Promise<StoredResume>;

  delete(
    storageKey: string,
  ): Promise<void>;
}