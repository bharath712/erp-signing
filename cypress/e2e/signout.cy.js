describe('CheckIn using ERP Portal', () => {

    beforeEach('Exception Handling', () => {

        cy.on('uncaught:exception', (err) => {

            console.log('Exception handling', err);
            return false;

        });

        cy.visit('/');

    });

    it('Bharath Battini Check Out', () => {
        cy.get('#login_email').type(Cypress.env('USERNAME'));
        cy.get('#login_password').type(Cypress.env('PASSWORD'), { log: false });
        cy.get('[type="submit"]')
            .contains('Login').click();

        cy.get('#navbar-search')
            .clear()
            .type('Employee Check');
        cy.get('#awesomplete_list_1').children().first().click();
        cy.get('[data-label="Add Employee Checkin"]').click();
        cy.get('div.awesomplete > input[type="text"][data-doctype="Employee Checkin"]')
            .type('HR-EMP-00068{enter}')
        cy.get('select[data-fieldtype="Select"]').select('OUT');
        cy.get('[data-label="Save"]').click();

    });

})
