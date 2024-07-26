const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      try {
        require('cypress-mochawesome-reporter/plugin')(on);
      } catch (error) {
        console.error('Error setting up plugins:', error);
      }
      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/commands.js',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Cypress Test Results',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});
