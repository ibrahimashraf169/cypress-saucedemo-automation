import { ProductPage } from "../../pages/product.page";

describe("Product Listing Page - Product Navigation", () => {
  let productData;

  beforeEach(() => {
    cy.loginAsValidUser();
    return cy.fixture("product-name").then((data) => {
      productData = data;
    });
  });

  it("should navigate to product details page when clicking on a product", () => {
    ProductPage.clickOnProduct(productData.productName);
    cy.url().should("include", "inventory-item.html?id=4");
  });
});
