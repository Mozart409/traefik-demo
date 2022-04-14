// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  /* config options here */
  experimental: {
    outputStandalone: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig
