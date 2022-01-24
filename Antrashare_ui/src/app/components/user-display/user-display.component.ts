import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
  correctPath: string = '';
  constructor(private router: Router) {
    const path = this.router.url;
    this.correctPath = path.slice(1, path.length);
  }

  ngOnInit(): void {
  }

}
