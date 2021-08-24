/// <reference types="Cypress" /> 
// para que funcionen los comandos

describe("Funciones para Type", () => {

    it("Test validar titulo", () => {
        cy.visit("https://www.google.com/");

        cy.title().should('eq','Google');
        cy.wait(1500);
        cy.get('#L2AGLb > div').click();
        cy.get("[name='q']").type("cypress io {enter}");
        // cy.get('#L2AGLb').click();

        cy.get('#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > button > div > span > svg').click();

    })

});