import { ChangeDetectorRef, Injectable, NgZone, OnInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable()
export class IdleService implements OnInit {
  private status = {
    idleTime: 10,
    timeoutTime: 10,
  };

  private mergedEvents$!: Observable<any>;

  constructor(private nz: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // relates to idle events
    const eventStreams = IDLE_EVENTS.map((event) => fromEvent(event.target, event.eventName).pipe(throttleTime(1000)));
    // merges all the events into one observable object
    this.mergedEvents$ = merge(...eventStreams);
  }

  watch() {

  }

  stop() {

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
