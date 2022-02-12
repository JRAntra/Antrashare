import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { debounce, debounceTime, map, Observable, switchMap } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { UserValidationService } from 'src/app/services/user-validation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm = this._formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(5)],
      [this.isUserUnique()], // async validator
    ],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: ['', [Validators.required, Validators.minLength(3)]],
    age: [''],
    gender: [''],
    phone: [''],

  });

  get userNameValue() {
    return this.signupForm?.get('username')?.value;
  }

  public userForm = new FormGroup({
    userNameControl: new FormControl(''),
  })


  // isUserUnique(): AsyncValidatorFn {
  //   console.log(`run`);
  //   console.log(`name: `, this.userNameValue);
  //   return this._userValidationService.checkUserExist(this.userNameValue);
  // }


  isUserUnique(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const checkExistByUsernameURL = "http://localhost:4231/api/register/checkExistByUsername/"
      const fullURL = checkExistByUsernameURL + this.userNameValue;

      return control.valueChanges.pipe(
        // Send request after stop typing for 2 seconds
        debounceTime(2000),

        // Stop previous observable 
        switchMap(() => {
          return this._httpClient.get(fullURL)
            .pipe(
              map((data) => {
                if (data) {
                  console.log(data);
                  return { "isUserUnique": false };
                } else {
                  console.log(data);
                  return null;
                }
              })
            )
        }),
      )

      // Approach without debounce
      // return this._httpClient.get(fullURL)
      //   .pipe(
      //     map((data) => {
      //       console.log(`HERE`);
      //       return data ? { "userExist": true } : null
      //     })
      //   )

    }
  }



  signUpSuccess: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _userValidationService: UserValidationService,
    private _httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    // Check with sync validators
    if (!this.signupForm.controls['password'].errors && !this.signupForm.controls['username'].errors && !this.signupForm.controls['name'].errors) {
      let currentBody = {
        password: this.signupForm.get('password')?.value,
        userName: this.signupForm.get('username')?.value,
        userEmail: this.signupForm.get('userEmail')?.value,
        name: this.signupForm.get('name')?.value,
        age: this.signupForm.get('age')?.value,
        gender: this.signupForm.get('gender')?.value,
        phone: this.signupForm.get('phone')?.value,
        userRole: 'user'
      }

      console.log(currentBody);

      // Create a new account with given value
      this._userService.createNewAccount(currentBody).subscribe((data) => {
        this.signUpSuccess = true;
      })
    }
  }

}
