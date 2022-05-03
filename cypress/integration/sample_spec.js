/// <reference types="cypress" />

describe("test server", function () {
  it("getting port 3000 and test all routs", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Filmer").click();
    cy.url().should("include", "/movies");
    cy.contains("Hem").click();
    cy.url().should("include", "/");
    cy.contains("Logga in").click();
    cy.url().should("include", "/login");
    cy.contains("Kontakta oss").click();
    cy.url().should("include", "/contact");
  });
});
