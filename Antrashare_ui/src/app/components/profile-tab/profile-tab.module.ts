import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

import { profileTabRoutingModule } from "./profile-tab-routing.module";

import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileTabComponent } from "./profile-tab.component";

const profileComponents = [
  ProfileTabComponent,
  ProfileInfoComponent,
  ProfileFormComponent
];

@NgModule({
  imports: [
    profileTabRoutingModule,

    SharedModule
  ],
  declarations: [
    ...profileComponents
  ]
})
export class ProfileTabModule { }