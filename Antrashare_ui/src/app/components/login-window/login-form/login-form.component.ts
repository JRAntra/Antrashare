import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { UserAccount } from 'src/app/models/user.models';


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


    constructor(
        private router: Router,
        private loginService: LoginService        
        ){}

    ngOnInit(): void {
        //if already has the token, enter newsfeed directly
        if (localStorage.getItem('loginToken')) {
            this.router.navigate(['/newsFeed/'])
        }
        
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
        let inputUsername = this.usernameValue;
        let inputPassword = this.passwordValue;
        
        const postBody: UserAccount = {
            userEmail: inputUsername,
            password: inputPassword
        }
        console.log(this.userFormGroup.value);
        this.loginService.postLogin(postBody).subscribe((res: any ) =>
            {
                localStorage.setItem('loginToken', res.bearerToken)
                this.loginService.decodeToken(res.bearerToken)
            }
            
        )
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