/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Navegación entre las páginas", () => {

    it('Snippet uno', () => {
        let time = 1500;
        cy.visit("https://www.demoqa.com/");
        cy.title().should("eq", "ToolsQA");
        cy.wait(time)

        //cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.xpath('//*[@id="app"]/div/div/div[2]/div/div[1]').click({force: true})
        cy.wait(time);

        cy.go('back');
        // cy.go('back');

        cy.go('forward');
        // cy.go('forward');
    
    });

    it.only('Reloaad', () => {
        let time = 1500;
        cy.visit("https://www.demoqa.com/");
        cy.title().should("eq", "ToolsQA");
        cy.wait(time)

        
        cy.xpath('//*[@id="app"]/div/div/div[2]/div/div[2]/div').click({force: true})
        cy.wait(time);

        

        cy.xpath('//*[@id="item-0"]').eq(0).click({force: true})
        cy.wait(time);

        cy.get("#userName").should('be.visible').type('Ferran')
        cy.wait(time);

        cy.get('#userEmail').should("be.visible").type('Ferran@gmail.com')
        cy.wait(time)

        cy.reload()
        cy.wait(time)

    });
});