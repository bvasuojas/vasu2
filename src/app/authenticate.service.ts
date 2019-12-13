import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  public isAuthenticate():boolean {
    const userData = localStorage.getItem('token');

    if (userData.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  public getToken(){
    return localStorage.getItem('token');
  }
}
