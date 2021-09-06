/// <reference types="Cypress" /> 

require('cypress-plugin-tab');

// npm install -D cypress-xpath
// extensiones de chrome xpath para facilitarlo por ejemplo: truepath, chropath, relative xpath
require('cypress-xpath')

// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe("Demo de una Rest Api", () => {
    it('Test Api', () => {
        let datos = cy.request("http://localhost:3000/test")
        datos.its("status").should("equal", 200)
    });

    it('Test Api Get 2', () => {
        let datos = cy.request("http://localhost:3000/test")
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    });

    it('test Api metodo GET', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/test",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let datos = JSON.parse(JSON.stringify(response.body))
            cy.log(datos)
            expect(datos[0].has.property("title", "Cypress"))
            expect(datos[0].has.property("author", "Pedro"))
        })
    })

    xit('test Api POST', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/test",
            body: {
                "id": 4,
                "title": "insertrando un valor en cypres Api",
                "author": "Alberto Pérez"
            }
        }).then((response) => {
            expect(response.status).to.eql(201)
        })
    })

    it('Insertar multiples valores en el API', () => {
        for (let i = 0; i < 10; i++) {
            let tx = Math.random().toString(10)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/test",
                body: {
                    "id": i,
                    "title": tx,
                    "author": "Author " + tx
                }
            }).then((response) => {
                expect(response.status).to.eql(201)
            })
        }
    })

    it('test Api PUT', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/test",
            body: {
                "id": 4,
                "title": "Modificando un valor desde cypress en la API",
                "author": "Pedro Pérez"
            }
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    })

    it('test Api DELETE', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/test/4"
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    })

    it.only('test Api Multiple DELETE ', () => {
        for (let i = 3; i < 7; i++) {
            cy.request({
                method: "DELETE",
                url: `http://localhost:3000/test/${i}`
            }).then((response) => {
                expect(response.status).to.eql(200)
            })
        }
    })


});