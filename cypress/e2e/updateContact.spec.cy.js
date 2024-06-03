describe('Update Contact Tests', () => {

  beforeEach(() => {
    cy.login()
  }) //This is the 'test suite' i.e. the group of tests we're about to run
  
  it('Can update a contact', () => { //This is the 'test' i.e. the individual test we're running

    let random = Math.floor(Math.random() * 1000)

    cy.addContact(random) //This 'random' is being passed in from the Commands.js file

    cy.contains('Weezee' + random + ' Faker').click()
    cy.get('#edit-contact').click()
    cy.get('#firstName').clear().type('Update' + random)
    cy.get('#lastName').clear().type('ThisLastName')
    cy.get('#birthdate').clear().type('1983-07-28')
    cy.get('#email').clear().type('in@out.com')
    cy.get('#phone').clear().type('0987654321')
    cy.get('#street1').clear().type('321 Real Street')
    cy.get('#street2').clear().type('Apt Z')
    cy.get('#city').clear().type("Louisville")
    cy.get('#stateProvince').clear().type('KY')
    cy.get('#postalCode').clear().type('98765')
    cy.get('#country').clear().type('USA')
    cy.get('#submit').click()

    // cy.contains('Weezee' + random + ' Faker').click()
    // cy.get('#firstName').should('contain', `Weezee${random}`)
    // cy.get('#lastName').should('contain', 'Faker')
    // cy.get('#birthdate').should('contain', '1980-03-24')
    // cy.get('#email').should('contain', 'fakeemail@you.com')
    // cy.get('#phone').should('contain', '1234567890')
    // cy.get('#street1').should('contain', '123 Fake St')
    // cy.get('#street2').should('contain', 'Apt 1')
    // cy.get('#city').should('contain', 'Springfield')
    // cy.get('#stateProvince').should('contain', 'KY')
    // cy.get('#postalCode').should('contain', '12345')
    // cy.get('#country').should('contain', 'USA')
    
  })

  it('Returns an error when birthdate validation fails', () => {

    let random = Math.floor(Math.random() * 1000)

    cy.addContact(random)
    cy.contains('Weezee' + random + ' Faker').click()
    cy.get('#edit-contact').click()
    cy.get('#birthdate').clear().type('07-08-1983')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Birthdate is invalid') 
    cy.get('#cancel').click()

  })

  afterEach(() => {
    cy.deleteContact()
  })
})