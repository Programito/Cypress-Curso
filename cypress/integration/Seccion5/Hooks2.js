/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Hooks", () => {

    let time=1000
    before(()=> {
       
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html')
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(time)
    });

    it('Test uno', () => {
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.wait(time)
    });

    it('Test dos', () => {
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
        cy.wait(time)
    });

    it('Test dos', () => {
        cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div[2]/div[2]/label/input').check().should('be.checked');
        cy.wait(time)
    });


});