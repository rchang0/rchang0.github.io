import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig: NextConfig = {
    output: "export",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        unoptimized: true,
    },
};

const withMdx = createMdx();

export default withMdx(nextConfig);
