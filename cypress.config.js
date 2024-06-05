const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: 'weezee1@faker.com',
    password: 'takethat',
    url: 'https://thinking-tester-contact-list.herokuapp.com'
  }
});
