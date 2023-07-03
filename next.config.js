// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/jolanda",
  experimental: {
    appDir: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
