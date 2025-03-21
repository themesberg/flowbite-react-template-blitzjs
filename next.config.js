const {withBlitz} = require("@blitzjs/next")
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

module.exports = withFlowbiteReact(withBlitz(nextConfig))