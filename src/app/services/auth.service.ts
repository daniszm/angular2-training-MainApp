import { Injectable } from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";
import {Http} from "@angular/http";
import {Settings} from "../utils/settings";

@Injectable()
export class AuthService implements AuthServiceInterface{

  access: boolean;

  constructor(private http:Http) {
    this.isAuthenticated();
  }

  isAuthenticated(): void {
    this.http.get(Settings.AUTH).subscribe((data) => {
        if(data.json().ok) {
          this.access = true;
        }
    })
  }

  logIn(loginData): void {
    this.http
      .post(Settings.LOGIN_END_POINT, loginData)
      .filter((response) => {
          if (response.json().ok) {
            return true;
          }
      })
      .subscribe((response) => {
          this.access = true;
      })
  }

  logOut(): void {
    this.http.get(Settings.LOGOUT_END_POINT).subscribe((data)=>{
      this.access = false;
  })
  }
}
