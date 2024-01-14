/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env['OUTPUT'],
  basePath: process.env['BASE_PATH'],
  trailingSlash: true,
  logging:{
    fetches:{
      fullUrl: true
    }
  }
}

module.exports = nextConfig
