/// <reference types="cypress" />

describe("usertesting moviepage", () => {
  it("test that filterfunction can sort by highest rating", () => {
    cy.visit("/movies");
    cy.get(".MuiOutlinedInput-root > #select-sort")
      .click()
      .get('[data-value="rating"]')
      .click();
  });

  it("be able to load more movies on the page", () => {
    cy.findByRole("button", { name: /Ladda fler filmer/i }).click();
  });

  it("Be able to click a movie and get more info about the film", () => {
    cy.findAllByRole("img", { name: /Morbius/i }).click();
    cy.findByRole("img", { name: /Movie banner/i }).should("be.visible");
  });
  //not clicking the trailer, just checking its visible
});

export {};
