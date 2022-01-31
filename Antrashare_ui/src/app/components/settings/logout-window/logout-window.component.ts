import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'logout-window',
  templateUrl: './logout-window.component.html',
  styleUrls: ['./logout-window.component.scss']
})
export class LogoutWindowComponent implements OnInit {
  @Input() logout!: boolean;
  @Output() logoutEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  close() {
    this.logout! = false;
    this.logoutEmitter.emit(this.logout!)
  }

  confirm() {
    this.close();
    //reset user credentials
  }


}
