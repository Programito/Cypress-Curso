/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Configuración y utilizacion de los Snippets", () => {

    it('Snippet uno', () => {
        let time = 1500;
        cy.visit("https://www.demoqa.com/text-box");
        cy.title().should("eq", "ToolsQA");
        cy.wait(time)

        cy.get("#userName").should("be.visible").type("Ferran")
    
    });
});