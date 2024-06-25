const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nk45uk',
  watchForFileChanges: false,
  video: true,
  e2e: {

    baseUrl: 'https://erp.atriina.com/login#login',
    env: {

      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
      NIKHILUSERNAME: process.env.CYPRESS_NIKHILUSERNAME,
      NIKHILPASSWORD: process.env.CYPRESS_NIKHILPASSWORD
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
