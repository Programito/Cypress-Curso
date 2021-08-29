/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Hooks ", () => {

    before(()=> {
        cy.log(" ##### Principio de todo #####  Inicia antes que todo solo una vez")
    });

    beforeEach(()=> {
        cy.log("Esto se repite en cada uno de los test muy importante")
    })

    afterEach(()=> {
        cy.log("Este se hace al final de todos los test")
    })

    after(()=> {
        cy.log("############## Último ciclo Final de todo #####")
    })

    it("test uno", () => {
        cy.log("test uno")
    });

    it("test dos", () => {
        cy.log("test dos")
    });

});