import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  constructor() { }

  public loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Jasmine Monquie',
      lastName: 'Lewis'
    }
  }

  public isAuthenticated() {
    return !!this.currentUser;
  }
}
