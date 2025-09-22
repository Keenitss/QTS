// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// 1. Define your constants at the top
const DEFAULT_EMAIL = 'eusouerick@exemplo.com';
const DEFAULT_PASSWORD = 'vaisefudebahia';

Cypress.Commands.add('login', () => {
    
  cy.session([DEFAULT_EMAIL, DEFAULT_PASSWORD], () => {
    cy.visit('http://localhost/synapse-site/login.php');
    
    cy.get('input[name="email"]').type(DEFAULT_EMAIL);
    cy.get('input[name="senha"]').type(DEFAULT_PASSWORD);
    cy.get('.login-buttonlogin').click();
    
    cy.url().should('include', '/homelogv2.php');
  });
});