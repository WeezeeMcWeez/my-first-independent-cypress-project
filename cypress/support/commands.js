// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com') //This is the command to visit the URL
  cy.get('#email').type('weezee1@faker.com')
  cy.get('#password').type('takethat')
  cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (random) => { /*The 'random' here is being passed in
  from the random number we are adding on line 4 of the addContact spec and helps maintain that 
  the random number is added in the firstName step */
  cy.get('#add-contact').click()
  cy.get('#firstName').type('Weezee' + random)
  cy.get('#lastName').type('Faker')
  cy.get('#birthdate').type('1980-03-24')
  cy.get('#email').type('fakeemail@you.com')
  cy.get('#phone').type('1234567890')
  cy.get('#street1').type('123 Fake St')
  cy.get('#street2').type('Apt 1')
  cy.get('#city').type('Springfield')
  cy.get('#stateProvince').type("KY")
  cy.get('#postalCode').type('12345')
  cy.get('#country').type('USA')
  cy.get('#submit').click()
})

Cypress.Commands.add('deleteContact', () => {
  cy.get('#delete').click()
  cy.on('window:confirm', () => true)/*this is a check for a popup on the
  website that doesn't present in Cypress*/
})
