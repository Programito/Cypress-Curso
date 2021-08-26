/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Invoke", () => {

    it('test invoke', () => {
        let time = 1500;
        cy.visit("http://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should("eq", "Input Validation");

        cy.wait(time);

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")

        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

        cy.xpath('/html/body/div/div[3]/form/label[1]').invoke("text").as("title_name");
        cy.get("@title_name").should("contain","First name").then(()=> {
            cy.get("#firstname").type("Rodrigo");
        })
    });

    
    it('invoke style', () => {
        let time = 1500;
        cy.visit("http://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().shoud("eq", "Input Validation");
        cy.wait(time);

        cy.get("[for='firstname']").invoke("attr","style","color:Blue; font-size:50px")

    });

    it('invoke ocultar y mostrar', () => {
        let time = 1500;
        cy.visit("http://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should("eq", "Input Validation");
        cy.wait(time);

        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide");

        // cy.wait(time);

        cy.get("[for='firstname']").invoke("show", "3s")
        cy.get("#firstname").invoke("show", "4s");

    });

    it('invoke ocultar y mostrar2', () => {
        let time = 1500;
        cy.visit("http://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should("eq", "Input Validation");
        

        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(time);

        cy.get("#firstname").should("be.visible").type("Nacho").then(()=> {
            cy.wait(time)
            cy.get("[for='surname']").invoke("show","3s")
            cy.get("#surname").invoke("show", "4s")
            cy.wait(time)
        })
        

    });

    it('invoke crc', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
        cy.title().should("eq", "Selenium Easy Demo - Bootstrap Modal Demo to Automate");
        cy.wait(time);
        

        cy.xpath('/html/body/div[1]/div[1]/div[2]/a/img').invoke("attr", "src")
        .should("include","http://www.seleniumeasy.com/test/img/sponsored-by-CBT.png")
        

       
    });

    it('invoke target_blank', () => {
        let time = 1500;
        cy.visit("https://dvwa.co.uk/");
        cy.title().should("eq", "DVWA - Damn Vulnerable Web Application");
        cy.wait(time);
        
        cy.xpath('//*[@id="pagewidth"]/div/div[5]/a[2]').invoke("removeAttr", 'target').click({force: true})
    });

});