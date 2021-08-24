/// <reference types="Cypress" /> 

// para que funcionen los comandos



describe("Introducción a los assert", () => {

    it("Type con tab", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get('#userName').should("be.visible").type("Juan")
        cy.get('#currentAddress').should("be.visible").type("Dirección")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("juanperez@gmail.com")

    });

});