import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// On GitHub Actions, GITHUB_REPOSITORY looks like "owner/repo".
// Project sites are served from /repo; user sites (owner.github.io) use the root.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repo?.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS && repo && !isUserSite ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: { root: projectRoot },
};

export default nextConfig;
