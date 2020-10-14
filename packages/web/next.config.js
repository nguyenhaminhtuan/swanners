const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@swanners/core']);

module.exports = withPlugins([withTM], {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
});
