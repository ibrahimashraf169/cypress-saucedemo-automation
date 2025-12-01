import E2ESelectors from "../selectors/e2e.selectors";

export class E2EPage {
  static enterFirstName(firstName) {
    cy.get(E2ESelectors.firstName).type(firstName);
  }

  static enterLastName(lastName) {
    cy.get(E2ESelectors.lastName).type(lastName);
  }

  static enterPostalCode(postalCode) {
    cy.get(E2ESelectors.postalCode).type(postalCode);
  }

  static clickContinueBtn() {
    cy.get(E2ESelectors.continueBtn).click();
  }

  static clickFinishBtn() {
    cy.get(E2ESelectors.finishBtn).click();
  }

  static clickBackToHomeBtn() {
    cy.get(E2ESelectors.backToHomeBtn).click();
  }
}

