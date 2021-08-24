/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("each testing", () => {

    it('Each uno', () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title("eq", "My store");

        cy.wait(1500);

        cy.get(".product-name").each(($el, index, $list) => {
            cy.log('vestido:' + $el.text())
        });
    });

    it('Each dos', () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title("eq", "My store");

        cy.wait(1500);

        // wrap busca un elemento del each
        cy.get(".product-name").each(($el, index, $list) => {
            // ($el.text().includes('Blouse')) ? cy.wrap($el).click(): null;
            ($el.text().includes('Printed Summer Dress')) ? cy.wrap($el).click() : null;
        });
    });

    it.only('Each tres', () => {
        let time = 200;
        cy.visit("http://automationpractice.com/index.php");
        cy.title("eq", "My store");

        cy.wait(time);

        // for(let i=0; i< 4; i++){
        //     cy.get("#center_column .product-name").eq(i).click({force: true});
        //     cy.wait(time);
        //     cy.get("#quantity_wanted").should("be.visible").clear().type("4");
        //     cy.wait(time)
        //     cy.get("#group_1").select("M").should("have.value",2);
        //     cy.wait(time)
        //     cy.get('.exclusive > span').should("be.visible").click({force: true})
        //     cy.wait(time)
        //     cy.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span').click({force:true})
        //     cy.wait(time)
        //     cy.get('.icon-home').should("be.visible").click({force: true})
        // }

        let datos = [];

        cy.get('#center_column .product-name').each(($el, index, $list) => {
            datos[index] = $el.text();
        }).then(() => {
            for (let i = 0; i < datos.length; i++) {
                cy.get("#center_column .product-name").eq(i).click({ force: true });
                cy.wait(time);
                cy.get("#quantity_wanted").should("be.visible").clear().type("4");
                cy.wait(time)
                cy.get("#group_1").select("M").should("have.value", 2);
                cy.wait(time)
                cy.get('.exclusive > span').should("be.visible").click({ force: true })
                cy.wait(time)
                cy.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span').click({ force: true })
                cy.wait(time)
                cy.get('.icon-home').should("be.visible").click({ force: true })
            }
        });


    });

})