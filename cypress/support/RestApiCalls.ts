import {ApiRequests} from "./ApiEndpoint";
import {RegisterUser} from "./requestPayload/RegisterUser";

class RestApiCalls {
    listUsersOnPage(pageNumber: number): Cypress.Chainable<Cypress.Response<any>> {
        const requestEndpoint: string = ApiRequests.usersEndpoint();
        const requestOptions = {
            method: "GET",
            url: requestEndpoint,
            qs: {
                "page": pageNumber
            }
        };
        return cy.request(requestOptions).then((response) => {
            return response;
        });
    }

    getSpecificUser(userId: number, isFailureExpected: boolean = true): Cypress.Chainable<Cypress.Response<any>> {
        const requestEndpoint: string = ApiRequests.actionOnUser(userId);
        const requestOptions = {
            method: "GET",
            url: requestEndpoint,
            failOnStatusCode: isFailureExpected,
        };
        return cy.request(requestOptions).then((response) => {
            return response;
        });
    }
    registerUser(registerUserPayload: RegisterUser, isFailureExpected: boolean = true) {
        const requestEndpoint: string = ApiRequests.registerEndpoint();
        const requestOptions = {
            method: "POST",
            url: requestEndpoint,
            failOnStatusCode: isFailureExpected,
            body: registerUserPayload,

        };
        return cy.request(requestOptions).then((response) => {
            return response;
        });
    }
}

export const RestApiAgent: RestApiCalls = new RestApiCalls();