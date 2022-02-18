import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component that needs to navigate around
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SettingsComponent } from '../components/settings/settings.component';

const routes: Routes = [
    // Default route: http://localhost:4200/adminPage
    { path: 'adminPage', component: AdminPageComponent },

    // Possible routes for admin module
    // { path: 'settings', component: AdminPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
