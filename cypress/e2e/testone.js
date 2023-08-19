/// <reference types= "cypress" />
let login = "muhyeayesh"
let password = "mmmm1998"
describe('this is our test', () => {
    it('to test regester for automation test store', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top').click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type("muhye aldeen")
        cy.get('#AccountFrm_lastname').type("ayesh")
        cy.get('#AccountFrm_email').type("mohee_ayesh@yahoo.com")
        cy.get('#AccountFrm_telephone').type("0781357428")
        cy.get('#AccountFrm_fax').type("0781357428")
        cy.get('#AccountFrm_company').type("careem")
        cy.get('#AccountFrm_address_1').type("QUDAMA BIN JAFAR ST")
        cy.get('#AccountFrm_address_2').type("12B BULDING")
        cy.get('#AccountFrm_city').type("Irbid")
        cy.get('#AccountFrm_country_id').select('Jordan')
        cy.get('#AccountFrm_zone_id').select('Irbid')
        cy.get('#AccountFrm_postcode').type('21191')
        cy.get('#AccountFrm_loginname').type(login)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)
        cy.get('#AccountFrm_newsletter0').click()
        cy.get('#AccountFrm_agree').click()
        cy.get('.col-md-2 > .btn').click()
        // ----------------------------
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.get('#loginFrm > fieldset > .btn').click()
    });
});