import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "https://practicetestautomation.com/practice-test-login/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        "reporter": "mochawesome",
        "reporterOptions": {
            "reportDir": "cypress/reports",
            "overwrite": false,
            "html": true,
            "json": true
        }

    },
});
