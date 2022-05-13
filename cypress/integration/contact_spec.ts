/// <reference types="cypress" />

describe("usertesting 'kontakta oss'- page", () => {
  it("user should be able to get to 'kontakta oss-page'", () => {
    cy.visit("/contact").contains("Frågor och Svar").click();
  });
  it("user should be able to click one of the questions to see the answere", () => {
    cy.get(":nth-child(2) > .MuiListItemText-root > .MuiTypography-root");
  });

  it("user should be able to click one of the questions again to close it", () => {
    cy.get(":nth-child(2) > .MuiListItemText-root > .MuiTypography-root");
  });
  it("user should be able to click on 'Lämna Feedback'", () => {
    cy.contains("Lämna Feedback").click();
  });
  it("user should be able to write in name in form ", () => {
    cy.get("[id=input_name]").type("Kalle Anka");
  });
  it("user should be able to write in email in form ", () => {
    cy.get("[id=input_email]").type("Kalle@Anka.com");
  });
  it("user should be able to write in message in form ", () => {
    const newText =
      "Hej! Kan ni börja sälja sockervadd på bion? Det är sååå gott! mvh/Kalle";
    cy.get("[id=input_message]").type(`${newText}`);
    cy.get(".MuiButton-root").click();

    cy.request("POST", "api/feedback", {
      name: "KalleAnka",
    }).then((response) => {
      expect(response.isOkStatusCode);
    });
  });
});
export {};
