# Cypress Automation Template

A comprehensive, well-structured Cypress automation framework template with Page Object Model (POM), API testing capabilities, and utility functions for efficient test automation.

## 🚀 Features

- **Page Object Model (POM)** implementation
- **API testing** with reusable helper classes
- **Custom commands** and utilities
- **Data generation** helpers for dynamic test data
- **Wait commands** for reliable element interactions
- **Fixture-based** test data management
- **Modular architecture** for maintainable tests

## 📁 Project Structure

```
cypress-automation-template/
├── cypress/
│   ├── e2e/                    # Test files
│   │   └── test/
│   │       └── loginTest.cy.js
│   ├── fixtures/               # Test data files
│   │   └── example.json
│   └── support/                # Framework support files
│       ├── apiPages/           # API page objects
│       │   └── authPage.js
│       ├── pages/              # UI page objects
│       ├── selectors/          # Element selectors
│       ├── utils/              # Utility functions
│       │   ├── apiHelper.js
│       │   ├── dataGenerator.js
│       │   ├── endpoints.js
│       │   ├── routes_parameters.js
│       │   └── waitCommands.js
│       ├── commands.js         # Custom Cypress commands
│       └── e2e.js             # Global configuration
├── cypress.config.js           # Cypress configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cypress-automation-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Open Cypress:**
   ```bash
   npx cypress open
   ```

## 📚 Documentation

### 1. Configuration Files

#### `cypress.config.js`

Main Cypress configuration file. Configure your base URL, viewport, and other global settings.

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://your-app.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

#### `package.json`

Project dependencies and scripts configuration.

### 2. Support Files

#### `cypress/support/e2e.js`

Global configuration and imports. This file runs before every test.

```javascript
import "./commands";
// Add global imports here
```

#### `cypress/support/commands.js`

Custom Cypress commands. Extend Cypress with your own reusable commands.

```javascript
// Example custom command
Cypress.Commands.add("login", (email, password) => {
  // Implementation
});
```

### 3. Utility Classes

#### `cypress/support/utils/apiHelper.js`

Reusable API helper class for making HTTP requests.

**Usage:**

```javascript
import { ApiHelper } from "../utils/apiHelper";

// GET request
ApiHelper.get(endpoint, token);

// POST request
ApiHelper.post(endpoint, token, body);

// PUT request
ApiHelper.put(endpoint, token, body);

// DELETE request
ApiHelper.delete(endpoint, token);
```

**Methods:**

- `get(endpoint, token)` - GET request with authorization
- `post(endpoint, token, body)` - POST request with JSON body
- `put(endpoint, token, body)` - PUT request with JSON body
- `delete(endpoint, token)` - DELETE request

#### `cypress/support/utils/endpoints.js`

Centralized API endpoint management.

**Usage:**

```javascript
import { ENDPOINTS } from "../utils/endpoints";

// Use endpoints
const loginEndpoint = ENDPOINTS.AUTH.LOGIN;
const userEndpoint = ENDPOINTS.USERS.DETAILS(userId);
```

**Available Endpoints:**

- **AUTH**: Login, refresh, logout
- **USERS**: List, create, details, delete
- **PRODUCTS**: List, create, details

#### `cypress/support/utils/dataGenerator.js`

Dynamic test data generation utilities.

**Usage:**

```javascript
import { DataHelper } from "../utils/dataGenerator";

// Generate random data
const email = DataHelper.randomEmail();
const password = DataHelper.randomPassword();
const username = DataHelper.randomUsername(10);
const phone = DataHelper.randomPhone();
const number = DataHelper.randomNumber(1, 100);
const randomItem = DataHelper.randomFromArray(["item1", "item2"]);
```

**Available Methods:**

- `randomEmail()` - Unique email with timestamp
- `randomPassword(length)` - Secure random password
- `randomUsername(length)` - Random username
- `randomPhone()` - Random phone number
- `randomNumber(min, max)` - Random number in range
- `randomFromArray(arr)` - Random item from array

#### `cypress/support/utils/waitCommands.js`

Reliable wait utilities for element interactions.

**Usage:**

```javascript
const { waitForElementVisible, waitForText } = require("../utils/waitCommands");

