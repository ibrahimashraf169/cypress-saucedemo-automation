import ProductDetailsSelectors from "../selectors/product-details.selectors";

export class ProductDetailsPage {
  static clickAddToCart() {
    cy.get(ProductDetailsSelectors.addToCartBtn).click();
  }

  static clickCartLink() {
    cy.get(ProductDetailsSelectors.cartLink).click();
  }
}

