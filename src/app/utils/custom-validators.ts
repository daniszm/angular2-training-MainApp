import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";
export class CustomValidators {
  static atLeastOneShlouldBeSelected(group: FormGroup): ValidationErrors {
    console.log(group.controls);

    for (let key in group.value) {

      if(group.value[key]){
        return;
      }
    }

    return { atLeastOneShlouldBeSelected: true }
  };

  static passedDateRequired(control: AbstractControl): ValidationErrors {



    const today = Date.now();
    const userDate = Date.parse(control.value);

    if(userDate < today) {
      console.log(control.value)
      return;
    }
    return {
      passedDateRequired: true
    }
  }
}
