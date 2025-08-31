import { AuthPage } from "../apiPages/authPage";

describe("Authentication API Tests", () => {
  it("should authenticate user successfully", () => {
    // Instead of This Use Fixture File
    const credentials = {
      username: "admin",
      password: "password123",
    };

    AuthPage.login(credentials).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      cy.log("Token:", response.body.token);
      Cypress.env("token", response.body.token);
    });
  });
});
