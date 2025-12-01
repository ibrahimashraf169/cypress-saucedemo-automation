import ProductSelectors from "../selectors/product.selectors";

export class ProductPage {
  static visit() {
    cy.visit("/inventory.html");
  }

  static clickOnProduct(productName) {
    cy.get(ProductSelectors.productTitle).contains(productName).click();
  }
}

