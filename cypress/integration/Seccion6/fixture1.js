/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Hooks ejercicio", () => {



   

    // before(()=> {
    //     cy.fixture('datos2').then((data)=> {
    //         globalThis.data = data;
    //     })
    // });

    // con alias
    // before(()=> {
    //     cy.fixture("datos2").as("datos_json")
    // })

    it('test cargando json',() => {
        // let time=1000
        // cy.visit('https://demoqa.com/text-box')
        // cy.title().should('eq', 'ToolsQA')
        // cy.wait(time)

        // cy.get('#userName').should('be.visible').type(data.nombre)
        // cy.get('#userEmail').should('be.visible').type(data.email)
        // cy.get('#currentAddress').should('be.visible').type(data.dir1)       
        // cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        // cy.get('#submit').should('be.visible').click({force:true})
        // cy.wait(time)

        // version alias
        // cy.get("@datos_json").then((data)=> {
        //     cy.get('#userName').should('be.visible').type(data.nombre)
        //     cy.get('#userEmail').should('be.visible').type(data.email)
        //     cy.get('#currentAddress').should('be.visible').type(data.dir1)       
        //     cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        //     cy.get('#submit').should('be.visible').click({force:true})
        //     cy.wait(time)
        // })

        // datos json (array)
        cy.fixture("datos").then(testdata => {
            testdata.forEach(data => {
                const d_nombre = data.nombre
                const d_email = data.email
                const d_dir1 = data.dir1
                const d_dir2 = data.dir2

                let time=1000
                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq', 'ToolsQA')
                cy.wait(time)

                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)       
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.get('#submit').should('be.visible').click({force:true})
                cy.wait(time)

            });
        })

    });
})