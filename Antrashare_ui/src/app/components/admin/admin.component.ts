import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../css/admin.component.scss']
})
export class AdminComponent implements OnInit {

  addMode: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
