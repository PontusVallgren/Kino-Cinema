/// <reference types="cypress" />

describe("usertesting 'Logga in'-page", () => {
  it("user should be able to visit login-page", () => {
    cy.visit("http://127.0.0.1:3000/login");
  });
});
export {};
