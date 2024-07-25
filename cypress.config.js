const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configura el plugin Mochawesome
      try {
        require('cypress-mochawesome-reporter/plugin')(on);
      } catch (error) {
        console.error('Error setting up plugins:', error);
      }

      // Retorna la configuración
      return config;
    },
    baseUrl: 'http://localhost:3000', // Ajusta esto a la URL de tu aplicación
    specPattern: 'cypress/integration/**/*.spec.js', // Especifica el patrón para los archivos de pruebas
    supportFile: 'cypress/support/index.js', // Archivo de soporte para comandos globales y configuraciones adicionales
    viewportWidth: 1280, // Ajusta el tamaño del viewport si es necesario
    viewportHeight: 720, // Ajusta el tamaño del viewport si es necesario
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
