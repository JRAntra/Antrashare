import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

  constructor() { }
@Output() userLogin = new EventEmitter();

@ViewChild(LoginFormComponent,{static:false}) loginComponent!: LoginFormComponent;
@ViewChildren(LoginFormComponent) loginComponentArray!: QueryList<LoginFormComponent>;

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.loginComponentArray.first.submitUserInfo())
  }

  onClick(): number{
    //console.log(this.loginComponent.submitUserInfo())
    return 1000;
  }

  
 
}
