import { ProductDetailsPage } from "../../pages/product-details.page";
import { ProductPage } from "../../pages/product.page";

describe("Product Details Page - Add to Cart Functionality", () => {
  let productData;

  beforeEach(() => {
    cy.loginAsValidUser();
    return cy.fixture("product-name").then((data) => {
      productData = data;
    });
  });

  it("should add product to cart and navigate to cart page successfully", () => {
    ProductPage.clickOnProduct(productData.productName);
    cy.url().should("include", "inventory-item.html?id=4");
    ProductDetailsPage.clickAddToCart();
    cy.get(".shopping_cart_link").should("contain", "1");
    ProductDetailsPage.clickCartLink();
    cy.url().should("include", "/cart.html");
  });
});
