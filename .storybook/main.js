const path = require("path");

module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/pages": path.resolve(__dirname, "../src/pages"),
      "@/context": path.resolve(__dirname, "../src/context"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/services": path.resolve(__dirname, "../src/services"),
      "@/styles": path.resolve(__dirname, "../src/styles"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/stories": path.resolve(__dirname, "../src/stories"),
      "@/assets": path.resolve(__dirname, "../src/assets"),
    };
    return config;
  },
};
