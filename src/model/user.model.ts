import {user_role} from "@prisma/client";

class UserModel{
    private _user_id:string
    private _email:string
    private _password:string
    private _role:user_role

    constructor(user_id: string, user_name: string, password: string, role: user_role) {
        this._user_id = user_id;
        this._email = user_name;
        this._password = password;
        this._role = role;
    }


    get user_id(): string {
        return this._user_id;
    }

    set user_id(value: string) {
        this._user_id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get role(): user_role {
        return this._role;
    }

    set role(value: user_role) {
        this._role = value;
    }
}
export default UserModel;