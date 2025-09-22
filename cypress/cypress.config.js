const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUlr: 'http://localhost/synapse-site/index.php'
  },
});
