import { Component, OnInit } from '@angular/core';
import { Layout } from 'src/app/models/layouts.model';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['../../css/layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  
  readonly Layout = Layout;
  layout!: Layout;

  constructor() { }

  ngOnInit(): void {
  }

}
