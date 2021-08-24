/// <reference types="Cypress" /> 

require('cypress-plugin-tab');
require('cypress-xpath');


describe("Nueva sección Checkbox", () => {

    it("check uno", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000);

        cy.get("[type='checkbox']").check().should('be.checked');
        cy.wait(1000);
        cy.get("[type='checkbox']").uncheck().should('not.be.checked');

    });

    it("check por seleccion", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000);

        // cy.get("#isAgeSelected").check().should('be.checked');
        // cy.wait(1000);
        // cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[4]/label/input").check()
        // cy.wait(2000);

        cy.get("#isAgeSelected").click()
        cy.wait(1000);
        cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[4]/label/input").click()
        cy.wait(2000);

    });

    it.only("Radios button", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html");
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000);

        // tambien se puede hacer con click
        cy.get("#easycont > div > div.col-md-6.text-left > div:nth-child(4) > div.panel-body > label:nth-child(3) > input[type=radio]").check()

    });
});