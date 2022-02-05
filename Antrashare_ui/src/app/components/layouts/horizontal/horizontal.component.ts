import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { TimeoutComponent } from 'src/app/dialogs/timeout/timeout.dialog.component';
import { TABS } from 'src/app/models/layouts.model';
import { IdleService } from 'src/app/services/idle.service';

@Component({
  selector: 'layout-horizontal',
  templateUrl: './horizontal.component.html',
  providers: [IdleService],
})
export class HorizontalLayoutComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions
  private unsubscribeAll: Subject<any> = new Subject<any>();

  // subscribe handset for checking the size of the screen
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    takeUntil(this.unsubscribeAll),
    shareReplay()
  );

  tabs = TABS;

  private warningDialogRef!: MatDialogRef<TimeoutComponent>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private idleService: IdleService,
    private dialog: MatDialog,
    private nz: NgZone,
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
    // this.idleService.stop();
    this.idle();
  }

  idle() {
    this.idleService.onIdleStart.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((value: any) => {
      // Use ngzone to fix the display abnormal dialog
      this.nz.run(() => {
        this.openTimeoutDialog(value);
      });
    });

    this.idleService.onTimeoutWarning.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(value => {
      if (this.warningDialogRef && this.warningDialogRef.componentInstance) {
        this.warningDialogRef.componentInstance.data = { time: value };
        console.log(value);
      }
    })

    this.idleService.watch();
  }

  openTimeoutDialog(warningTime: number) {
    this.warningDialogRef = this.dialog.open(TimeoutComponent, {
      width: '320px',
      height: '400px',
      disableClose: true,
      data: { time: warningTime }
    });

    this.warningDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.idleService.watch();
      } else {
        this.idleService.stop();
        this.router.navigate(['login']);
      }
    });
  }

}