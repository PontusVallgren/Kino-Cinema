/// <reference types="cypress" />

describe("usertesting 'kontakta oss'- page", () => {
  it("user should be able to get to 'kontakta oss-page'", () => {
    cy.visit("http://127.0.0.1:3000/contact");
  });
  it("user should be able to see openhours", () => {
    cy.contains("Öppettider:").should("exist");
  });
  it("user should be able to see map", () => {
    cy.findByRole("img", "risback").should("be.visible");
  });
  it("user should be able to click on 'frågor och svar'", () => {
    cy.contains("Frågor och Svar").click();
  });
  it("user should be able to click one of the questions to see the answere", () => {
    cy.contains("När släpps biobiljetter för bokning?").click();
  });
  it("user should be able to click another of the questions to see the answere, both answeres should be open", () => {
    cy.contains("Får jag ta med egna snacks på bion?").click();
  });
  it("user should be able to click one of the questions again to close it", () => {
    cy.contains("När släpps biobiljetter för bokning?").click();
  });
  it("user should be able to click on 'Åldersgränser'", () => {
    cy.contains("Åldersgränser").click();
  });
  it("user should be able to read informationtext about ages", () => {
    cy.contains("Åldersgränser på bio:");
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
  });
});
export {};
