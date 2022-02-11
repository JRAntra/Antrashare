import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG } from '../core/config/app.config';
import { ThemeType } from '../models/theme.model';

const KEY: string = `${APP_CONFIG.localStorage.prefix}${APP_CONFIG.localStorage.theme}`;

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private activeTheme$ = new BehaviorSubject(this.defaultTheme);

  /**
   * Constructor
   */
  constructor(public overlayContainer: OverlayContainer) {
    // Set default theme
    this.setOverlayContainer(this.defaultTheme);
  }

  private get defaultTheme(): ThemeType {
    return (localStorage.getItem(KEY) || APP_CONFIG.defaultTheme) as ThemeType;
  };

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
    localStorage.setItem(KEY, theme);
    
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