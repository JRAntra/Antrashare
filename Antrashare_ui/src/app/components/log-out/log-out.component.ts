import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(public dialog: MatDialog) {

   }
   openDialog():void{
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
     
    });
   }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'log-out-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private router: Router
  ) {}
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick():void{
    this.dialogRef.close();
this.router.navigate(['/login']);
  }
}