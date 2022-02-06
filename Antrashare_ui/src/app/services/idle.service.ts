import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, merge, Observable, of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { filter, skipWhile, switchMap, take, takeUntil, takeWhile, tap, throttleTime } from 'rxjs/operators';
import { APP_CONFIG } from '../core/config/app.config';

const KEY = `${APP_CONFIG.localStorage.prefix}${APP_CONFIG.localStorage.idle}`;

@Injectable()
export class IdleService {
  // declare idle status
  private status: IdleStatus = {
    ...this.defaultIdleStatus,

    isTimeoutWarning: false,
    countdownIdleTime: null,
    countdownTimeoutTime: null,
  };

  private events$!: Observable<any>;
  private timeoutEvent$!: Observable<any>;
  private eventSubscription!: Subscription;
  private timeoutEventSubscription!: Subscription;

  private idleStart$ = new Subject();
  private timeoutWarning$ = new Subject();

  /**
   * Constructor
   */
  constructor(
    private nz: NgZone,
    private cd: ChangeDetectorRef
  ) {
    this.onInitIdleEvents();
  }

  private get defaultIdleStatus() {
    const status = JSON.parse(localStorage.getItem(KEY) || JSON.stringify(APP_CONFIG.defaultIdleStatus));
    localStorage.setItem(KEY, JSON.stringify(status));

    return status;
  }

  private onInitIdleEvents(): void {
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
    this.timeoutEvent$ = interval(1000).pipe(
      take(this.status.timeoutTime)
    );
  }

  private countDownIdleTime(val: number) {
    const timeLeftForIdle = this.status.idleTime - val;

    this.status.countdownIdleTime = timeLeftForIdle;
    this.cd.detectChanges();

    if (timeLeftForIdle <= 0) {
      this.status.isTimeoutWarning = true;;
      this.idleStart$.next(this.status.timeoutTime);

      if (this.timeoutEventSubscription) {
        this.timeoutEventSubscription.unsubscribe();
      }
      this.timeoutEventSubscription = this.timeoutEvent$.subscribe((value) => {
        this.status.countdownTimeoutTime = this.status.timeoutTime - value - 1;
        this.timeoutWarning$.next(this.status.countdownTimeoutTime);

        if (this.status.countdownTimeoutTime <= 0) {
          this.status.countdownTimeoutTime = null;
          this.status.isTimeoutWarning = false;
        }
      });
    }
  }

  private running() {
    this.nz.run(() => {
      this.eventSubscription = this.events$.subscribe();
    });
  }

  /**
   * Watch idle events
   *
   */
  watch() {
    stop();

    this.running();
  }

  /**
   * Stop watching idle events
   *
   */
  stop() {
    this.idleStart$;
    this.status.countdownIdleTime = null;
    this.status.countdownTimeoutTime = null;
    this.status.isTimeoutWarning = false;

    if (this.timeoutEventSubscription) {
      this.timeoutEventSubscription.unsubscribe();
    }

    this.eventSubscription.unsubscribe();
  }

  get onIdleStart() {
    return this.idleStart$.asObservable();
  }

  get onTimeoutWarning() {
    return this.timeoutWarning$.asObservable();
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
}