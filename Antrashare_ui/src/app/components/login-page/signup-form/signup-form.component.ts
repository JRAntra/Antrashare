import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: [''],
    age: [''],
    gender: [''],
    phone: [''],

  });
  signUpSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp() {
    if (!this.signupForm.controls['password'].errors && !this.signupForm.controls['username'].errors && !this.signupForm.controls['name'].errors) {
      let currentBody = {
        password: this.signupForm.get('password')?.value,
        userName: this.signupForm.get('username')?.value,
        userEmail: this.signupForm.get('userEmail')?.value,
        name: this.signupForm.get('name')?.value,
        age: this.signupForm.get('age')?.value,
        gender: this.signupForm.get('gender')?.value,
        phone: this.signupForm.get('phone')?.value,
        userRole: 'Admin'
      }

      this.userService.userRegister(currentBody).subscribe((data) => {
        this.signUpSuccess = true;
      })
    }
  }
}
