import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'layout-horizontal',
  templateUrl: './horizontal.component.html'
})
export class HorizontalComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
  }

}
