describe('Add Contact Tests', () => { //This is the 'test suite' i.e. the group of tests we're about to run
  before(() => {
    cy.log('This is running in my before hook')
  })
  it('Can add a new contact', () => { //This is the 'test' i.e. the individual test we're running

    let random = Math.floor(Math.random() * 1000)

    cy.login()
    cy.addContact(random) //This 'random' is being passed in from the Commands.js file

    cy.contains('Weezee' + random + ' Faker').click()
    cy.get('#firstName').should('contain', `Weezee${random}`)
    cy.get('#lastName').should('contain', 'Faker')
    cy.get('#birthdate').should('contain', '1980-03-24')
    cy.get('#email').should('contain', 'fakeemail@you.com')
    cy.get('#phone').should('contain', '1234567890')
    cy.get('#street1').should('contain', '123 Fake St')
    cy.get('#street2').should('contain', 'Apt 1')
    cy.get('#city').should('contain', 'Springfield')
    cy.get('#stateProvince').should('contain', 'KY')
    cy.get('#postalCode').should('contain', '12345')
    cy.get('#country').should('contain', 'USA')
    
    cy.deleteContact()
  })

  it('Returns an error when required field is missing', () => {
    cy.login()
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Joey Jojo')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Contact validation failed')
  })
  after(() => {
    cy.log('This is running in my after hook')
  })
})