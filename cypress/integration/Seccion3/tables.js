/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

//npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop'

describe("Elementos de una tabla", () => {

    it('Seleccionar mediante a los hijos', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").children('.btn-success')
        cy.wait(time);
        cy.get(".btn-group").children('.btn-success').should("contain", "Green").click({force:true})
        cy.wait(time);
        cy.get(".btn-group").children('.btn-danger').should("contain", "Red").click({force:true})
       
    });

    it('Seleccionar mediante de EQ', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").eq(2).should("contain", "Orange").click();
        cy.wait(time);
        cy.get("[type='button']").eq(4).should("contain", "All").click();
        
    });

    it('Seleccionar mediante de filter', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click();
        cy.wait(time);
        cy.get("[type='button']").filter(".btn-success").click();
        cy.wait(time);
    });

    it('Seleccionar mediante de find', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").find(".btn-danger").should("contain","Red");
        cy.get("[type='button']").contains("Orange").should("contain","Orange");
    });

    it('Seleccionar mediante de first', () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get(".btn-group").find("button").first().should("contain","Green").click({force: true});
        cy.wait(time);
        cy.get(".btn-group").find("button").last().should("contain","All").click({force: true});
    });

    it('Seleccionar los elementos siguientes nextAll', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").should("contain","Green");
        cy.wait(time)
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length", 4);
    });

    it('Seleccionar elemento padre', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").parent().should("have.class", "btn-group");
    });

    it('ejercicio tablas', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        cy.get("[type='button']").eq(1).should("contain", "Green").click({force: true})
        cy.wait(time);

        cy.get("[type='checkbox']").check({force: true});

        cy.get("[type='button']").eq(4).should("contain", "All").click({force: true})
        cy.wait(time);

        cy.get("[type='checkbox']").check({force: true});
    });

    it('ejercicio tablas con for', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        for(let i=1; i<5; i++){
            cy.get("[type='button']").eq(i).click({force: true})
            cy.wait(time);
            cy.get("[type='checkbox']").check({force: true});
            cy.wait(time);
        }
    });


    it('ejercicio tablas con for y Assert', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title("eq", "Selenium Easy - Table Data Filter Demo");

        cy.wait(time);

        for(let i=1; i<5; i++){
            let nameButton = ["Green","Orange","Red","All"]
            cy.get("[type='button']").eq(i).should("contain", nameButton[i-1]).click({force: true})
            cy.wait(time);
            cy.get("[type='checkbox']").check({force: true});
            cy.wait(time);
        }
    });

    it('valores de una columna', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title("eq", "Selenium Easy - Tabel Sort and Search Demo");

        const datos = [];
        cy.get(".odd .sorting_1").each(($el, index,$list)=> {
            datos[index]=$el.text()
        }).then(()=> {
            for(let i=0; i<datos.length; i++){
                cy.log(datos[i])
            }
        });

      
    });

    it('sum los valores de los campos con la clase .odd', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title("eq", "Selenium Easy - Tabel Sort and Search Demo");

        const datos = [];
        let cantidadOdd = 0;
        cy.get("[role='row'] td").each(($el, index,$list)=> {
            datos[index]=$el.text()
        }).then(()=> {
            for(let i=0; i<datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd += Number(datos[i])

                }
            }
            cy.log('cantidad total:' + cantidadOdd);
            expect(cantidadOdd).to.eq(394);
        });

      
    });

    it('valor de un campo en especifico', () => {
        let time = 700;
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title("eq", "Selenium Easy - Tabel Sort and Search Demo");

        const field = cy.get("tbody > :nth-child(7) > :nth-child(2)")
        // cy.log(field)
        field.each(($el, index, $list)=> {
            const dato= $el.text()
            cy.log(dato)

            if(dato.includes("Javascript Developer")){
                field.eq(index).next().next().then((age)=> {
                    const Edad= age.text();
                    cy.log(Edad);
                    cy.log("la edad de Javascript Developer es: " + Edad)
                    expect(Edad).to.equal('39')

                })
            }
        });
     
       
      
    });




});