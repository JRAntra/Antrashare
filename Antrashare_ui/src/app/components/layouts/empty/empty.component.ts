import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'layout-empty',
  templateUrl: './empty.component.html'
})
export class EmptyLayoutComponent implements OnInit, OnDestroy {
  private unsubscribeAll!: Subject<any>;

  constructor() { }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
    // new an unsubscribeAll for all subscriptions
    this.unsubscribeAll = new Subject<any>();
  }

}
