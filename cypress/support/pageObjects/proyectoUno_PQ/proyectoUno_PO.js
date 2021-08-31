class ProyectoUno_PO{
    visitHome(){
        let time=100
        Cypress.config("defaultCommandTimeout", 15000)
        beforeEach(()=> {
            cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html')
            cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(time)
        });
    }

    Seccion1(name, last_name, email, time){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').should('be.visible').type(name)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[2]/div/div/input').should('be.visible').type(last_name)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[3]/div/div/input').should('be.visible').type(email)
        cy.wait(time)
    }

    Seccion2(phone, dir1, ciudad, estado,time){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input').should('be.visible').type(phone)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[5]/div/div/input').should('be.visible').type(dir1)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[6]/div/div/input').should('be.visible').type(ciudad)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[7]/div/div/select').select(estado, { force: true })
        cy.wait(time)
    }

    Seccion3(cp, website,project,time){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[8]/div/div/input').should('be.visible').type(cp)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[9]/div/div/input').should('be.visible').type(website)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[10]/div/div[1]/label/input').check().should('be.checked')
        cy.wait(time)
        //*[@id="contact_form"]/fieldset/div[10]/div/div[1]
        cy.xpath('//*[@id="contact_form"]/fieldset/div[11]/div/div/textarea').should('be.visible').type(project)
        cy.wait(time)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[13]/div/button').click({ force: true })
        cy.wait(time)
    }
    
} // finish ProyectoUno

export default ProyectoUno_PO;