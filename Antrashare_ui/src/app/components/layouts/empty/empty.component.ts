import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'layout-empty',
  templateUrl: './empty.component.html'
})
export class EmptyLayoutComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

}
