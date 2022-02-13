import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';
import { ThemeType } from 'src/app/models/theme.model';

@Component({
  selector: 'app-settings-theme',
  templateUrl: './settings-theme.component.html',
  styleUrls: ['../../../css/settings.component.scss']
})
export class SettingsThemeComponent implements OnInit {
  readonly ThemeType = ThemeType;

  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
  }

  /**
   * Change activeTheme
   *
   * @param theme
   */
   changeActiveTheme(theme: ThemeType) {
    this.themesService.setActiveTheme(theme);
  }

}
