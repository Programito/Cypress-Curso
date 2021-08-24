/// <reference types="Cypress" /> 




describe("Opciones de click", () => {

    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
        cy.wait(1000);

        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').should("be.visible").click()
    });

    it('Click force true', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
        cy.wait(1000);

        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').should("be.visible").click({force:true})
    })

    it('Click por coordenadas', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
        cy.wait(1000);

        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').should("be.visible").click({force:true})
        cy.wait(1500);
        cy.get('#dashboard-quick-launch-panel-menu_holder').should("be.visible").click(50,30); // dereha - arriba
        
    })


});