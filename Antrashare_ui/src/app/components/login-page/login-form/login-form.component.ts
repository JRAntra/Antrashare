import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }


  ngOnInit(): void {
    let rememberedData = localStorage.getItem('login-data') ? JSON.parse(localStorage.getItem('login-data') || "") : "";
    this.loginForm.controls["userName"].setValue(rememberedData.userName ? rememberedData.userName : "");
    this.loginForm.controls["password"].setValue(rememberedData.password ? rememberedData.password : "");
  }

  rememberMeChecked(event: any) {
    this.rememberedUserIsChecked = !this.rememberedUserIsChecked;
  }


  signIn() {

    // Logic for checking login input to go to news feed page or not
    let currentUserName = this.loginForm.get('userName')?.value;
    let currentPassword = this.loginForm.get('password')?.value;

    // Direct testing:
    // Can only go to news feed if the user input match the tmpUserData array
    let tmpUserData = [
      { userName: 'Josh', password: "123456" },
      { userName: 'Kim', password: "696969" },
      // add more to test if you want
    ];

    for (const element of tmpUserData) {
      if (currentUserName === element.userName &&
        currentPassword === element.password) {
        // Matched so co go to news feed page
        console.log('Current login match so preceed to newsFeed page!');
        this.router.navigate(['/newsFeed']);
      }
    }

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
