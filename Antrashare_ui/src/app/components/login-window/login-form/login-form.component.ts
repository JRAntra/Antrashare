import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';

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
        usernameFormControl: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(5)
            ],
            updateOn: 'change'
        }),
        passwordFormControl: new FormControl('',  {
            validators: [
                Validators.required,
                Validators.minLength(5),
                this.oneUppercase,
                this.oneSpecialChar
            ],
            updateOn: 'change'
        })
    })


    constructor(private router: Router){}

    ngOnInit(): void {
       
        
    };

    oneUppercase(control: AbstractControl): ValidationErrors | null  {
        if (control.value !== control.value.toLowerCase()){
            return null
        } else {
            return { oneUppercase: false}
        }
    }

    oneSpecialChar(control: AbstractControl): ValidationErrors | null {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (specialChars.test(control.value)){
            return null
        } else {
            return { oneSpecialChar: false}
        }
       
    }

    SignIn() {
        console.log(this.userFormGroup.value);
        this.router.navigate(['/newsFeed/'])

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