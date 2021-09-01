Feature: Demo de Cocumber Dos

    Esto es un demo de como utilizar Cocumber

    # Scenario: Demo de Cocumber Dos
    # Given Abrir el navegador principal
    # When Cargando el nombre Juan
    # When Cargando el email Juan@gmail.com
    # And Cargando la dirección Dirección1
    # And Cargando la dirección2 Dirección2
    # And Click en button
    # Then Validar el nombre de la página


    Scenario Outline: Demo de Cocumber Dos caso dos
    Given Abrir el navegador principal
    When Cargando el nombre <username>
    When Cargando el email <email>
    And Cargando la dirección <dir1>
    And Cargando la dirección2 <dir2>
    And Click en button
    Then Validar el nombre de la página


    Examples:
        | username | email | dir1 | dir2 |
        | Juan  | Juan@gmail.com | dir_uno  | dir_dos |
        | Juan2  | Juan2@gmail.com | dir_uno  | dir_dos |
        | Juan3  | Juan3@gmail.com | dir_uno  | dir_dos |
        | Juan4  | Juan4@gmail.com | dir_uno  | dir_dos |
     