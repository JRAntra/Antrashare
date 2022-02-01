import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, merge, Observable, of, ReplaySubject, Subscription } from 'rxjs';
import { filter, skipWhile, switchMap, take, takeUntil, takeWhile, tap, throttleTime } from 'rxjs/operators';

@Injectable()
export class IdleService {
  private status: IdleStatus = {
    idleTime: 10,
    timeoutTime: 10,
    isTimeoutWarning: false,
    countdownIdleTime: null,
    countdownTimeoutTime: null,
    lastPing: null,
  };

  private events$!: Observable<any>;
  private timeoutEvent$!: Observable<any>;
  private eventSubscription!: Subscription;
  private timeoutEventSubscription!: Subscription;

  private idleStart$ = new ReplaySubject(1);
  private timeoutWarning$ = new ReplaySubject(1);

  constructor(private nz: NgZone, private cd: ChangeDetectorRef) {
    this.onInit();
  }

  get onIdleStart() {
    return this.idleStart$.asObservable();
  }

  get onTimeoutWarning() {
    return this.timeoutWarning$.asObservable();
  }

  private onInit(): void {
    // relates to idle events
    const eventStreams = IDLE_EVENTS.map((event) => fromEvent(event.target, event.eventName));
    // merges all the events into one observable object
    const mergedEvents$ = merge(...eventStreams);
    // assign to events$
    this.events$ = mergedEvents$.pipe(
      // take the second from 0 to the idleTime
      switchMap((_) => interval(1000).pipe(take(this.status.idleTime))),

      tap(value => this.countDownIdleTime(value + 1)),

      filter((value) => {
        this.status.countdownIdleTime = value;
        return value == this.status.idleTime - 1;
      }),

      takeWhile((_) => {
        return !this.status.isTimeoutWarning;
      })
    );
    this.timeoutEvent$ = of(this.status.timeoutTime).pipe(
      switchMap((value) => interval(1000).pipe(take(value))),
      tap(value => {
        this.status.countdownTimeoutTime = this.status.timeoutTime - value;
        this.timeoutWarning$.next(this.status.countdownTimeoutTime);

        if (this.status.countdownTimeoutTime <= 0) {
          this.status.countdownTimeoutTime = null;
          this.status.isTimeoutWarning = false;
        }
      })
    );
  }

  countDownIdleTime(val: number) {
    const timeLeftForIdle = this.status.idleTime - val;

    this.status.countdownIdleTime = timeLeftForIdle;
    this.cd.detectChanges();
    
    const isTimeout = timeLeftForIdle <= 0;

    if (isTimeout) {
      this.status.isTimeoutWarning = true;;
      this.idleStart$.next(timeLeftForIdle);
      if (this.timeoutEventSubscription) {
        this.timeoutEventSubscription.unsubscribe();
      }
      this.timeoutEventSubscription = this.timeoutEvent$.subscribe((value) => {
        console.log(`subscribed for timeout ${value + 1} sec`);
      });
    }
  }

  private runOutside() {
    this.nz.runOutsideAngular(() => {
      this.eventSubscription = this.events$.subscribe(value => {
        console.log(`subscribed for ${value + 1} sec`);
      })
    });
  }

  watch() {
    this.runOutside();
  }

  stop() {
    this.eventSubscription.unsubscribe();
  }
}

export const IDLE_EVENTS = [
  { target: document, eventName: 'click' },
  { target: document, eventName: 'keypress' },
  { target: document, eventName: 'mousemove' },
  { target: document, eventName: 'touchstart' },
  { target: document, eventName: 'wheel' },
  { target: document, eventName: 'scroll' },
  { target: window, eventName: 'mousemove' },
  { target: window, eventName: 'resize' },
  { target: window, eventName: 'scroll' },
];

export interface IdleStatus {
  idleTime: number;
  timeoutTime: number;
  isTimeoutWarning: boolean;
  countdownIdleTime: number | null;
  countdownTimeoutTime: number | null;
  lastPing: Date | null;
}