import { Component, Inject, OnInit,  HostListener } from '@angular/core';
import { fromEventPattern, Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Router} from '@angular/router'


@Component({
  selector: 'app-timeout-dialog',
  templateUrl: './timeout-dialog.component.html',
  styleUrls: ['./timeout-dialog.component.scss']
})
export class TimeoutDialogComponent implements OnInit {
  public message: any
  userActivity: any;
  userInactive: Subject<any> = new Subject();
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private router: Router,
    private dialogRef: MatDialogRef<TimeoutDialogComponent>,
  ) { 
    this.message = data
    this.setTimeout();
    this.userInactive.subscribe(() => this.onCancel());
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

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 10000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
  

}
