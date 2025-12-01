import { ProductDetailsPage } from "../../pages/product-details.page";
import { ProductPage } from "../../pages/product.page";
import { CartPage } from "../../pages/cart.page";
import { E2EPage } from "../../pages/e2e.page";

describe("End-to-End - Complete Purchase Flow", () => {
  let productData;
  let e2eData;

  beforeEach(() => {
    cy.loginAsValidUser();
    return cy.fixture("product-name").then((pData) => {
      productData = pData;
      return cy.fixture("e2e-data").then((cData) => {
        e2eData = cData;
      });
    });
  });

  it("should complete full purchase journey from product selection to order confirmation", () => {
    // Step 1: Select a product from inventory
    ProductPage.clickOnProduct(productData.productName);
    cy.url().should("include", "inventory-item.html?id=4");

    // Step 2: Add product to cart
    ProductDetailsPage.clickAddToCart();
    cy.get(".shopping_cart_link").should("contain", "1");

    // Step 3: Navigate to cart
    ProductDetailsPage.clickCartLink();
    cy.url().should("include", "/cart.html");

    // Step 4: Proceed to checkout
    CartPage.clickCheckoutBtn();
    cy.url().should("include", "/checkout-step-one.html");

    // Step 5: Enter customer information
    E2EPage.enterFirstName(e2eData.customerInfo.firstName);
    E2EPage.enterLastName(e2eData.customerInfo.lastName);
    E2EPage.enterPostalCode(e2eData.customerInfo.postalCode);
    E2EPage.clickContinueBtn();
    cy.url().should("include", "/checkout-step-two.html");

    // Step 6: Complete order
    E2EPage.clickFinishBtn();
    cy.url().should("include", "/checkout-complete.html");
  });
});
