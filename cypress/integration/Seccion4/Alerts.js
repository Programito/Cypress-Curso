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
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
        cy.title("eq", "Selenium Easy Demo - Bootstrap Modal Demo to Automate");

        cy.wait(time);

        cy.xpath('/html/body/div[2]/div/div[2]/div[1]/div/div/div[2]/a').click();

        // cy.on("window:alert", (str)=> {
        //     expect(str).to.equal('This is the place where the content for the modal dialog displays');
        //     return true;
        // })

        // open
        cy.wait(time);
        cy.xpath('//*[@id="myModal0"]/div/div/div[4]/a[2]').click({force: true})

        // close
        cy.wait(time);
        cy.xpath('//*[@id="myModal0"]/div/div/div[4]/a[1]').click({force: true})
     
       
    });

});