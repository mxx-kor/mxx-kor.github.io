/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COMMENTS_REPO: "mxx-kor/minjae.github.io",
    COMMENTS_REPO_ID: "R_kgDOJ2XnQw",
    COMMENTS_CATEGORY: "Comments",
    COMMENTS_CATEGORY_ID: "DIC_kwDOJ2XnQ84CXxYD",
  },
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
