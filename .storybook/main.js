module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],

  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}