import { Injectable } from '@angular/core';
import {
  fromEvent,
  merge,
  Observable,
  Subject,
  Subscription,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeoutdialogService {
  private idle: Observable<any> = new Observable();
  private timer: Subscription = new Subscription();
  private timeOutMilliSeconds: number = 4000;
  private idleSubscription: Subscription = new Subscription();

  public expired: Subject<boolean> = new Subject<boolean>();

  public startWatching(timeOutSeconds: number): Observable<any> {
    this.idle = merge(
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousedown'),
      fromEvent(document, 'keypress'),
      fromEvent(document, 'DOMMouseScroll'),
      fromEvent(document, 'mousewheel'),
      fromEvent(document, 'touchmove'),
      fromEvent(document, 'MSPointerMove'),
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'resize')
    );

    this.timeOutMilliSeconds = timeOutSeconds * 1000;

    // if detect any dom event, reset timer
    this.idleSubscription = this.idle.subscribe((res) => {
      this.resetTimer();
    });

    // turn expired to true after certain amount of time has elapsed
    this.startTimer();

    return this.expired;
  }

  private startTimer() {
    this.timer = timer(
      this.timeOutMilliSeconds,
      this.timeOutMilliSeconds
    ).subscribe((res) => {
      this.expired.next(true);
    });
  }

  public resetTimer() {
    this.timer.unsubscribe();
    this.startTimer();
  }

  public stopTimer() {
    this.timer.unsubscribe();
    this.idleSubscription.unsubscribe();
  }
}
