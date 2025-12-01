# Web Automation Technical Assessment - Sauce Demo

## Overview

This project is an automated testing framework built with **Cypress**, designed to validate the core functionalities of the [Sauce Demo website](https://www.saucedemo.com/).

The framework follows **Page Object Model (POM)** design pattern and adheres to best practices such as:

- DRY (Don't Repeat Yourself)
- Reusability of functions through custom commands
- Clear naming conventions for variables, functions, and classes
- Externalized test data using fixtures (not hardcoded)
- Consistent kebab-case file naming convention

## Requirements

- Node.js 16+
- npm
- Cypress 12+
- Git

## Features Tested

1. **User Login**
   - Successful login with valid credentials
   - Error messages for invalid login attempts
   - Validation for empty username/password fields

2. **Product Navigation**
   - Navigate from product listing to product details page
   - View product information

3. **Add Product to Cart**
   - Add product to shopping cart
   - Cart badge updates with item count
   - Navigate to cart page

4. **Shopping Cart**
   - View cart contents
   - Proceed to checkout

5. **End-to-End Purchase Flow**
   - Complete user journey from login to order confirmation
   - Product selection → Add to cart → Checkout → Customer info → Order complete

## Project Structure

```
cypress-project/
│── cypress.config.js          # Cypress configuration
│── package.json               # npm dependencies
│── README.md
│
├── cypress/
│   ├── e2e/                   # Test files
│   │   ├── api/
│   │   │   ├── pages/
│   │   │   │   └── auth.page.js
│   │   │   └── test/
│   │   │       └── login.cy.js
│   │   └── test/
│   │       ├── cart.cy.js
│   │       ├── end-to-end.cy.js
│   │       ├── login.cy.js
│   │       ├── product-details.cy.js
│   │       └── products.cy.js
│   │
│   ├── fixtures/              # Test data (JSON files)
│   │   ├── e2e-data.json
│   │   ├── product-name.json
│   │   └── test-data.json
│   │
│   ├── pages/                 # Page Object Model classes
│   │   ├── cart.page.js
│   │   ├── e2e.page.js
│   │   ├── login.page.js
│   │   ├── product-details.page.js
│   │   └── product.page.js
│   │
│   ├── selectors/             # Element selectors
│   │   ├── cart.selectors.js
│   │   ├── e2e.selectors.js
│   │   ├── login.selectors.js
│   │   ├── product-details.selectors.js
│   │   └── product.selectors.js
│   │
│   ├── support/
│   │   ├── commands.js        # Custom Cypress commands
│   │   └── e2e.js             # Global configuration
│   │
│   └── utils/                 # Utility functions
│       ├── api/
│       │   ├── api-helper.js
│       │   └── endpoints.js
│       ├── data-generator.js
│       ├── route-parameters.js
│       └── wait-commands.js
│
└── node_modules/              # Dependencies
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cypress-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests (headless):
   ```bash
   npx cypress run
   ```

4. Run tests (with UI):
   ```bash
   npx cypress open
   ```

---

✅ Test data is managed in **fixtures/** folder (JSON files) so it can be updated easily without modifying test scripts.

✅ Framework uses **Page Object Model (POM)** for scalability and maintainability.

✅ Custom commands (`cy.login()`, `cy.loginAsValidUser()`) eliminate repetitive login code across tests.

✅ Selectors are centralized in separate files for easy maintenance.
