/// <reference types="cypress" />

describe("usertesting 'Logga in'-page", () => {
  it("login correct, visit'mina sidor', visit moviepage and write a review", () => {
    const newText = "I liked this movie. It was awesome!! <3";
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.visit("/login");

    if (typeof password !== "string" || !password) {
      throw new Error("Missing password value");
    }
    cy.request({
      method: "POST",
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: `${username}`,
        userPassword: `${password}`,
      }),
    });
    cy.get("#Username").type(username, { log: false });
    cy.get("#userPassword").type(password, { log: false });

    cy.get(".MuiButton-root")
      .click()
      .get(".tss-t0jjb1-logAlarm > .MuiButton-root")
      .click();

    cy.get('[href="/movies"] > .MuiButtonBase-root')
      .click()
      .get(
        ':nth-child(1) > .MuiPaper-root > a > [style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > .tss-12sz21i-thumbnail'
      )
      .click();
    cy.get(".tss-1qhjf0z-toggleReview > .MuiTypography-root");
    cy.get('[data-testid="KeyboardArrowDownIcon"]')
      .click()
      .get("#outlined-multiline-static")
      .type(`${newText}`)
      .should("have.value", `${newText}`);

    //Comment this out to test reviews-btn all way
    // cy.request("POST", "api/movies/1/reviews", {
    // }).then((response) => {
    //   expect(response.isOkStatusCode);
    // });

    cy.get('[href="/mypage"] > .MuiButtonBase-root')
      .should("be.visible")
      .click();
  });
  it("..then logout", () => {
    cy.get(".MuiButton-root").click();
  });
});

export {};
