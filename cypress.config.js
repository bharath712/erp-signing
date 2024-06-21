const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {

    baseUrl: 'https://erp.atriina.com/login#login',

    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
