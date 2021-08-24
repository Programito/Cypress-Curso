/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Elementos de una tabla", () => {

    it('Seleccionar mediante a los hijos', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").children('.btn-success')
        cy.wait(time);
        cy.get(".btn-group").children('.btn-success').should("contain", "Green").click({force:true})
        cy.wait(time);
        cy.get(".btn-group").children('.btn-danger').should("contain", "Red").click({force:true})
       
    });

    it('Seleccionar mediante de EQ', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").eq(2).should("contain", "Orange").click();
        cy.wait(time);
        cy.get("[type='button']").eq(4).should("contain", "All").click();
        
    });

    it('Seleccionar mediante de filter', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click();
        cy.wait(time);
        cy.get("[type='button']").filter(".btn-success").click();
        cy.wait(time);
    });

    it('Seleccionar mediante de find', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").find(".btn-danger").should("contain","Red");
        cy.get("[type='button']").contains("Orange").should("contain","Orange");
    });

    it('Seleccionar mediante de first', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").find("button").first().should("contain","Green").click({force: true});
        cy.wait(time);
        cy.get(".btn-group").find("button").last().should("contain","All").click({force: true});
    });

    it('Seleccionar los elementos siguientes nextAll', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").should("contain","Green");
        cy.wait(time)
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length", 4);
    });

    it('Seleccionar elemento padre', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").parent().should("have.class", "btn-group");
    });



});