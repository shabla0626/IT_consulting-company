export type ApplicationActionState = {
  status: "idle" | "error" | "validated";
  fieldErrors: Record<string, string>;
  formError?: string;
};

export const initialApplicationState: ApplicationActionState = {
  status: "idle",
  fieldErrors: {},
};