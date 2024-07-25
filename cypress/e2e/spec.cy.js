// cypress/e2e/spec.cy.js

describe('Front-End Application Tests', () => {
  
  // Prueba para verificar que la página de inicio carga correctamente
  it('should load the home page', () => {
    cy.visit('/');
    cy.title().should('include', 'Your App Title'); // Cambia esto según el título de tu aplicación
    cy.get('h1').should('contain', 'Welcome to Your App'); // Cambia esto según el contenido esperado
  });

  // Prueba para verificar que el formulario de login funciona correctamente
  it('should allow a user to log in', () => {
    cy.visit('/login'); // Ajusta la URL si es diferente
    cy.fillLoginForm('testuser@example.com', 'password123'); // Usa el comando personalizado
    cy.url().should('include', '/dashboard'); // Cambia esto según la URL esperada después del login
    cy.get('.welcome-message').should('contain', 'Welcome back, testuser'); // Cambia esto según el mensaje esperado
  });

  // Prueba para verificar que se muestra un error en el login con credenciales incorrectas
  it('should show an error on invalid login', () => {
    cy.visit('/login');
    cy.fillLoginForm('invaliduser@example.com', 'wrongpassword');
    cy.assertLoginError(); // Usa el comando personalizado para verificar el mensaje de error
  });

  // Prueba para verificar la funcionalidad de un botón en la página de inicio
  it('should navigate to the about page on button click', () => {
    cy.visit('/');
    cy.get('button#about-page').click(); // Ajusta el selector según el botón en tu página
    cy.url().should('include', '/about'); // Cambia esto según la URL esperada
    cy.get('h1').should('contain', 'About Us'); // Cambia esto según el contenido esperado
  });

  // Prueba para verificar la presencia de un componente específico
  it('should display the featured products section', () => {
    cy.visit('/');
    cy.get('.featured-products').should('be.visible'); // Ajusta el selector según el componente
    cy.get('.featured-products .product-item').should('have.length.greaterThan', 0); // Verifica que haya productos
  });
  
});
