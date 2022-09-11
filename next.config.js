const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

module.exports = withPlugins([withVideos], {
  reactStrictMode: false,
  swcMinify: true,
  // env: {
  //   REACT_APP_PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
  // },
});
