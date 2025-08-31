const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 150000,
  viewportHeight: 768,
  viewportWidth: 1400,
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  env: {
    apiUrl: "", //Add Your API URLHere "https://your-api.com" like this
    apiTimeout: 30000,
    retryAttempts: 2,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "", //Add Your Website URL Here "https://your-app.com" like this
    experimentalStudio: true, // This is for Cypress Studio (GUI Testing)"Screen Recording For Your Tests"
    testIsolation: true, // This is for Isolation of Tests (Each Test Runs in a Separate Browser)"Each Test Runs in a Separate Browser"
    retries: {
      runMode: 2,
      openMode: 0,
    },
    chromeWebSecurity: false,
  },
});
