import { OverlayContainer } from '@angular/cdk/overlay';
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

  constructor(public overlayContainer: OverlayContainer) { this.setOverlayContainer(this.initState.theme) }

  private setOverlayContainer(theme: string) {
    const overlayContainerClassList = this.overlayContainer.getContainerElement().classList;
    const needToRemoveClass = Array.from(overlayContainerClassList).filter((cl: string) => cl.includes('-theme'));
    if (needToRemoveClass.length) {
      overlayContainerClassList.remove(...needToRemoveClass);
    }
    overlayContainerClassList.add(theme);
  }

  setTheme(theme: string = this.initState.theme) {
    this.setOverlayContainer(theme);
    this.theme$.next(theme);
  }

  getTheme() {
    return this.theme$.asObservable();
  }
}

export const THEMES = { dark: 'dark-theme' }