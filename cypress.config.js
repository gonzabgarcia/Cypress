const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false, // Si deseas que el reporte anterior no se sobrescriba
      html: false,
      json: true
    },
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});