import {RestApiAgent} from "../support/RestApiCalls";
import {RegisterUser} from "../support/requestPayload/RegisterUser";

describe('template spec', () => {
    it('passes', () => {
        let requiredPage: number = 2
        RestApiAgent.listUsersOnPage(requiredPage).then((response) => {
            expect(response.status).to.eq(200); // Success Response must gve 200 as the response status
            expect(response.body.data).length.gte(0).lte(response.body.per_page); // Total Users must be aligned with the Pagination Limit.
            expect(response.body.page).to.eq(requiredPage, "The page requested page only be in the response.");
            console.log(response.body);
        });
        let requiredUserID: number = 2
        RestApiAgent.getSpecificUser(requiredUserID).then((response) => {
            expect(response.status).to.eq(200); // Success Response must gve 200 as the response status
            expect(response.body.data.email).contain("@reqres.in", "No User Is allowed having Email-ID with other domain")
            expect(response.body.data.id).to.eq(requiredUserID); // Requested User's Data should appear
            expect(response.body.data.first_name).not.empty;
            console.log(response.body);
        });
        RestApiAgent.getSpecificUser(24, false).then((response) => {
            expect(response.status).to.eq(404); // Non Exiting USER should return NOT FOUND Error.
            console.log(response.body);
        });

        let userToBeRegistered: RegisterUser = new RegisterUser.RegisterUserBuilder()
            .setEmail("eve.holt@reqres.in").setPassword("Api@123").build();

        console.log(userToBeRegistered)

        RestApiAgent.registerUser(userToBeRegistered)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.token).not.empty; //Success Response must give a valid Token
                console.log(response.body);
            });

        userToBeRegistered = new RegisterUser.RegisterUserBuilder()
            .setEmail("error@reqres.in").build();

        RestApiAgent.registerUser(userToBeRegistered, false)
            .then((response) => {
                expect(response.status).to.eq(400); // Without Password API should return 400
                expect(response.body.error).not.empty; // Error Message should not be empty
                console.log(response.body);
            });

        userToBeRegistered = new RegisterUser.RegisterUserBuilder()
            .setEmail("otherDomail@gmail.com").setPassword("valid").build();

        RestApiAgent.registerUser(userToBeRegistered, false)
            .then((response) => {
                expect(response.status).to.eq(400); // Email with other domains should not be allowed.
                expect(response.body.error).not.empty; // Error Message should not be empty
                console.log(response.body);
            });

    })
})