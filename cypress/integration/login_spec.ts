/// <reference types="cypress" />

describe("usertesting 'Logga in'-page", () => {
  it("user should be able to visit login-page, login and fail to login", () => {
    cy.visit("/login");
  });
  it("login correct, visit'mina sidor' and logout", () => {
    const newText = "I liked this movie. It was awesome!! <3";
    const username = Cypress.env("CYPRESS_TEST_USERNAME");
    const password = Cypress.env("CYPRESS_TEST_PASSWORD");
    cy.request({
      method: "POST",
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: `${username}`,
        userPassword: `${password}`,
        session: true,
        loggedIn: true,
      }),
    });
    // get(".MuiButton-root").click();
    cy.visit("/mypage")
      .contains("Filmer")
      .click()
      .get(
        ':nth-child(2) > .MovieItem_link__8D7kt > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .MovieItem_thumbnail__IeN4F'
      )
      .click()
      .get("[class =Reviews_btnCtn__tmEei]")
      .children()
      .click({ multiple: true })
      .get("#outlined-multiline-static")
      .type(`${newText}`);
  });

  // it("test username & password not being correct", () => {
  //   cy.visit("/login");
  //   const username = Cypress.env("test_login");
  //   const password = Cypress.env("test_passw");
  //   cy.request("GET", "/login", {
  //     username: `${username}`,
  //     userpassword: `${password}`,
  //   })
  //     .get(".MuiButton-root")
  //     .click()
  //     .get(".tss-194dj1g-emptyWarning > .MuiTypography-root")
  //     .should("be.visible");
});

export {};

//ÄR inte inloggad- måste klicka på inloggningen och se så det går igenom.
