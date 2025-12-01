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
 * const { waitForElementVisible, waitForText, waitForUrlContains } = require("../utils/wait-commands");
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
 */

/**
 * Waits for specified number of seconds
 * Note: Use sparingly, prefer element-based waits when possible
 */
function waitForSeconds(seconds) {
  cy.wait(seconds * 1000);
}

/**
 * Waits for an element to become visible
 */
function waitForElementVisible(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("be.visible");
}

/**
 * Waits for an element to become invisible
 */
function waitForElementNotVisible(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("not.be.visible");
}

/**
 * Waits for an element to exist in DOM
 */
function waitForElementExist(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("exist");
}

/**
 * Waits for an element to not exist in DOM
 */
function waitForElementNotExist(selector, timeout = 5000) {
  cy.get("body", { timeout }).find(selector).should("not.exist");
}

/**
 * Waits for an element to be enabled (not disabled)
 */
function waitForElementEnabled(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("not.be.disabled");
}

/**
 * Waits for an element to be disabled
 */
function waitForElementDisabled(selector, timeout = 5000) {
  cy.get(selector, { timeout }).should("be.disabled");
}

/**
 * Waits for specific text to appear in an element
 */
function waitForText(selector, text, timeout = 5000) {
  cy.get(selector, { timeout }).should("contain.text", text);
}

/**
 * Waits for URL to contain specific text
 */
function waitForUrlContains(urlPart, timeout = 5000) {
  cy.url({ timeout }).should("include", urlPart);
}

/**
 * Waits for exact URL match
 */
function waitForExactUrl(url, timeout = 5000) {
  cy.url({ timeout }).should("eq", url);
}

/**
 * Waits for API request completion
 */
function waitForApi(alias, timeout = 10000) {
  cy.wait(`@${alias}`, { timeout });
}

/**
 * Waits for specific number of elements
 */
function waitForElementsCount(selector, count, timeout = 5000) {
  cy.get(selector, { timeout }).should("have.length", count);
}

/**
 * Waits for element to have specific attribute value
 */
function waitForElementAttribute(selector, attr, value, timeout = 5000) {
  cy.get(selector, { timeout }).should("have.attr", attr, value);
}

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

