const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Performance settings
  numTestsKeptInMemory: 10,
  
  // Timeouts (in milliseconds)
  defaultCommandTimeout: 10000,  // 10 seconds - reasonable for most commands
  pageLoadTimeout: 30000,        // 30 seconds for page loads
  requestTimeout: 10000,         // 10 seconds for API requests
  responseTimeout: 30000,        // 30 seconds for API responses
  
  // Viewport
  viewportHeight: 768,
  viewportWidth: 1400,
  
  // Development settings
  watchForFileChanges: false,
  
  // Screenshots and Videos
  screenshotOnRunFailure: true,
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  
  // Environment variables
  env: {
    apiUrl: "",
    apiTimeout: 30000,
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    testIsolation: true,
    experimentalStudio: true,
    chromeWebSecurity: false,
    
    // Retries on failure
    retries: {
      runMode: 2,
      openMode: 0,
    },
    
    setupNodeEvents(on, config) {
      // Node event listeners can be added here
      return config;
    },
  },
});
