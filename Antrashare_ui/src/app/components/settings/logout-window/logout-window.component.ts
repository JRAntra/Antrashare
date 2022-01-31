import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logout-window',
  templateUrl: './logout-window.component.html',
  styleUrls: ['./logout-window.component.scss']
})
export class LogoutWindowComponent implements OnInit {


  ngOnInit(): void {
  }

  close() {
    //set logout to false
  }

  confirm() {
    //call close()
    //reset user credentials
    //redirect to login page
  }


}
