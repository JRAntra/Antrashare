import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss'],
})
export class TimeoutComponent implements OnInit {
  public userInfo: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<TimeoutComponent>
  ) {
    this.userInfo = data;
  }

  ngOnInit() {
    console.log(this.userInfo);
  }

  onConfirm(){
    this.dialogRef.close('confirmed')
  }

  onCancel(){
    this.dialogRef.close('canceled')
  }
}
