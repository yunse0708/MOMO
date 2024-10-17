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
  webpack(config) {
    // SVG 파일을 컴포넌트로 변환하는 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // 필요한 옵션 설정 가능
          },
        },
      ],
    });

    return config;
  },
};

export default withVanillaExtract(
  withMDX({
    extension: /\.mdx$/,
  })(nextConfig)
);
