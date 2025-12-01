// Usage in pageObjects:
// this.visit(routeParameters.loginPage);
// this.visit(routeParameters.dashboardPage);
// this.visit(routeParameters.productDetailsPage(productId));

const routeParameters = {
  loginPage: "/",
  inventoryPage: "/inventory.html",
  cartPage: "/cart.html",
  checkoutStepOne: "/checkout-step-one.html",
  checkoutStepTwo: "/checkout-step-two.html",
  checkoutComplete: "/checkout-complete.html",
};

export default routeParameters;

