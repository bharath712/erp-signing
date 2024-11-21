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

        cy.get('a[title="HR"]').click();
        cy.get('a[title="Employee Checkin"]').click(); //Click on Employee Checkin Option from HR
        cy.get('[data-label="Add Employee Checkin"]').click(); //Click on Add Employee Checkin Button
        cy.get('select[data-fieldname="log_type"]').select('OUT'); //Click on OUT
        cy.get('.indicator-pill.no-indicator-dot.whitespace-nowrap').then($element => {

            cy.wrap($element).should('have.text', 'Not Saved');
            cy.get('[data-label="Save"]').click();

            cy.wrap($element).should('have.text', 'Draft');

        });

    });

})
