import { ProductDetailsPage } from "../../pages/product-details.page";
import { ProductPage } from "../../pages/product.page";
import { CartPage } from "../../pages/cart.page";

describe("Shopping Cart Page - Checkout Navigation", () => {
  let productData;

  beforeEach(() => {
    cy.loginAsValidUser();
    return cy.fixture("product-name").then((data) => {
      productData = data;
    });
  });

  it("should navigate to checkout page when clicking checkout button from cart", () => {
    ProductPage.clickOnProduct(productData.productName);
    cy.url().should("include", "inventory-item.html?id=4");
    ProductDetailsPage.clickAddToCart();
    cy.get(".shopping_cart_link").should("contain", "1");
    ProductDetailsPage.clickCartLink();
    cy.url().should("include", "/cart.html");
    CartPage.clickCheckoutBtn();
    cy.url().should("include", "/checkout-step-one.html");
  });
});
