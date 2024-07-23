describe('Example Test', () => {
  it('should visit the home page', () => {
    cy.visit('/');
    cy.contains('Welcome to React'); // Ajusta según tu aplicación
  });
});