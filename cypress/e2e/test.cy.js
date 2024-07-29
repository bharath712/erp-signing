describe('template spec', () => {

    beforeEach('Exception Handling', () => {

        cy.on('uncaught:exception', (err) => {

            console.log('Exception handling', err);
            return false;

        });



    });

    it.skip('', () => {

        cy.visit('https://erp.atriina.com/login#login');
        cy.log(Cypress.env('USERNAME'));
        cy.get('#login_email').type(Update.env('USERNAME'));
        cy.get('#login_password').type(Cypress.env('PASSWORD'), { log: false });
        cy.get('[type="submit"]').contains('Login').click();
        cy.get('#navbar-search').clear().type('Employee Check');
        cy.get('#awesomplete_list_1').children().first().click();
        cy.get('.filter-button').contains('Filter').click();
        cy.get('.fieldname-select-area > .awesomplete > .form-control').as('filterTextBox');
        cy.get('@filterTextBox').clear().type('Created On{enter}');
        cy.get('input[data-fieldtype="DateRange"]', { timeout: 5000 }).last().click();
        cy.get('.-current-', { timeout: 5000 }).last().click({ force: true });
        cy.get('.-selected-', { timeout: 5000 }).first().click({ force: true });
        cy.get('.apply-filters').contains('Apply Filters').click();

        cy.get('[placeholder="Employee Name"]').click().clear().type('Bharath{enter}');
        cy.wait(5000);
        cy.get('.result', { timeout: 5000 }).then($attrValue => {

            let val = $attrValue.attr('style');
            cy.log(val);
            if (val == null) {
                cy.log('Checkin Found');
            }
            else {
                cy.log('Checkin Not Found');
            }

        })


    });

});