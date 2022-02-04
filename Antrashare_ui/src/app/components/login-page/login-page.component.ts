import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { idleTimeService } from '../services/idle-time';
import { fromEvent } from 'rxjs';
import { merge } from 'rxjs'

import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  markToUnsubscribe: Subscription | undefined;

  constructor(private _idleTimeService: idleTimeService) {
    _idleTimeService.currentPageIsSignInPage = true;
    _idleTimeService.currentPageForRouting = 'loginPage'
    // _idleTimeService.detectIdle();

  }

  displayTimer$: any;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.markToUnsubscribe?.unsubscribe();
  }
}

