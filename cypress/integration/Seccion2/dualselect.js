/// <reference types="Cypress" /> 

require('cypress-plugin-tab');
require('cypress-xpath');


describe("Nueva sección Dual Select", () => {

    it("Dual select", () => {
        cy.visit("https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html");
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000);

        cy.get(".pickData").select(['Maria Eduarda', "Giovanna", "Isabella"]).then(()=> {
            cy.get(".pAdd").should("be.visible").click().then(()=> {
                cy.wait(2000);
                cy.get(".pAddAll").click().then(()=> {
                    cy.get(".pRemoveAll").click().then(()=> {
                        cy.wait(2000);
                        cy.log("Se eliminaron todos los elementos")
                    });
                });
            });
        });
    });


});