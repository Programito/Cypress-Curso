/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Comandos personalizados", () => {

    let time=1000
    beforeEach(()=> {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(time)
    });

    it('Demo uno', () => {
        cy.Texto_visible("#userName", "Juan", time)
        cy.Texto_visible("#userEmail", "Juan@gmail.com", time)
        cy.Texto_visible_xpath('//*[@id="currentAddress"]','current Address',time)
        cy.Texto_visible_xpath('//*[@id="permanentAddress"]', 'current Address 2', time)
        cy.Click_force_xpath('//*[@id="submit"]', time)
    })

    it('Demo dos por bloque', () => {
        cy.Bloque_ToolsQA('juan', "juan@gmail.com",'current address', 'permanent address', time)
    })

    it.only('Demo tres por bloques de funciones', () => {
        cy.Bloque_ToolsQA_dos('juan', "juan@gmail.com",'current address', 'permanent address', time)
    })

});