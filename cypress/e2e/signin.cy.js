describe('template spec', () => {

  beforeEach('Exception Handling', () => {

    cy.on('uncaught:exception', (err) => {

      console.log('Exception handling', err);
      return false;

    });

    cy.visit('/');


  });


  it('Login in ERP for checkin', () => {


    cy.get('#login_email').type(Cypress.env('USERNAME'));
    cy.get('#login_password').type(Cypress.env('PASSWORD'));
    cy.get('[type="submit"]').contains('Login').click();
    cy.get('#navbar-search').type('Employee Check');
    cy.get('#awesomplete_list_1').children().first().click();
    cy.get('[data-label="Add Employee Checkin"]').click();
    cy.get('select[data-fieldtype="Select"]').select('OUT');
    // cy.get('[data-label="Save"]').click();

  });
})