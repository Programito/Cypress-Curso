/// <reference types="Cypress" /> 

// para que funcionen los comandos

//npm install -D cypress-plugin-tab
require('cypress-plugin-tab');

describe("Ejemplo de type pageUp, pageDown", () => {

    it("Type con tab", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get('#userName').type("Juan").tab().
        type('Gil').tab().
        type('juangil@gmail.com')


    });

});