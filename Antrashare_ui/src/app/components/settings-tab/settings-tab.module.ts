import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

import { SettingsTabComponent } from "./settings-tab.component";
import { SettingsThemeComponent } from "./settings-theme/settings-theme.component";

const routes: Routes = [
  { path: '', component: SettingsTabComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    SettingsTabComponent,
    SettingsThemeComponent
  ]
})
export class SettingsTabModule { }