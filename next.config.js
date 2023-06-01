const withTM = require('next-transpile-modules')(['three'])

const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
  };

module.exports = withTM()

module.exports = nextConfig;