import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.scss']
})
export class LoginWindowComponent implements OnInit {

    ngOnInit(): void {
    };

    SignIn() {
        console.log('Sign In')
    }

    NeedHelp() {
        console.log('Need Help')
    }

    SignUp() {
        console.log('Sign Up')
    }

    LearnMore() {
        console.log('Learn More')
    }
}