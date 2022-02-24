import { Component, OnInit } from '@angular/core';
import { LogoutWindowComponent } from '../../dialogs/logout-window/logout-window.dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxConfirmationService } from 'ngx-autohide';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['../../css/settings.component.scss']
})
export class SettingsTabComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public logOutDialog: MatDialog,
    private confirmationService: NgxConfirmationService
  ) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.logOutDialog.open(LogoutWindowComponent);

    // // Open confirmation dialog
    // const confirmation = this.confirmationService.open({
    //   title: 'Log out',
    //   icon: {
    //     name: 'information',
    //     color: "primary"
    //   },
    //   message: 'Are you sure that you want to log out?',
    //   actions: {
    //     confirm: {
    //       label: 'Yes',
    //       color: 'primary'
    //     },
    //     cancel: {
    //       label: 'No'
    //     }
    //   },
    //   disableClose: false
    // });

    // // logout after confirmed
    // confirmation.afterClosed().subscribe((result) => {
    //   if (result === 'confirmed') {
    //     this.authService.logout();
    //     location.reload();
    //   }
    // })
  }
}
