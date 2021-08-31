import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PQ/proyectoUno_PO'

/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

// grabar video
// npx cypress run --spec "cypress\integration\Seccion6\pageObject_1.js"

describe("Comandos personalizados", () => {

    
    const master = new ProyectoUno_PO()

    master.visitHome();

    Cypress.on('uncaught:exception', (err, runnable)=> {
        return false;
    });

    

    it('test', () => {
        master.Seccion1("Juan", "Jose","Juan@gmai.com",100)
        cy.screenshot("campo nombre");
    })

    it('test2', ()=> {
        master.Seccion2("612345", "Dirección1","Estados Unidos", "Colorado",100)
        cy.Validar_campo2('//*[@id="contact_form"]/fieldset/div[4]/div/small[2]','Please supply a vaild phone number with area code',"Télefono")
    })

    it('test3', () => {
        master.Seccion3("01291","demo.com", "1", 100)
        cy.Validar_campo2('//*[@id="contact_form"]/fieldset/div[11]/div/small[1]','Please enter at least 10 characters and no more than 200',"Proyecto")
    })

    it('test all', () => {
        master.Seccion1("Juan", "Jose","Juan@gmai.com",100)
        master.Seccion2("6123456789", "Dirección1","Estados Unidos", "Colorado",100)
        master.Seccion3("01291","demo.com", "poryecto uno", 100)
    })

});
