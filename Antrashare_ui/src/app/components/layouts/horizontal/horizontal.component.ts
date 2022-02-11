import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { TimeoutComponent } from 'src/app/dialogs/timeout/timeout.dialog.component';
import { TABS } from 'src/app/models/layouts.model';
import { IdleService } from 'src/app/services/idle.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'layout-horizontal',
  templateUrl: './horizontal.component.html',
  providers: [IdleService],
})
export class HorizontalLayoutComponent extends BaseComponent implements OnInit {

  // subscribe handset for checking the size of the screen
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  tabs = TABS;

  private warningDialogRef!: MatDialogRef<TimeoutComponent>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private idleService: IdleService,
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
    this.idleService.onIdleStart.pipe(
      takeUntil(this.unsubscribeAll$)
    ).subscribe((value: any) => {
      this.openTimeoutDialog(value);
    });

    this.idleService.onTimeoutWarning.pipe(
      takeUntil(this.unsubscribeAll$)
    ).subscribe((value: any) => {
      if (this.warningDialogRef && this.warningDialogRef.componentInstance) {
        this.warningDialogRef.componentInstance.data = { time: value };

        if (value <= 0) {
          this.warningDialogRef.close();
        }
      }
    })

    this.watchIdle();
  }

  private watchIdle(): void {
    this.idleService.watch();
  }

  private openTimeoutDialog(warningTime: number): void {
    this.warningDialogRef = this.dialog.open(TimeoutComponent, {
      width: '320px',
      height: '330px',
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

  get userName(): string {
    return this.userService.userAccount.userName ?? '';
  }

}
