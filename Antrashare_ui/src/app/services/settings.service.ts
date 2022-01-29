import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private initState = {
    theme: THEMES.dark
  }

  private theme$ = new BehaviorSubject(this.initState.theme);

  constructor() { }

  setTheme(theme: string) {
    this.theme$.next(theme);
  }

  getTheme() {
    return this.theme$.asObservable();
  }
}

export const THEMES = { dark: 'dark-theme' }