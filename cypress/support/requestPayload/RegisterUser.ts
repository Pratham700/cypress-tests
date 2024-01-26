export class RegisterUser {
    private readonly email!: string;
    private readonly password!: string;


    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }
    constructor(builder: typeof RegisterUser.RegisterUserBuilder.prototype) {
        this.email = builder.email;
        this.password = builder.password;
    }

    static RegisterUserBuilder = class {
        private _email!: string;
        private _password!: string;

        get email(): string {
            return this._email;
        }

        public setEmail(email: string) {
            this._email = email;
            return this;
        }

        get password(): string {
            return this._password;
        }

        public setPassword(password: string) {
            this._password = password;
            return this;
        }

        public build(){
            return new RegisterUser(this)
        }
    }
}