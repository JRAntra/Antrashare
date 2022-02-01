import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.dialog.component.html',
  styleUrls: ['../../css/dialog.component.scss']
})
export class TimeoutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TimeoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
