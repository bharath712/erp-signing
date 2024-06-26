describe('template spec', () => {

  beforeEach('Exception Handling', () => {

    cy.on('uncaught:exception', (err) => {

      console.log('Exception handling', err);
      return false;

    });

    cy.visit('/');

  });

  it('Login in ERP for checkin', () => {
    cy.log(Cypress.env('USERNAME')),
      cy.get('#login_email').type(Cypress.env('USERNAME'));
    cy.get('#login_password').type(Cypress.env('PASSWORD'), { log: false });
    cy.get('[type="submit"]').contains('Login').click();
    cy.get('#navbar-search').type('Employee Check');
    cy.get('#awesomplete_list_1').children().first().click();
    cy.get('[data-label="Add Employee Checkin"]').click();
    cy.get('select[data-fieldtype="Select"]').select('IN');
    cy.get('[data-label="Save"]').click();

  });


  it('Login in ERP for checkin', () => {
    cy.log(Cypress.env('NIKHILUSERNAME')),
      cy.get('#login_email').type(Cypress.env('NIKHILUSERNAME'));
    cy.get('#login_password').type(Cypress.env('NIKHILPASSWORD'), { log: false });
    cy.get('[type="submit"]').contains('Login').click();
    cy.get('#navbar-search').type('Employee Check');
    cy.get('#awesomplete_list_1').children().first().click();
    cy.get('[data-label="Add Employee Checkin"]').click();
    cy.get('select[data-fieldtype="Select"]').select('IN');
    cy.get('[data-label="Save"]').click();

  });


})
