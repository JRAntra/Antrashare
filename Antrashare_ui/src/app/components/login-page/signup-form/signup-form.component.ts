import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, debounce, debounceTime, map, Observable, of, switchMap, throwError } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { UserValidationService } from 'src/app/services/user-validation.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RoleGuardService } from 'src/app/services/role-guard.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  found404: boolean = false;

  // Create a form for signing up
  signupForm = this._formBuilder.group({
    username:
      [
        null,
        [Validators.required, Validators.minLength(5)],
        [this._userValidationService.validateUniqueUserName(this._userService),],
      ],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    userEmail:
      [
        null,
        [Validators.required, Validators.minLength(3)],
        [this._userValidationService.validateUniqueUserEmail(this._userService, this.found404)],
      ],
    age: [''],
    gender: [''],
    phone: [''],
  });

  get userNameValue() {
    return this.signupForm?.get('username')?.value;  // 
  }

  public signUpSuccess: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _userValidationService: UserValidationService,
    private _httpClient: HttpClient,
    private _roleGuardService: RoleGuardService,
  ) { }


  ngOnInit(): void {
  }

  get userNameEmail() {
    return this.signupForm?.get('userEmail')?.value;
  }


  signUp() {
    // Check with sync validators
    if (
      !this.signupForm.controls['password'].errors
      && !this.signupForm.controls['username'].errors
      && !this.signupForm.controls['name'].errors
    ) {
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

      // Create a new account with given value
      this._userService.createNewAccount(currentBody).subscribe((data) => {
        this.signUpSuccess = true;
      })

      // Refresh the list for admin page
      this._userService.updateNewUserFlag(true);
    }
  }
}
