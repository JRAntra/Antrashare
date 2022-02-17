import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss']
})
export class signupUserComponent implements OnInit {
  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*+=.,]).*$/)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: [''],
    age: [''],
    gender: [''],
    phone: [''],

  });
  signUpSuccess: boolean = false;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private registerService: RegisterService) {
  }

  ngOnInit(): void { }

  submitForm() {
    let signupForm = {
      password: this.signupForm.get('password')?.value,
      userName: this.signupForm.get('username')?.value,
      userEmail: this.signupForm.get('userEmail')?.value,
      name: this.signupForm.get('name')?.value,
      age: this.signupForm.get('age')?.value,
      gender: this.signupForm.get('gender')?.value,
      phone: this.signupForm.get('phone')?.value,
      userRole: 'user'
    }

    this.registerService.registerUser(signupForm).subscribe(x => {
      console.log(x);
      this.signUpSuccess = true;
    });
  }
}
