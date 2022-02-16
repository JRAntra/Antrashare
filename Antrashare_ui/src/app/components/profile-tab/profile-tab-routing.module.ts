import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileTabComponent } from "./profile-tab.component";

const routes: Routes = [
  {
    path: '', component: ProfileTabComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class profileTabRoutingModule { }