import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  constructor() {}

  public loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: Math.random(),
      userName: userName,
      firstName: userName,
      lastName: userName
    };
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  public updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
