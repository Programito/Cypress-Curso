/// <reference types="Cypress" /> 

require('cypress-plugin-tab');
require('cypress-xpath');


describe("Nueva sección Checkbox", () => {

    it("Select uno", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000);

        cy.get('#select-demo').should("be.visible").select("Friday").should("have.value","Friday");
        cy.wait(3000);
        cy.get('#select-demo').should("be.visible").select("Saturday").should("have.value","Saturday");;
    });

    it("Select dos", () => {
        cy.visit("https://www.google.com");
        cy.wait(1000);

        cy.xpath('//*[@id="L2AGLb"]/div').click();
        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}");
        cy.xpath('//*[@id="hdtb-msb"]/div[1]/div/div[2]/a').click();
    });

    
    it("Multiselect", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000);

        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"])
    });

    it("Multiselect", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000);

        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"]).then(()=> {
            cy.get('#printMe').should("be.visible").click();
        });
    });



});