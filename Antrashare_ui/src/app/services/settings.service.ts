import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG } from '../core/config/app.config';
import { ThemeType } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private theme$ = new BehaviorSubject(APP_CONFIG.defaultTheme);

  constructor(public overlayContainer: OverlayContainer) { this.setOverlayContainer(APP_CONFIG.defaultTheme) }

  private setOverlayContainer(theme: string): void {
    const overlayContainerClassList = this.overlayContainer.getContainerElement().classList;
    const needToRemoveClass = Array.from(overlayContainerClassList).filter((cl: string) => cl.includes('-theme'));
    if (needToRemoveClass.length) {
      overlayContainerClassList.remove(...needToRemoveClass);
    }
    overlayContainerClassList.add(theme);
  }

  setTheme(theme: ThemeType = APP_CONFIG.defaultTheme): void {
    this.setOverlayContainer(theme);
    this.theme$.next(theme);
  }

  getTheme(): Observable<ThemeType> {
    return this.theme$.asObservable();
  }
}