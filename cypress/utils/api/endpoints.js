/**
 * API Endpoints Configuration
 *
 * This file centralizes all API endpoints for consistent URL management across tests.
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

