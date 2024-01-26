import {HomePageSheet} from "./HomePage";

class LoginPage {
    elements = {
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        submitButton: () => cy.get("#submit"),
        errorFlag: () => cy.get("#error")
    }

    successfulLogin(userName: string, password: string) {
        this.elements.usernameInput().type(userName);
        this.elements.passwordInput().type(password);
        cy.intercept("/logged-in-successfully").as("loggedIn");
        this.elements.submitButton().click();
        cy.wait("@loggedIn");
        return HomePageSheet;
    }
    assertFailedLogin(userName: string, password: string, errorMessage: string) {
        this.elements.usernameInput().type(userName);
        this.elements.passwordInput().type(password);
        this.elements.submitButton().click();
        this.elements.errorFlag().contains(errorMessage);
        return this;
    }
}
export const LoginPageSheet: LoginPage = new LoginPage();
