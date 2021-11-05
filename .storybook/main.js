// const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');

const maxAssetSize = 1024 * 1024;
const minAssetSize = 30 * 1024;
module.exports = async ({
  config,
  mode
}) => {
  return merge(config, {
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: minAssetSize,
          maxSize: maxAssetSize,
        }
      },
      performance: {
        maxAssetSize: maxAssetSize
      },
    features: {
      postcss: false,
    },
    core: {
      builder: "webpack4",
    },
    "stories": [
      "../stories/**/*.stories.mdx",
      "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      // "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-a11y",
      "@storybook/addon-cssresources",
      "@whitespace/storybook-addon-html",
      "storybook-addon-pseudo-states",
      "storybook-addon-designs"
    ],
  });
};