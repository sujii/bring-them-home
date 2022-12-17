import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "zdchyt",

  e2e: {
    baseUrl: "http://172.0.0.1:8888",
    chromeWebSecurity: false,
    specPattern: "./e2e/**/*.spec.*",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
})
