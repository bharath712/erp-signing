const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {

    baseUrl: 'https://erp.atriina.com/login#login',
    env: {

      USERNAME: 'bharath.bathini@atriina.com',
      PASSWORD: 'Bharath$7',


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
