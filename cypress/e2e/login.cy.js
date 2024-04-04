/// <reference types="cypress" />

const credentials = {
  usernameValue: 'student',
  passwordValue: 'Password123'
}

const elements = {
  inputUsername: '#username',
  inputPassword: '#password',
  buttonLogin: '#submit'
}

context('Login page', () => {
  describe('Log in successfully', () => {
    it('Validates successful login functionality', () => {
      cy.loginPage();
      cy.get(elements.inputUsername).type(credentials.usernameValue);
      cy.get(elements.inputPassword).type(credentials.passwordValue);
      cy.get(elements.buttonLogin).click();
      cy.activeSession();
      cy.contains('a', 'Log out').click().then(() => {
        cy.loginPage();
      })
    });
  });
});