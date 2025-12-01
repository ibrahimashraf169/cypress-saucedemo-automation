import LoginSelectors from "../selectors/login.selectors";

export class LoginPage {
  static visit() {
    cy.visit("/");
  }

  static enterUsername(username) {
    if (username) {
      cy.get(LoginSelectors.usernameInput).type(username);
    } else {
      cy.get(LoginSelectors.usernameInput).clear();
    }
  }

  static enterPassword(password) {
    if (password) {
      cy.get(LoginSelectors.passwordInput).type(password);
    } else {
      cy.get(LoginSelectors.passwordInput).clear();
    }
  }

  static clickLogin() {
    cy.get(LoginSelectors.loginButton).click();
  }
}

