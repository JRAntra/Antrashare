import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });


  loginData: string = '';
  rememberedUserIsChecked: boolean = false;
  rememberMeChecked(event: any) {
    console.log('Clicked remember me');
    this.rememberedUserIsChecked = !this.rememberedUserIsChecked;
  }

  signIn() {
    console.log('Clicked button sign in');

    // If remember me checkbox is checked
    // Save input into local storage and check with database later
    if (this.rememberedUserIsChecked === true) {
      this.loginData = JSON.stringify(this.loginForm.value);
      localStorage.setItem('login-data', this.loginData);
    }

    // debug
    console.log(this.loginData);
    console.log(localStorage.getItem('login-data'));
  }
}