/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Cypress eventos Mouse", () => {
    
    it('Drag and Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
        cy.title("eq", "The Internet");

        cy.wait(1500);
        cy.get("#column-a").drag("#column-b", {force: true});
    });

    it('Drag and drop 2', () => {
        cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html")
        cy.title("eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1500);

        cy.get("#todrag > :nth-child(2)").drag("#mydropzone", {force: true});
        cy.get("#todrag > :nth-child(3)").drag("#mydropzone", {force: true});
        cy.get("#todrag > :nth-child(4)").drag("#mydropzone", {force: true});
        cy.get("#todrag > :nth-child(5)").drag("#mydropzone", {force: true});
    })

    it("Mouse Over", () => {
        cy.visit("http://www.way2automation.com/")
        cy.title("eq", "Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial")
        cy.wait(1500);

        cy.contains("Selenium").trigger('mouseover');
        cy.wait(1500);

        // remove target=_blank para que no abra una nueva pestaña
        cy.contains('Selenium Python Video Tutorials').invoke("removeAttr", "target").click();
    })

    it("Slider", () => {
        cy.visit("https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html")
        cy.title("eq", "Selenium Easy - Drag and Drop Range Sliders")
        cy.wait(1500);

        cy.get("#slider1 > .range > input").invoke("attr", "value", "80")
        cy.wait(1500);
        cy.get("#slider3 > .range > input").invoke("attr", "value", "90")
        cy.wait(1500);
        cy.get("#slider5 > .range > input").invoke("attr", "value", "90")
    })



});