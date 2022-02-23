import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent implements OnInit {
  people;
  constructor() {
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: 'George',
          bio: 'Ohana'
        };
      });
  }

  ngOnInit(): void {
  }

}
