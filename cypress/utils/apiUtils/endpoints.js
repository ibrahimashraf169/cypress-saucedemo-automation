/**
 * API Endpoints Configuration
 *
 * This file centralizes all API endpoints for consistent URL management across tests.
 * It provides a single source of truth for all API URLs and makes it easy to update
 * base URLs when switching between environments (dev, staging, production).
 *
 * USAGE EXAMPLES:
 *
 * // Import endpoints in your test files or page objects
 * import { ENDPOINTS } from "../utils/endpoints";
 *
 * // Use endpoints with ApiHelper
 * import { ApiHelper } from "../utils/apiHelper";
 *
 * // Authentication endpoints
 * ApiHelper.post(ENDPOINTS.AUTH.LOGIN, null, { email: "test@test.com", password: "password" });
 * ApiHelper.post(ENDPOINTS.AUTH.REFRESH, token);
 * ApiHelper.post(ENDPOINTS.AUTH.LOGOUT, token);
 *
 * // User management endpoints
 * ApiHelper.get(ENDPOINTS.USERS.LIST, token);
 * ApiHelper.post(ENDPOINTS.USERS.CREATE, token, userData);
 * ApiHelper.get(ENDPOINTS.USERS.DETAILS(userId), token);
 * ApiHelper.delete(ENDPOINTS.USERS.DELETE(userId), token);
 *
 * // Product endpoints
 * ApiHelper.get(ENDPOINTS.PRODUCTS.LIST, token);
 * ApiHelper.post(ENDPOINTS.PRODUCTS.CREATE, token, productData);
 * ApiHelper.get(ENDPOINTS.PRODUCTS.DETAILS(productId), token);
 *
 * ADDING NEW ENDPOINTS:
 *
 * // Add new endpoint category
 * export const ENDPOINTS = {
 *   // ... existing endpoints
 *   ORDERS: {
 *     LIST: `${BASE_URL}/orders`,
 *     CREATE: `${BASE_URL}/orders`,
 *     DETAILS: (orderId) => `${BASE_URL}/orders/${orderId}`,
 *     UPDATE: (orderId) => `${BASE_URL}/orders/${orderId}`,
 *     DELETE: (orderId) => `${BASE_URL}/orders/${orderId}`,
 *   },
 * };
 *
 
 */

// Base URL (can be different per environment)
export const BASE_URL = "";

// API endpoints
export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URL}/authenticate`,
    REFRESH: `${BASE_URL}/auth/refresh`,
    LOGOUT: `${BASE_URL}/auth/logout`,
  },
  USERS: {
    LIST: `${BASE_URL}/users`,
    CREATE: `${BASE_URL}/users`,
    DETAILS: (userId) => `${BASE_URL}/users/${userId}`,
    DELETE: (userId) => `${BASE_URL}/users/${userId}`,
  },
  PRODUCTS: {
    LIST: `${BASE_URL}/products`,
    CREATE: `${BASE_URL}/products`,
    DETAILS: (productId) => `${BASE_URL}/products/${productId}`,
  },
};
