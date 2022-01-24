import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
    /*
    //by YuxuanWu, form control
    username = new FormControl('')
    */
    
    //by YuxuanWu, form group
    public userFormGroup = new FormGroup({
        usernameFormControl: new FormControl(''),
        passwordFormControl: new FormControl('')
    })

    ngOnInit(): void {
        //by YuxuanWu, form control and form group
        this.usernameValue = "test"
        this.passwordValue = "123"
        
    };

    SignIn() {
        console.log('Sign In')
    }

    NeedHelp() {
        console.log('Need Help')
    }


    /*
    //by YuxuanWu, form control
    set usernameValue(val) {
        this.username?.setValue(val)
    }

    get usernameValue() {
        return this.username?.value
    }
    */

    //by YuxuanWu, form group
    set usernameValue(val) {
        this.userFormGroup?.get('usernameFormControl')?.setValue(val)
    }

    get usernameValue() {
        return this.userFormGroup?.get('usernameFormControl')?.value
    }

    set passwordValue(val) {
        this.userFormGroup?.get('passwordFormControl')?.setValue(val)
    }

    get passwordValue() {
        return this.userFormGroup?.get('passwordFormControl')?.value
    }

}