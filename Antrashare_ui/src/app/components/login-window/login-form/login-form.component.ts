import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { UserAccount } from 'src/app/models/user.models';
import { catchError, of } from 'rxjs';
import { CacheService } from 'src/app/services/cache.service';


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
        passwordFormControl: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(5),
                this.oneUppercase,
                this.oneSpecialChar
            ],
            updateOn: 'change'
        })
    })
    
    errortype: string = "default";

    constructor(
        private router: Router,
        private loginService: LoginService,
        private cacheService: CacheService
    ) { }

    ngOnInit(): void {
        // localStorage.clear() // cant not clear localstorage cuz because the expiration date may be used later
        this.cacheService.postLogoutCache();
        //if already has the token, enter newsfeed directly
        if (localStorage.getItem('loginToken')) {
            this.router.navigate(['/newsFeed/'])
        }

    };

    oneUppercase(control: AbstractControl): ValidationErrors | null {
        if (control.value !== control.value.toLowerCase()) {
            return null
        } else {
            return { oneUppercase: false }
        }
    }

    oneSpecialChar(control: AbstractControl): ValidationErrors | null {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (specialChars.test(control.value)) {
            return null
        } else {
            return { oneSpecialChar: false }
        }

    }

    SignIn() {
        let inputUsername = this.usernameValue;
        let inputPassword = this.passwordValue;

        const postBody: UserAccount = {
            userEmail: inputUsername,
            password: inputPassword
        }
        // console.log(this.userFormGroup.value);
        this.loginService.postLogin(postBody)
            .pipe(
                catchError(respond => {
                    if (respond.error === "Cannot find this email.") {
                        this.errortype = "emailError";
                    }
                    else if (respond.error === "Invalid email or password.") {
                        this.errortype = "passwordError";
                    }
                    return of(null);
                })
            )
            .subscribe((res: any) => {
                if (res != null) {
                    // localStorage.setItem('loginToken', res.bearerToken)
                    this.cacheService.initLoginCache(res, res.bearerToken);
                    this.loginService.decodeToken(res.bearerToken);
                    this.router.navigate(['/newsFeed/'])
                }
                else {
                    this.userFormGroup.reset({
                        usernameFormControl: '', 
                        passwordFormControl: ''
                    });
                }
            }
            )
    }

    onTriggerForm() {
        this.errortype = "default";
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