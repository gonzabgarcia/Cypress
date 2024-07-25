// cypress/support/index.js

// Comando personalizado para llenar el formulario de login
Cypress.Commands.add('fillLoginForm', (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  // Comando personalizado para verificar el mensaje de error en el login
  Cypress.Commands.add('assertLoginError', () => {
    cy.get('.error-message').should('be.visible'); // Ajusta el selector según el mensaje de error en tu aplicación
  });
  
  // Manejo global de errores no capturados
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Maneja excepciones no capturadas para evitar que fallen las pruebas
    // Puedes personalizar esta lógica según tus necesidades
    return false;
  });
  
  // Configuración del plugin Mochawesome
  try {
    require('cypress-mochawesome-reporter/plugin')(on, config);
  } catch (error) {
    console.error('Error setting up Mochawesome plugin:', error);
  }
  
  // Configuración de hooks globales (opcional)
  beforeEach(() => {
    // Configura el estado antes de cada prueba, como iniciar sesión
    cy.visit('/'); // Ajusta según la URL de inicio de tu aplicación
    cy.login('defaultuser@example.com', 'defaultpassword'); // Comando de ejemplo para iniciar sesión
  });
  
  afterEach(() => {
    // Limpia después de cada prueba, como cerrar sesión
    cy.get('button#logout').click(); // Ajusta el selector según tu aplicación
  });
  