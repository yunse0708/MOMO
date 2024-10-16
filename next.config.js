import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import withMDX from "@next/mdx";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};

export default withVanillaExtract(
  withMDX({
    extension: /\.mdx$/,
  })(nextConfig)
);
