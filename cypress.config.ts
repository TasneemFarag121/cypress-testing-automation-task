import { defineConfig } from "cypress";

export default defineConfig({
  //chromeWebSecurity: false,
  e2e: {
    baseUrl : 'https://testingtasks.kwentra.com',
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
