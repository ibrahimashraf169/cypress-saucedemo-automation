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
    LoginPage.enterUsername(data.validUser.email);
    LoginPage.enterPassword(data.validUser.password);
    LoginPage.clickLogin();
    cy.url().should("include", "/inventory.html");
  });

  it("should display error message when user enters invalid credentials", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.invalidUser.email);
    LoginPage.enterPassword(data.invalidUser.password);
    LoginPage.clickLogin();
    cy.get(".error-message-container ").should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("should display error message when username and password fields are empty", () => {
    LoginPage.visit();
    LoginPage.enterUsername(data.emptyFields.email);
    LoginPage.enterPassword(data.emptyFields.password);
    LoginPage.clickLogin();
    cy.get(".error-message-container ").should(
      "contain",
      "Epic sadface: Username is required"
    );
  });
});
