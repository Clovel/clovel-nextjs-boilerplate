const withMdx = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'mdx',
    'md',
  ],
};

module.exports = withMdx(nextConfig);
