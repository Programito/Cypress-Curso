/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Upload imagenes", () => {

    it("Selector por id", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        // ruta esta en fixture
        const ruta= "img1.jpg"
        cy.get('[type="file"]').attachFile(ruta);
        cy.wait(2000);

      
    });

});