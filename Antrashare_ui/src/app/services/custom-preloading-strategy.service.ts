import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators'

import { PreloadingStrategy, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService {

  constructor() { }


  preload(route: Route, loadMe: () => Observable<Function>): Observable<Function | null> {

    // Check the route data. 
    // If the preload is true, then we check for delay.
    if (route.data && route.data['preload']) {
      let delay: number = route.data['delay']
      console.log('preload called on ' + route.path + ' with a delay of ' + delay);

      return timer(delay).pipe(
        mergeMap(_ => {
          console.log("Loading now " + route.path + ' module');
          return loadMe();
        }));

    } else {
      console.log('no preload for the path ' + route.path);
      return of(null);
    }
  }
}
