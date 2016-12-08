import { User } from './user';

export class UserSession {

    private static _instance: UserSession = new UserSession();

    _user: User;

    constructor() {
        if(UserSession._instance) {
            throw new Error("Error: Do not two _instance");
        }
        UserSession._instance = this;
        UserSession._instance._user = null;
    }

    public static getInstance(): UserSession{
        return UserSession._instance;
    }

    public setUser(user: User) {
        this._user = user;
    }

    public getUser(user: User): User {
        return this._user
    }
}
