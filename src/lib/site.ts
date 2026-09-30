export const siteConfig = {
  name: "Nexora Consulting",
  shortName: "Nexora",

  description:
    "Technology consulting across software engineering, AI and data, cloud and DevOps, cybersecurity, and technology transformation.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3000",
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return new URL(
    normalizedPath,
    `${siteConfig.url}/`,
  ).toString();
}