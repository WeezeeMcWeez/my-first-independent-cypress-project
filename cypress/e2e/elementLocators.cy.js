describe('Element locator practice', () => {
  it('Can locate an element six different ways', () => {

    cy.visit('https://thinking-tester-contact-list.herokuapp.com')

    //locate an element by id
    cy.get('#email').type('weezee1@faker.com')

    //locate an element by type
    cy.get("[type = 'password']").type('takethat')

    //locate an element by text
    cy.contains('Submit').click()

    //locate an element by class
    cy.get('.logout').click()

    //locate an element by css
    cy.get('input').first().type('weezee1@faker.com')

    //locate an element by xpath - if xpath was supported
    //cy.get('//form/p[2]/input').type('takethat')

    //locate an element by automation id - this app doesn't have any automation ids='s
    //cy.get('[dataa-cy=submit]').click()
  })
})