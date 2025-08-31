export class ApiHelper {
  /**
   * Makes a GET request to the specified endpoint
   * Example:
   * ApiHelper.get(ENDPOINTS.USERS.LIST, authToken)
   *   .then((response) => {
   *     expect(response.status).to.eq(200);
   *     expect(response.body).to.have.property('users');
   *   });
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
   * Example:
   * const loginData = { email: 'user@example.com', password: 'password123' };
   * ApiHelper.post(ENDPOINTS.AUTH.LOGIN, null, loginData)
   *   .then((response) => {
   *     expect(response.status).to.eq(200);
   *     expect(response.body).to.have.property('token');
   *   });
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
   * Example:
   * const updateData = { name: 'Updated Name', email: 'updated@example.com' };
   * ApiHelper.put(ENDPOINTS.USERS.DETAILS(userId), authToken, updateData)
   *   .then((response) => {
   *     expect(response.status).to.eq(200);
   *     expect(response.body.name).to.eq('Updated Name');
   *   });
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
   * Example:
   * ApiHelper.delete(ENDPOINTS.USERS.DELETE(userId), authToken)
   *   .then((response) => {
   *     expect(response.status).to.eq(200);
   *     expect(response.body).to.have.property('message', 'User deleted successfully');
   *   });
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
