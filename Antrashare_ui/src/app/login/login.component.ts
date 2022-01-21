import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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