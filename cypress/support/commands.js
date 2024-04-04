Cypress.Commands.add('loginPage', () =>{
    // cy.visit('https://www.saucedemo.com');
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.url().should('contain', 'practice-test-login');
    cy.contains('h2', 'Test login').should('be.visible');
});

Cypress.Commands.add('activeSession', () => {
    cy.url().should('contain', 'logged-in-successfully');
    cy.get('article').within(() => {
        cy.contains('h1', 'Logged In Successfully').should('be.visible');
        cy.contains('p', 'Congratulations student. You successfully logged in!').should('be.visible');
        cy.contains('a', 'Log out').should('be.visible').and('not.be.disabled');
    })
})