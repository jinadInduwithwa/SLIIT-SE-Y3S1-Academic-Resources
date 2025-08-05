describe('Simple Web Page Test', () => {
    it('Visits Example Page and verifies content', () => {
      // Visit the example page
      cy.visit('https://example.cypress.io');
  
      // Verify the page title
      cy.title().should('include', 'Cypress');
  
      // Find and click the "type" link
      cy.contains('type').click();
  
      // Verify URL change after clicking the link
      cy.url().should('include', '/commands/actions');
  
      // Type into an input box and verify the value
      cy.get('.action-email')
        .type('student@example.com')
        .should('have.value', 'student@example.com');
    });
  });