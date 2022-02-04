import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, shareReplay, tap, takeUntil } from 'rxjs/operators';
import { Layout } from 'src/app/models/layouts.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['../../css/layouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutsComponent implements OnInit, OnDestroy {
  // declare an unsubscribeAll for all subscriptions
  private unsubscribeAll: Subject<any> = new Subject<any>();

  @HostBinding('class')
  activeThemeCssClass!: string;

  readonly Layout = Layout;
  layout!: Layout;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService
  ) {
    // subscribe router events
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntil(this.unsubscribeAll),
      shareReplay()
    ).subscribe(() => {
      this.updateLayout();
    })

    // subscribe theme event
    this.settingsService.getTheme().pipe(
      takeUntil(this.unsubscribeAll),
      shareReplay()
    ).subscribe((value) => {
      this.activeThemeCssClass = value;
    });
  }

  ngOnDestroy(): void {
    // unsubscrib for all subscriptions
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  ngOnInit(): void {
  }

  private updateLayout(): void {
    let route = this.activatedRoute;

    route.pathFromRoot.forEach((path) => {
      if (path.routeConfig && path.routeConfig.data && path.routeConfig.data['layout']) {
        this.layout = path.routeConfig.data['layout'];
      } else {
        this.layout = Layout.Horizontal;
      }
    });
  }

}
