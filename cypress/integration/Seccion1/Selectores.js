/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

describe("Tipos de selectores", () => {

    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").type("Paco");
        cy.get("#userEmail").should("be.visible").type("Paco@gmail.com");

    });

    it("Selector por atributo", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get("[placeHolder='Full Name']").should("be.visible").type("Paco");
        
    });

    it("Selector por xpath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.xpath("//*[@id='userName']").should("be.visible").type("PacoXpath");
        
    });

    it("Selector por contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000);
        cy.get(".custom-control-label").contains("Other").click()
    });

    it("Selector por copy_selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        cy.get("#userNumber").should("be.visible").type("465655");
        
        
    });

 

});