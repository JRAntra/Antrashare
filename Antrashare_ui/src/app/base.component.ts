import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ``
})
export class BaseComponent implements OnDestroy {

  // declare an unsubscribeAll for all subscriptions
  unsubscribeAll$: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

}
