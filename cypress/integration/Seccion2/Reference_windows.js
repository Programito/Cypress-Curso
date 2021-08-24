/// <reference types="Cypress" /> 

require('cypress-plugin-tab');
require('cypress-xpath');


describe("Referencias a Windows", () => {

    it("Windows propiedades a charset", () => {
        cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
        cy.title('eq', 'The Number Game');
        cy.wait(1000);

        cy.document().should("have.property", "charset").and('eq', 'UTF-8');
    });

    it.only("Windows url", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title('eq', 'The Number Game').should('eq', 'The Number Game');
        cy.wait(1500);

        cy.url().should("include", "random-number.html")
        cy.url().should("include", "https://testsheepnz.github.io/random-number.html")
    });
});
