const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: true,
  e2e: {

    baseUrl: 'https://erp.atriina.com/login#login',
    env: {

      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
