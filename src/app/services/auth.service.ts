import { Injectable } from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";
import {Http} from "@angular/http";
import {Settings} from "../utils/settings";

@Injectable()
export class AuthService implements AuthServiceInterface{


  constructor(private http:Http) {

  }

  isAuthenticated(): void {
  }

  logIn(loginData): void {
    this.http
      .post(Settings.LOGIN_END_POINT, loginData)
      .subscribe((response) => {
          console.log(response.json())
      })
  }

  logOut(): void {
  }




}
