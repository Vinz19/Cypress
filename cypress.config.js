const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        "chromeWebSecurity": false,
        "whatchForFileChanges":true,
        "reporter":"mochawesome",
        "reporterOptions":{
          "charts": true,
          "overwrite": false,
          "html": false,
          "json": true,
          "reportDir": "cypress/reports"
        }
    },
});
