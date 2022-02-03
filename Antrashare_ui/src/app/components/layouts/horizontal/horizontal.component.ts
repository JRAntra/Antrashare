import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { TABS } from 'src/app/models/layouts.model';

@Component({
  selector: 'layout-horizontal',
  templateUrl: './horizontal.component.html'
})
export class HorizontalLayoutComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions
  private unsubscribeAll: Subject<any> = new Subject<any>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  tabs = TABS;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
  }

}
