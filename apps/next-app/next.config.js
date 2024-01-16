/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env['OUTPUT'],
  basePath: process.env['BASE_PATH'],
  trailingSlash: true,
  logging:{
    fetches:{
      fullUrl: true
    }
  },
  images:{
    remotePatterns:[{
      hostname: process.env['ASSET_HOSTNAME'] ?? 'images.ctfassets.net'
    }]
  }
}

module.exports = nextConfig
