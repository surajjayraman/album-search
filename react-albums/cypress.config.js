const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },

    "viewportWidth": 900,
    "viewportHeight": 800,
    "baseUrl": "http://localhost:8002/"



  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
