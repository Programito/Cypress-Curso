/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Alertas en cypress", () => {

    it('Alerta', () => {
        let time = 1500;
        cy.visit("http://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title("eq", "Input Validation");

        cy.wait(time);

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get("@nom").type("Paco")

        cy.get("#surname").should("be.visible").as("ap");
        cy.get("@ap").type("Montoya")

        cy.get("#surname").should("be.visible").as("ap");
        cy.get("@ap").type("Montoya")

        cy.get("#age").should("be.visible").as("edad");
        cy.get("@edad").type("28")

        cy.get("#country").should("be.visible").as("pais");
        cy.get("@edad").type("Italia")

        cy.get("#notes").should("be.visible").as("notas");
        cy.get("@notas").type("Un texto de nota")

        cy.get("[type='submit']").click({force: true})


     
       
    });

});