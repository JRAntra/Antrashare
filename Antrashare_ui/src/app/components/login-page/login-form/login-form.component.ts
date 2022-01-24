import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  loginData: string = '';
  rememberedUserIsChecked: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let rememberedData = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";
    this.loginForm.controls["userName"].setValue(rememberedData.userName ? rememberedData.userName : "");
    this.loginForm.controls["password"].setValue(rememberedData.password ? rememberedData.password : "");
  }

  rememberMeChecked(event: any) {
    this.rememberedUserIsChecked = !this.rememberedUserIsChecked;
  }

  signIn() {
    // If remember me checkbox is checked
    // Save input into local storage and check with database later
    if (this.rememberedUserIsChecked === true) {
      this.loginData = JSON.stringify(this.loginForm.value);
      localStorage.setItem('login-data', this.loginData);
    }
  }
}

interface RememeberedUser {
  userName: string,
  password: string
}
