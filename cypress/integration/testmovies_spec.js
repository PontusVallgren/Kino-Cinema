/// <reference types="cypress" />
//ev check antal movies on page- samt sortering om möjligt
describe("visit moviepage", () => {
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
  //have to set crossorigin ok to text prev.btn
  // it("Be able to click the backward-arrow", () => {
  //   cy.get("[data-testid=ArrowCircleLeftRoundedIcon]").click();
  // });
});

export {};
