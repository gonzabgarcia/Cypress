// cypress/support/commands.js

Cypress.Commands.add('fillLoginForm', (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('assertLoginError', () => {
    cy.get('.error-message').should('be.visible');
  });
  