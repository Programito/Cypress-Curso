// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Texto_visible', (selector, texto, time) => {
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(time)
})

Cypress.Commands.add('Texto_visible_xpath', (selector, texto, time) => {
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(time)
})

Cypress.Commands.add('Click', (selector, time) => {
    cy.get(selector).should('be.visible').click()
    cy.wait(time)
})

Cypress.Commands.add('Click_force', (selector, time) => {
    cy.get(selector).should('be.visible').click({ force: true })
    cy.wait(time)
})

Cypress.Commands.add('Click_force_xpath', (selector, time) => {
    cy.xpath(selector).should('be.visible').click({ force: true })
    cy.wait(time)
})

Cypress.Commands.add('Validar_campo', (selector, messageError, campo, time) => {
    cy.xpath(selector).should('be.visible').then((val) => {
        let textError = val.text()
        expect(textError).to.equal(messageError);
        if (textError == messageError) {
            cy.log('#######################')
            cy.log(`El ${campo} no es correcto`)
            cy.log('#######################')
        }
    })
})


Cypress.Commands.add('Validar_campo2', (selector, messageError, campo, time) => {
    cy.xpath(selector).should('be.visible').should("contain", messageError).then((val) => {
        cy.log('#######################')
        cy.log(`El ${campo} no es correcto`)
        cy.log('#######################')
    })
})



// Funciones por conjunto o completas
// Creando la funcion Toolsqa
Cypress.Commands.add('Bloque_ToolsQA', (name, email, dir1, dir2, time) => {
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(time)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(time)
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(time)
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(time)
    cy.get('#submit').should('be.visible').click({ force: true })
    cy.wait(time)
})

Cypress.Commands.add('Bloque_ToolsQA_dos', (name, email, dir1, dir2, time) => {
    cy.Texto_visible("#userName", name, time)
    cy.Texto_visible("#userEmail", email, time)
    cy.Texto_visible_xpath('//*[@id="currentAddress"]', dir1, time)
    cy.Texto_visible_xpath('//*[@id="permanentAddress"]', dir2, time)
    cy.Click_force_xpath('//*[@id="submit"]', time)
})


Cypress.Commands.add('Bloque_Ejercicio_form', (name, last_name, email, phone, dir1, ciudad, estado, cp, website, project, time) => {
    cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').should('be.visible').type(name)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[2]/div/div/input').should('be.visible').type(last_name)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[3]/div/div/input').should('be.visible').type(email)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input').should('be.visible').type(phone)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[5]/div/div/input').should('be.visible').type(dir1)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[6]/div/div/input').should('be.visible').type(ciudad)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[7]/div/div/select').select(estado, { force: true })
    cy.wait(time)
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
})
