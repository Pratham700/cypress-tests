export enum RequestEndpoints {
    USERS_API = "/api/users",
    REGISTER_API = "/api/register",
    LOGIN_API = "api/login"
}

class ApiEndpoints {
    usersEndpoint(): string {
        return RequestEndpoints.USERS_API;
    }
    actionOnUser(userId: number): string {
        return `${RequestEndpoints.USERS_API}/${userId}`;
    }
    registerEndpoint() {
        return RequestEndpoints.REGISTER_API;
    }
}
export const ApiRequests: ApiEndpoints = new ApiEndpoints();