/// <reference types="cypress" />
describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/movies");
  });
  it("can filter for movies by all movies", () => {
    setTimeout(() => {
      cy.contains("Sortera").select();
      cy.contains("Alla filmer").click();
    }, 10);
  });
});
