# Cypress Test Framework for End-to-End Testing

This is a test framework that uses [Cypress], a JavaScript-based end-to-end testing tool, and [TypeScript], a typed superset of JavaScript that compiles to plain JavaScript. This framework contains two spec files: `backend.cy.ts` and `frontend.cy.ts`, which test the backend and frontend functionalities of the application respectively.

## Prerequisites and Installation

To use this framework, you need to have the following installed on your system:

- [Node.js] LTS version, which is a JavaScript runtime environment that executes JavaScript code outside a web browser.
- [npm], which is a package manager for Node.js that allows you to install and manage dependencies for your project.
- [Cypress] latest version, which is a testing tool that runs in the same run-loop as your application and simulates user actions and assertions.
- [TypeScript] latest version, which is a language that adds static types to JavaScript and enhances its readability and maintainability.

To install the prerequisites, follow these steps:

1. Download and install Node.js LTS version from its [official website]. This will also install npm on your system.
2. Open a terminal or command prompt and navigate to the root folder of your project.
3. Run the command `npm install cypress --save-dev` to install Cypress as a dev dependency for your project.
4. Run the command `npm install typescript --save-dev` to install TypeScript as a dev dependency for your project.
5. Run the command `npx tsc --init` to initialize a TypeScript configuration file (`tsconfig.json`) in your project folder.

## Running the Tests

1. Unzip the framework zip file and extract the contents to a folder on your system.
2. Open a terminal or command prompt and navigate to the folder where you extracted the framework.
3. Run the command `npm install` to install all the dependencies for the project.
4. Run the command `npx tsc` to compile the TypeScript files to JavaScript files.

To run the tests, you need to specify the base URL for each spec file. The base URL is the domain name of the application that you want to test. For example, `abc.com` or `xyz.com`.

To run the `backend.cy.ts` file, you need to set the base URL as `https://reqres.in/`. To run the `frontend.cy.ts` file, you need to set the base URL as `https://practicetestautomation.com/practice-test-login/`.

You can run the tests in two modes: headless or open. In headless mode, the tests run in the background without opening a browser window. In open mode, the tests run in a browser window and you can see the actions and assertions as they happen.

To run the tests in headless mode, use the following commands:

- For `backend.cy.ts`: `npx cypress run --spec "cypress/e2e/backend.cy.ts" --config baseUrl=https://reqres.in/`
- For `frontend.cy.ts`: `npx cypress run --spec "cypress/e2e/frontend.cy.ts" --config baseUrl=https://practicetestautomation.com/practice-test-login/`

To run the tests in open mode, use the following commands:

- For `backend.cy.ts`: `npx cypress open --config baseUrl=https://reqres.in/` and then click on `backend.cy.ts` in the Cypress Test Runner window.
- For `frontend.cy.ts`: `npx cypress open --config baseUrl=https://practicetestautomation.com/practice-test-login/` and then click on `frontend.cy.ts` in the Cypress Test Runner window.

## Test Results and Reports

After running the tests, you can see the test results and reports in the terminal or the Cypress Test Runner window. You can also generate HTML reports using [mochawesome], a reporter for mocha that generates a full HTML/CSS report to help visualize your test suites.

To generate HTML reports, follow these steps:

1. Run the command `npm install mochawesome --save-dev` to install mochawesome as a dev dependency for your project.
2. Add the following lines to your `cypress.json` file in your project folder:

```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```

3. Run the tests in headless mode using the commands mentioned above.
4. Open the `cypress/reports` folder in your project folder and find the HTML files for each spec file. You can open them in any browser to view the test reports..
