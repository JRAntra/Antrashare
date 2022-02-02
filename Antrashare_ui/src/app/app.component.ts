import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Router} from '@angular/router'
import { TimeoutDialogComponent } from './components/timeout-dialog/timeout-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  //this is a test text
  title = 'Antrashare_ui';
  dialogRef?: MatDialogRef<TimeoutDialogComponent>
  message: any

  constructor(
    private dialog: MatDialog,
    private router: Router

  ) {

  }

  ngOnInit(): void {

    setInterval(() => {
      if (this.dialogRef?.getState() != 0 && this.router.url != '/' && this.router.url != '/login') {
        this.openDialog()
      }
    }, 2000)
  }

  openDialog() {
    this.dialogRef = this.dialog.open(TimeoutDialogComponent, {
      width: '50%',
      height: '50%'
    })
  }

}
