export class ApiHelper {
  /**
   * Makes a GET request to the specified endpoint
   */
  static get(endpoint, token) {
    return cy.request({
      method: "GET",
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Makes a POST request to the specified endpoint
   */
  static post(endpoint, token, body) {
    return cy.request({
      method: "POST",
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
    });
  }

  /**
   * Makes a PUT request to the specified endpoint
   */
  static put(endpoint, token, body) {
    return cy.request({
      method: "PUT",
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
    });
  }

  /**
   * Makes a DELETE request to the specified endpoint
   */
  static delete(endpoint, token) {
    return cy.request({
      method: "DELETE",
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

