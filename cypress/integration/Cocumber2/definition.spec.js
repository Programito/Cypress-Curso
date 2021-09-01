Given('Abrir el navegador principal', () => {
    cy.visit('https://demoqa.com/text-box')
});

When('Cargando el nombre {word}', (name) => {
    cy.get('#userName').should('be.visible').type(name)
});

When('Cargando el email {word}',(email) => {
    cy.get('#userEmail').should('be.visible').type(email)
});

And('Cargando la dirección {word}',(dir1) => {
    cy.get('#currentAddress').should('be.visible').type(dir1)   
});

And('Cargando la dirección2 {word}',(dir2) => {
    cy.get('#permanentAddress').should('be.visible').type(dir2)   
});

And('Click en button', () => {
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(1000)
})

Then('Validar el nombre de la página',() => {
    cy.title().should('eq', 'ToolsQA')
});
