import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {

  @ViewChild('loginForm') loginForm;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  logIn(){
    if(this.loginForm.valid){
      this.authService.logIn(this.loginForm.value)
    } else {
      console.warn('form invalid');
    }

  }
}
