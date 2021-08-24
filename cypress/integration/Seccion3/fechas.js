/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Cypress eventos Mouse", () => {
    
    it('Drag and Drop', () => {
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html");
        cy.title("eq", "Selenium Easy - Best Demo website for Bootstrap Date picker");

        cy.wait(1500);
      
        // cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("09/19/2012").then(() => {
        //     cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type('{esc}')
        // })

        //cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("09/19/2012").tab();

        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("09/19/2012").then(() => {
            // cy.get("[placeholder='Start date").should("be.visible").focus()
            // cy.get("#sandbox-container1 > .input-group > .form-control").click(10,20)
            cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").click();
            cy.get(".today").first().should("be.visible").click({force: true});
        })
    });

    it("Fecha dos", () => {
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html");
        cy.title("eq", "Selenium Easy - Best Demo website for Bootstrap Date picker");

        cy.wait(1500);
        cy.get("[placeholder ='Start date']").should("be.visible").type("09/09/2021 {esc}")
        cy.wait(1500);
        cy.get("[placeholder ='End date']").should("be.visible").type("10/19/2021 {esc}")
      
    })

    it("Fecha tres", () => {
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html");
        cy.title("eq", "Selenium Easy - Best Demo website for Bootstrap Date picker");

        cy.wait(1500);
        cy.get("[placeholder ='Start date']").should("be.visible").type("09/09/2021 {esc}").tab().type("10/19/2021 {esc}");
        
      
    })

});