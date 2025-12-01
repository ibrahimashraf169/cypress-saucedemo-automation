import { LoginPage } from "../../pages/login.page";

describe("Login Page - User Authentication", () => {
  let data;

  beforeEach(() => {
    return cy.fixture("test-data").then((fData) => {
      data = fData;
    });
  });

  it("should redirect to inventory page when user enters valid credentials", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.validUser.username);
    LoginPage.enterPassword(data.validUser.password);
    LoginPage.clickLogin();
    cy.url().should("include", "/inventory.html");
  });

  it("should display error message when user enters invalid credentials", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.invalidUser.username);
    LoginPage.enterPassword(data.invalidUser.password);
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage(data.invalidUser.expectedError);
  });

  it("should display error message when locked out user tries to login", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.lockedOutUser.username);
    LoginPage.enterPassword(data.lockedOutUser.password);
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage(data.lockedOutUser.expectedError);
  });

  it("should display error message when username field is empty", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.emptyFields.username);
    LoginPage.enterPassword(data.validUser.password);
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage(data.emptyFields.usernameError);
  });

  it("should display error message when password field is empty", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.validUser.username);
    LoginPage.enterPassword(data.emptyFields.password);
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage(data.emptyFields.passwordError);
  });
});
