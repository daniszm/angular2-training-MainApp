import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import {CustomValidators} from "../../utils/custom-validators";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{9}$/)
      ])),
      birthDate: new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.passedDateRequired

      ])),
      hobbies: new FormGroup({
        youtube: new FormControl(''),
        facebook: new FormControl(''),
        twitter: new FormControl(''),
        instagram: new FormControl('')
      }, CustomValidators.atLeastOneShlouldBeSelected)
    });
    this.registerForm
      .valueChanges
      .filter((data) => {
      if(data.name.includes('dupa')){
        alert("Nieładnie!");
        return false;
      }
      return true;

      })
      .map((data) => {
          return {
            ...data,
            ...{phone: '+48' + data.phone},
            ...{today: Date.now()}};
      })
      .subscribe((data) => {
      console.log(data);
    })
  }



  ngOnInit() {
  }

}
