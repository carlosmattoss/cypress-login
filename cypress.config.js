const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 12000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
