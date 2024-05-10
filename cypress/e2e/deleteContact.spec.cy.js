describe('Delete Contact Tests', () => { //This is the 'test suite' i.e. the group of tests we're about to run
  it('Can delete a contact', () => { //This is the 'test' i.e. the individual test we're running

    let random = Math.floor(Math.random() * 1000)

    cy.login()
    cy.addContact(random) //This 'random' is being passed in from the Commands.js file

    cy.contains('Weezee' + random + ' Faker').click() //This test used
    //to have several assertions from the 'addContact' spec, but we have
    //removed them because we don't need to ASSERT that a contact was added
    //as this was the purpose of the previous test.
    cy.deleteContact()
    cy.get('.contactTableBodyRow').contains('Weezee' + random + ' Faker').should('not.exist')
  })
})