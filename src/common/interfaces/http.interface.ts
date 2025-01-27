export interface Http {
  get: <T>(url: string) => Promise<T>;
  post: <T, D>(url: string, body: D) => Promise<T>;
  put: <T, D>(url: string, body: D) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}
