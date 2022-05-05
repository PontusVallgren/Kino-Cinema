/// <reference types="cypress" />

describe("usertesting moviepage", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/movies");
  });
  it("make sure that filterfunction has options", () => {
    setTimeout(() => {
      cy.get("[id =demo-simple-select-filter]").children().should("exist");
    }, 10);
  });

  it("be able to load more movies on the page", () => {
    cy.findByRole("button", { name: /Ladda fler filmer/i }).click();
  });

  it("Be able to click a movie and get more info about the film", () => {
    cy.findAllByRole("img", { name: /Morbius/i }).click();
  });

  it("Be able to click another movie and get more info about the film", () => {
    cy.findAllByRole("img", { name: /The Batman/i }).click();
  });
  it("be to see trailer on movieinformation-page", () => {
    cy.findAllByRole("img", { name: /The Batman/i }).click();
    cy.findByRole("img", { name: /Movie banner/i }).should("be.visible");
  });
  it("be to see trailer another trailer movieinformation-page", () => {
    cy.findAllByRole("img", { name: /Morbius/i }).click();
    cy.findByRole("img", { name: /Movie banner/i }).should("be.visible");
  });
});

export {};
