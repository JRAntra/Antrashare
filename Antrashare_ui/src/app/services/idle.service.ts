import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, Subject, timer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// --- by Huazhen Xu ---
export class IdleService {
  private idle: Observable<any> = new Observable();
  private timer :Subscription = new Subscription();
  private timeOutMilliSeconds: number = 1000;
  private idleSubscription: Subscription = new Subscription();

  public expired: Subject<boolean> = new Subject<boolean>();

  public startWatching(timeOutSeconds : number): Observable<any> {
    // There are the following operations to determine that the user is not idle
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
      fromEvent(window, 'resize'),
    );

    this.timeOutMilliSeconds = timeOutSeconds;
    
    // If any of the above events are triggered, reset timer.
    this.idleSubscription = this.idle.subscribe((res) => {
      this.resetTimer();
    });
    // Initialize
    this.startTimer();
  
    return this.expired;
  }

  private startTimer() {
   this.timer = timer(this.timeOutMilliSeconds).subscribe((res) => {
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