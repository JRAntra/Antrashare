<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD

  ngOnInit(): void {
  }
=======
@Output() userLogin = new EventEmitter();
  ngOnInit(): void {
  }
 
>>>>>>> 7855a5d0dc9e35bc5043b23a28228f53f0e4f1a5
}
