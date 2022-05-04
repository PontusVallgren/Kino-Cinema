/// <reference types="cypress" />

describe("test server, getting port 3000 and test routes ", function () {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000");
  });
  it("getting filmer", function () {
    cy.contains("Filmer").click();
    cy.url().should("include", "/movies");
  });
  it("getting hem", function () {
    cy.contains("Hem").click({ timeout: 2000 });
    cy.url().should("include", "/");
  });
  it("getting login", function () {
    cy.contains("Logga in").click();
    cy.url().should("include", "/login");
  });
  it("getting kontakta oss", function () {
    cy.contains("Kontakta oss").click({ timeout: 2000 });
    cy.url().should("include", "/contact");
  });
});

export {};
