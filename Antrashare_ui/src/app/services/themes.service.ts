import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG } from '../core/config/app.config';
import { ThemeType } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private activeTheme$ = new BehaviorSubject(APP_CONFIG.defaultTheme);

  /**
   * Constructor
   */
  constructor(public overlayContainer: OverlayContainer) {
    // Set default theme
    this.setOverlayContainer(APP_CONFIG.defaultTheme);
  }

  /**
   * Set OverlayContainer: set activeTheme class to classList
   *
   * @param theme
   * @private
   */
  private setOverlayContainer(theme: ThemeType): void {
    const overlayContainerClassList = this.overlayContainer.getContainerElement().classList;
    const needToRemoveClass = Array.from(overlayContainerClassList).filter((containerClass: string) => containerClass.includes('-theme'));
    if (needToRemoveClass.length) {
      overlayContainerClassList.remove(...needToRemoveClass);
    }
    overlayContainerClassList.add(theme);
  }

  /**
   * Set activeTheme
   *
   * @param theme
   */
  setActiveTheme(theme: ThemeType = APP_CONFIG.defaultTheme): void {
    this.setOverlayContainer(theme);
    this.activeTheme$.next(theme);
  }

  /**
   * Get activeTheme
   *
   */
  getActiveTheme(): Observable<ThemeType> {
    return this.activeTheme$.asObservable();
  }
}