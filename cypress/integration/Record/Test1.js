/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Record Cypress Studio", () => {
    it('Add command to Test',() => {
        let time=1000
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(time)

        // Add command to Test
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').clear();
        cy.get('#userName').type('Pedro');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('Pedro@gmail.com');
        cy.get('#currentAddress').type('Dirección1').click();
        cy.get('#permanentAddress').type('Dirección2').click();
        cy.get('#submit').click();
        cy.wait(time)
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Add new Test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/text-box');
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click({force:true});
        cy.get('.rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click({force:true});
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > :nth-child(1) > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-downloads').check({force:true});
        /* ==== End Cypress Studio ==== */
    });
});