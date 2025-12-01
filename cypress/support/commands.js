// ***********************************************
// Custom Commands for Cypress Tests
// https://on.cypress.io/custom-commands
// ***********************************************

import { LoginPage } from "../pages/login.page";

/**
 * Custom login command - performs UI login
 * @param {string} username - The username to login with
 * @param {string} password - The password to login with
 */
Cypress.Commands.add("login", (username, password) => {
  LoginPage.visit();
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.clickLogin();
  cy.url().should("include", "/inventory.html");
});

/**
 * Login with valid user from fixtures
 */
Cypress.Commands.add("loginAsValidUser", () => {
  cy.fixture("test-data").then((data) => {
    cy.login(data.validUser.email, data.validUser.password);
  });
});
