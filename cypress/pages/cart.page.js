import CartSelectors from "../selectors/cart.selectors";

export class CartPage {
  static clickCheckoutBtn() {
    cy.get(CartSelectors.checkoutBtn).click();
  }
}

