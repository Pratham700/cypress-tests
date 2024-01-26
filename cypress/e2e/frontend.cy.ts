import {LoginPageSheet} from "../support/wiring/LoginPage";

describe('template spec', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl as string);
    });
    it('Successful Login Test', () => {
       cy.fixture("example.json").then((credentials) => {
           LoginPageSheet.successfulLogin(credentials.correctUsername, credentials.correctPassword)
               .assertSuccessfulLoginMessage().logoutFromWeb();
       });
    });

    it('Failed Login Tests', () => {
        cy.fixture("example.json").then((testValidationData) => {
            LoginPageSheet.assertFailedLogin(testValidationData.incorrectUsername, testValidationData.correctPassword,testValidationData.incorrectUserMessage );
            LoginPageSheet.assertFailedLogin(testValidationData.correctUsername, testValidationData.incorrectUsername, testValidationData.incorrectPasswordMessage)
        });
    })
})