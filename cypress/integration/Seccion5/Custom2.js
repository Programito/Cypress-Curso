/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Comandos personalizados", () => {

    let time=100
    beforeEach(()=> {
        cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html')
        cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
        cy.wait(time)
    });


    // si hay un error continue
    Cypress.on('uncaught:exception', (err, runnable)=> {
        return false;
    });

 
    it('Demo uno', () => {
        cy.Bloque_Ejercicio_form('Elvira','Perez','ElviraPerez@gmail.com','6123456789','Dirección uno', 'Londres','Texas',
        '01289','demo.com','practica 01',time);
    });

    it('Test validar email', () => {
        cy.Bloque_Ejercicio_form('Elvira','Perez','ElviraPerez.com','6123456789','Dirección uno', 'Londres','Texas',
        '01289','demo.com','practica 01',time);

        // cy.xpath('//*[@id="contact_form"]/fieldset/div[3]/div/small[2]').should('be.visible').then((val)=>{
        //     let textError = val.text()
        //     let messageError = 'Please supply a valid email address';
        //     expect(textError).to.equal(messageError);
        //     if(textError == messageError){
        //         cy.log('#######################')
        //         cy.log('Email incorrecto')
        //         cy.log('#######################')
        //     }
        // })

        cy.Validar_campo('//*[@id="contact_form"]/fieldset/div[3]/div/small[2]','Please supply a valid email address', 'email', time)
    })

    it('Test validar nombre', () => {
        cy.Bloque_Ejercicio_form('R','Perez','ElviraPerez@dsf.com','6123456789','Dirección uno', 'Londres','Texas',
        '01289','demo.com','practica 01',time);

        cy.Validar_campo('//*[@id="contact_form"]/fieldset/div[1]/div/small[1]','Please enter more than 2 characters', 'nombre', time)
    })

    it.only('Test validar2 nombre', () => {
        cy.Bloque_Ejercicio_form('R','Perez','ElviraPerez@dsf.com','6123456789','Dirección uno', 'Londres','Texas',
        '01289','demo.com','practica 01',time);

        cy.Validar_campo2('//*[@id="contact_form"]/fieldset/div[1]/div/small[1]','Please enter more than 2 characters', 'nombre', time)
    })

});