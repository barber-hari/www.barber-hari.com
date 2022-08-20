const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');


module.exports = withPlugins([withVideos], {
  reactStrictMode: true,
  swcMinify: true,
})