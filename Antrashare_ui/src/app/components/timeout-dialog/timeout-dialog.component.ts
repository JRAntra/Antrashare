import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Router} from '@angular/router'

@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {
  public message: any
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private router: Router,
    private dialogRef: MatDialogRef<TimeoutDialogComponent>,
  ) { 
    this.message = data
  }

  ngOnInit(): void {
    console.log("timeout!")
  }

 
  onCancel(): void {
    this.dialogRef.close('canceled')
    this.router.navigate(['/login'])
  }
  onConfirmed(): void {
    this.dialogRef.close('confirmed')
  }
  

}
