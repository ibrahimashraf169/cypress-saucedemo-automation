import loginSelectors from "../selectors/loginSelectors";

export class LoginPage {
  typeEmail(email) {
    cy.get(loginSelectors.emailInput).clear().type(email);
    return this;
  }
}
