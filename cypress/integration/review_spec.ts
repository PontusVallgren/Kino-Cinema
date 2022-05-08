/// <reference types="cypress" />

describe("visit moviepage, click on the trailer and trying to make a review", () => {
  it("getting movies", function () {
    cy.visit("/movies");
  });

  it("Be able to click on movie Batman and get more info about the film", () => {
    cy.findAllByRole("img", { name: /The Batman/i }).click();
  });

  it("user should be able to click on 'recensioner'", () => {
    cy.get("[class =Reviews_btnCtn__tmEei]")
      .children()
      .click({ multiple: true });
  });
  it("user should be able to write text in input-field on review ", () => {
    const newText = "I liked this movie. It was awesome!! <3";
    cy.findByRole("textbox")
      .get("[id=outlined-multiline-static]")
      .type(`${newText}`);
  });
});

export {};
