// const { defineConfig } = require('cypress')
// const { tagify } = require('cypress-tags');

// const cypressJsonConfig = {
//     "projectId": "4qto2e"
// }

// module.exports = defineConfig({
//     ...cypressJsonConfig,
//   e2e: {
//     baseUrl: 'http://127.0.0.1:8080',
//     setupNodeEvents(on, config) {
//         on('file:preprocessor', tagify(config));
//     }
//   }
// })


// import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
const { defineConfig } = require('cypress')
// import { plugins } from 'cypress-social-logins';
const { tagify } = require('cypress-tags');
// import dotenv from 'dotenv';
// import gmail, { CheckInboxOptions } from 'gmail-tester';
// import { importJWK, SignJWT as JoseSignJWT } from 'jose';
// import path from 'path';
// require('cypress-tags')(config)
// dotenv.config({ path: '../../../.env.local' });

const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
//   supportFile: './src/support/e2e.ts',
  modifyObstructiveCode: false,
  chromeWebSecurity: false,
//   specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  viewportWidth: 1024,
  viewportHeight: 768,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  projectId: '4qto2e',
};

module.exports = defineConfig({
  e2e: {
    // ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
    setupNodeEvents(on, config) {
     
      require('@cypress/browserify-preprocessor')(config);
      // require('cypress-tags')(config)
      on('file:preprocessor', tagify(config));
      return config;
    },
  },
});
