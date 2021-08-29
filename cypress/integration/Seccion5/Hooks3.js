/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Hooks ejercicio", () => {

    let time=1000
    beforeEach(()=> {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(time)
        cy.get('#txtUsername').should('be.visible').type('admin')
        cy.wait(time)
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.wait(time)
        cy.get('#btnLogin').should('be.visible').click({force: true})
        cy.wait(time)
        cy.xpath('//*[@id="menu_pim_viewMyDetails"]/b').click({force: true})
    });
    
    after(()=> {
        cy.log('#### Último ciclo ####')
        // logout
        cy.wait(time)
        cy.xpath('//*[@id="welcome"]').click({force: true})
        cy.wait(time)
        cy.xpath('//*[@id="welcome-menu"]/ul/li[3]').click({force:true})

    })

    it('Test uno', () => {
        cy.xpath('//*[@id="sidenav"]/li[3]/a').click({force: true})
        cy.wait(time)
    });

    it('Test dos', ()=> {
        cy.xpath('//*[@id="sidenav"]/li[9]/a').click({force: true})
        cy.wait(time)
    })
    

});