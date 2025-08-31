/**
 * Wait Commands Utility Module
 *
 * This module provides reliable wait utilities for element interactions in Cypress tests.
 * These functions help ensure elements are in the expected state before interacting with them,
 * making tests more reliable and reducing flakiness.
 *
 * USAGE EXAMPLES:
 *
 * // Import specific wait functions
 * const { waitForElementVisible, waitForText, waitForUrlContains } = require("../utils/waitCommands");
 *
 * // Wait for elements to be visible before interaction
 * waitForElementVisible('#submitButton');
 * cy.get('#submitButton').click();
 *
 * // Wait for specific text to appear
 * waitForText('h1', 'Welcome to Dashboard');
 *
 * // Wait for URL changes
 * waitForUrlContains('dashboard');
 *
 * // Wait for API requests to complete
 * cy.intercept('POST', '/api/login').as('loginRequest');
 * cy.get('#loginButton').click();
 * waitForApi('loginRequest');
 *
 * // Wait for multiple elements
 * waitForElementsCount('.product-item', 10);
 *
 * IMPORTANT NOTES:
 * - All functions have default timeouts (usually 5000ms)
 * - You can override timeouts by passing a second parameter
 * - These functions use Cypress built-in waiting mechanisms
 * - Use instead of hard delays (cy.wait()) for better reliability
 * - Functions return void, so they can't be chained
 */

/**
 * Waits for specified number of seconds
 *
 * Example:
 * waitForSeconds(2); // Wait for 2 seconds
 *
 * Note: Use sparingly, prefer element-based waits when possible
 */
function waitForSeconds(seconds) {
  cy.wait(seconds * 1000);
}

/**
  
 * Example:
 * waitForElementVisible('#loginButton');
 * waitForElementVisible('.product-card', 10000); // 10 second timeout
 *
 * Use case: Wait for buttons, forms, or any interactive elements to appear
 */
function waitForElementVisible(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("be.visible");
}

/**
 * Waits for an element to become invisible
 * Example:
 * waitForElementNotVisible('.loading-spinner');
 *
 * Use case: Wait for loading indicators or error messages to disappear
 */
function waitForElementNotVisible(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("not.be.visible");
}

/**
 * Waits for an element to exist in DOM
 * Example:
 * waitForElementExist('#userProfile');
 *
 * Use case: Wait for elements that might be hidden but should exist
 */
function waitForElementExist(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("exist");
}

/**
 * Waits for an element to not exist in DOM
 * Example:
 * waitForElementNotExist('.error-message');
 *
 * Use case: Wait for error messages or temporary elements to be removed
 */
function waitForElementNotExist(selector, timeout = 5000) {
  cy.get("body", { timeout }).find(selector).should("not.exist");
}

/**
 * Waits for an element to be enabled (not disabled)
 * Example:
 * waitForElementEnabled('#submitButton');
 *
 * Use case: Wait for buttons to become clickable after form validation
 */
function waitForElementEnabled(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("not.be.disabled");
}

/**
 * Waits for an element to be disabled
 * Example:
 * waitForElementDisabled('#submitButton');
 *
 * Use case: Wait for buttons to be disabled during form submission
 */
function waitForElementDisabled(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("be.disabled");
}

/**
 * Waits for specific text to appear in an element
 * Example:
 * waitForText('h1', 'Welcome to Dashboard');
 * waitForText('.status-message', 'Successfully logged in');
 *
 * Use case: Wait for success messages, page titles, or dynamic content
 */
function waitForText(selector, text, timeout = 5000) {
  cy.get(selector, { timeout }).should("contain.text", text);
}

/**
 * Waits for URL to contain specific text
 * Example:
 * waitForUrlContains('dashboard');
 * waitForUrlContains('user/profile');
 *
 * Use case: Wait for navigation to complete or URL changes
 */
function waitForUrlContains(urlPart, timeout = 5000) {
  cy.url({ timeout }).should("include", urlPart);
}

/**
 * Waits for exact URL match
 * Example:
 * waitForExactUrl('/dashboard');
 * waitForExactUrl('https://example.com/login');
 *
 * Use case: Wait for specific page navigation
 */
function waitForExactUrl(url, timeout = 5000) {
  cy.url({ timeout }).should("eq", url);
}

/**
 * Waits for API request completion
 * Example:
 * // First intercept the API call
 * cy.intercept('POST', '/api/login').as('loginRequest');
 *
 * // Perform action that triggers API call
 * cy.get('#loginButton').click();
 *
 * // Wait for API completion
 * waitForApi('loginRequest');
 *
 * Use case: Wait for API responses before proceeding with assertions
 */
function waitForApi(alias, timeout = 10000) {
  cy.wait(`@${alias}`, { timeout });
}

/**
 * Waits for specific number of elements
 * Example:
 * waitForElementsCount('.product-item', 10);
 * waitForElementsCount('.user-row', 5);
 *
 * Use case: Wait for dynamic content to load (product lists, user tables)
 */
function waitForElementsCount(selector, count, timeout = 5000) {
  cy.get(selector, { timeout }).should("have.length", count);
}

/**
 * Waits for element to have specific attribute value
 * Example:
 * waitForElementAttribute('.user-avatar', 'data-user-id', '123');
 * waitForElementAttribute('#status', 'class', 'active');
 *
 * Use case: Wait for elements to have specific states or data attributes
 */
function waitForElementAttribute(selector, attr, value, timeout = 5000) {
  cy.get(selector, { timeout }).should("have.attr", attr, value);
}

// Export all wait functions
module.exports = {
  waitForSeconds,
  waitForElementVisible,
  waitForElementNotVisible,
  waitForElementExist,
  waitForElementNotExist,
  waitForElementEnabled,
  waitForElementDisabled,
  waitForText,
  waitForUrlContains,
  waitForExactUrl,
  waitForApi,
  waitForElementsCount,
  waitForElementAttribute,
};
