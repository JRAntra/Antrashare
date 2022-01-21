import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    ngOnInit(): void {
    };

    SignIn() {
        console.log('Sign In')
    }

    NeedHelp() {
        console.log('Need Help')
    }
}