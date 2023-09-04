/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    COMMENTS_REPO: "mxx-kor/mxx-kor.github.io",
    COMMENTS_REPO_ID: "R_kgDOJ2XnQw",
    COMMENTS_CATEGORY: "Comments",
    COMMENTS_CATEGORY_ID: "DIC_kwDOJ2XnQ84CXxYD",
  },
  images: {
    unoptimized: true,
    domains: ["s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
