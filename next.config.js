// eslint-disable-next-line @typescript-eslint/no-var-requires
const withExportImages = require("next-export-optimize-images");
/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: "export",
  images: {
    deviceSizes: [640, 960, 1280, 1600, 1920],
  },
});

module.exports = nextConfig;