// Wait for elements
waitForElementVisible(selector);
waitForText(selector, "Expected text");
waitForUrlContains("dashboard");
```

**Available Commands:**

- `waitForElementVisible(selector, timeout)` - Wait for element to be visible
- `waitForElementExist(selector, timeout)` - Wait for element to exist
- `waitForText(selector, text, timeout)` - Wait for specific text
- `waitForUrlContains(urlPart, timeout)` - Wait for URL to contain text
- `waitForApi(alias, timeout)` - Wait for API request completion
- `waitForElementsCount(selector, count, timeout)` - Wait for specific element count

#### `cypress/support/utils/routes_parameters.js`

Application route management.

**Usage:**

```javascript
import routeParameters from "../utils/routes_parameters";

// Navigate to pages
cy.visit(routeParameters.loginPage);
```

### 4. Page Objects

#### `cypress/support/apiPages/authPage.js`

API page object for authentication operations.

**Usage:**

```javascript
import { AuthPage } from "../apiPages/authPage";

// Login via API
AuthPage.login("user@example.com", "password123").then((response) => {
  expect(response.status).to.eq(200);
  // Handle response
});
```

**Available Methods:**

- `login(email, password)` - Authenticate user

### 5. Test Files

#### `cypress/e2e/test/loginTest.cy.js`

Example test suite demonstrating the framework usage.

**Structure:**

```javascript
import { AuthPage } from "../../support/apiPages/authPage";

describe("Login API Tests", () => {
  beforeEach(() => {
    // Load test data from fixtures
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
    });
  });

  it("should login successfully with valid credentials", () => {
    // Test implementation
  });
});
```

### 6. Fixtures

#### `cypress/fixtures/example.json`

Test data files for your tests.

**Example:**

```json
{
  "validUser": {
    "email": "test@example.com",
    "password": "password123"
  },
  "invalidUser": {
    "email": "invalid@example.com",
    "password": "wrongpassword"
  }
}
```

## 🧪 Writing Tests

### API Test Example

```javascript
import { AuthPage } from "../../support/apiPages/authPage";

describe("Authentication Tests", () => {
  it("should login successfully", () => {
    AuthPage.login("user@example.com", "password123").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });
});
```

### UI Test Example

```javascript
import {
  waitForElementVisible,
  waitForText,
} from "../../support/utils/waitCommands";

describe("Login Page Tests", () => {
  it("should display login form", () => {
    cy.visit("/login");
    waitForElementVisible("#loginForm");
    waitForText("h1", "Login");
  });
});
```

## 🔧 Customization

### Adding New Endpoints

Edit `cypress/support/utils/endpoints.js`:

```javascript
export const ENDPOINTS = {
  // ... existing endpoints
  NEW_FEATURE: {
    LIST: `${BASE_URL}/new-feature`,
    CREATE: `${BASE_URL}/new-feature`,
  },
};
```

### Adding New Page Objects

Create new files in `cypress/support/apiPages/` or `cypress/support/pages/`:

```javascript
export class NewFeaturePage {
  static createFeature(data) {
    return ApiHelper.post(ENDPOINTS.NEW_FEATURE.CREATE, token, data);
  }
}
```

### Adding New Utilities

Extend utility classes or create new ones in `cypress/support/utils/`.

## 🚀 Best Practices

1. **Use Page Objects**: Encapsulate page logic in dedicated classes
2. **Centralize Selectors**: Keep all selectors in one place
3. **Use Fixtures**: Store test data in JSON files
4. **Generate Dynamic Data**: Use DataHelper for unique test data
5. **Wait Strategically**: Use wait commands instead of hard delays
6. **Modular Structure**: Keep related functionality together
7. **Consistent Naming**: Follow established naming conventions

## 📝 Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "cypress:run:headed": "cypress run --headed",
    "test:e2e": "cypress run --spec 'cypress/e2e/**/*.cy.js'"
  }
}
```

## 🤝 Contributing

1. Follow the existing code structure
2. Add documentation for new features
3. Update this README when adding new utilities
4. Maintain consistent coding standards

## 📞 Support

For questions or issues:

- Check the Cypress documentation: https://docs.cypress.io/
- Review the examples in this template
- Check the inline documentation in utility files

---

**Happy Testing! 🎯**
