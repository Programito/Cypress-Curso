/// <reference types="Cypress" /> 

require('cypress-plugin-tab');
require('cypress-xpath');


describe("Nueva sección Dual Select", () => {

    it("Assert Contains", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title('eq', 'My Store');
        cy.wait(1000);

        cy.get("#block_top_menu").contains("Women").click();
    });

    // coger la posicion
    it("Assert find, eq", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title('eq', 'My Store');
        cy.wait(1000);

        cy.get(".product-container").find(".product-image-container").eq(0).click();
    });

    it("Assert find, eq, validando que el vestido es bueno", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title('eq', 'My Store');
        cy.wait(1000);

        cy.get(".product-container").find(".product-image-container").eq(2).click();
        cy.get("#product_condition .editable").then((e) => {
            // cy.log(e.text());
            let estado = e.text();
            if (estado == "New") {
                cy.log("El vestido es nuevo")
            }
        })

        cy.get("#our_price_display").then((e) => {
            let price = e.text();
            price = price.slice(1, 5)
                (price > 30) ? cy.log('El vestido sale de nuestro presupuesto') : cy.get("#add_to_cart").click()
        });

    });


    it("Assert find, eq, text y have.text", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").type("Paco");
        cy.get("#userEmail").should("be.visible").type("paco@gmail.com");
        cy.get("#submit").should("be.visible").click();

        cy.get("#name").should("have.text", "Name:Paco")
        cy.get("#name").should("contain.text", "Paco")
    });

    it("Assert find, eq, have.text mas then", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").type("Paco");
        cy.get("#userName").should("have.value", "Paco").then(() => {
            cy.get("#userEmail").should("be.visible").type("paco@gmail.com");
            cy.get("#submit").should("be.visible").click();
        });

    });

    it("Assert find, eq, should class", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(() => {
            cy.get("#userName").type("rodrigo")
        });
    });


    it("Assert find, eq, have.class y la funcion and", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(() => {
            cy.get("#userName").type("rodrigo")
        });

    });

    it("Assert find, eq, not", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(() => {
            cy.get("#userName").type("rodrigo")
        });

    });

    it("Assert length y el css", () => {
        cy.visit("https://www.seleniumeasy.com/test/table-pagination-demo.html");
        cy.title('eq', 'Selenium Easy - Table with Pagination Demo');
        cy.wait(1000);

        cy.get("#myTable > tr > td").should("have.length", 91).and("have.css", "padding", "8px");
    });

    it("Assert length y el css", () => {

        let time = 1000;

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
        cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium');
        cy.wait(time);

        // Eliminar ventana
        cy.get(".at-cm-no-button").should("be.visible").click({ force: true })
        cy.get(".form-group > #user-message").should("be.visible").type("Demo del contenido");

        cy.wait(time);
        cy.contains("[type = 'button']", "Show Message").should("be.visible").click({ force: true })

    });

    it("Reto asserts", () => {

        let time = 1000;

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
        cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium');
        cy.wait(time);

        let a = 10;
        let b = 20;

        // Eliminar ventana
        cy.get(".at-cm-no-button").should("be.visible").click({ force: true })

        cy.get("#sum1").should("be.visible").and("have.class", "form-control").type(a)
        cy.get("#sum2").should("be.visible").and("have.class", "form-control").type(b)

        cy.contains("[type='button']", "Get Total").click();

        cy.get("#displayvalue").should("be.visible").then((e) => {
            cy.log(e.text());
            (e.text() == a + b) ? cy.log("correcto") : cy.log("incorrecto")
        })



    });

    it('invoke', () => {
        let time = 1000;

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
        cy.title('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium');
        cy.wait(time);

        let a = 10;
        let b = 20;

        // Eliminar ventana
        cy.get(".at-cm-no-button").should("be.visible").click({ force: true })

        cy.get("#sum1").invoke("attr", "placeholder").should("contain", "Enter value").then(() => {

            cy.get("#sum1").should("be.visible").and("have.class", "form-control").type(a)
            // le pone el color azul
            cy.get("#sum1").invoke("attr", "style","color:blue");
            cy.get("#sum2").should("be.visible").and("have.class", "form-control").type(b)
            cy.get("#sum2").invoke("attr", "style","color:yellow");
            cy.contains("[type='button']", "Get Total").click();
            cy.contains("[type='button']", "Get Total").invoke("attr", "style","color:red");

        })




    })





});