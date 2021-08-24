/// <reference types="Cypress" /> 
// para que funcionen los comandos

describe("Sección validando el título", () => {

    it("Test validar titulo", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.title().should('eq','ToolsQA');

        cy.log("Ok la función title funciona bien");
    })

});