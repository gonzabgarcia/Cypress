const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@shelex/cypress-allure-plugin/writer')(on);
      return config;
    },
    baseUrl: 'http://localhost:3000', // Ajusta esto a la URL de tu aplicación
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
  allure: {
    outputDir: 'cypress/reports/allure-results',
  },
});
