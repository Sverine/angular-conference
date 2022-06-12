import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser!:IUser;
    loginUser(username:string,password:string){
        this.currentUser = {
            id:1,
            firstName:"John",
            lastName:"Papa",
            userName:username
        }
    }

    isAuthenticated():boolean{
        return !!this.currentUser
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}