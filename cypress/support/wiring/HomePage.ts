import {LoginPageSheet} from "./LoginPage";

enum ElementsLocators {
    TextMessage = '.post-content',
    LogoutLink = '.wp-block-button__link'
}
class HomePage {
    elements = {
        textMessage: () => cy.get(ElementsLocators.TextMessage),
        logOutButton: () => cy.get(ElementsLocators.LogoutLink)
    }

    assertSuccessfulLoginMessage() {
        this.elements.textMessage().children().contains("Congratulations student. You successfully logged in");
        return this;
    }
    logoutFromWeb() {
        this.elements.logOutButton().click();
        return LoginPageSheet;
    }
}
export const HomePageSheet = new HomePage();