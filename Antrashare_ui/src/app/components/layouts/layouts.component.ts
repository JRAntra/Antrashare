import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, shareReplay, takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { Layout } from 'src/app/models/layouts.model';
import { ThemeType } from 'src/app/models/theme.model';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['../../css/layouts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutsComponent extends BaseComponent implements OnInit {

  @HostBinding('class')
  activeThemeCssClass!: string;

  readonly Layout = Layout;
  layout!: Layout;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private themesService: ThemesService
  ) {
    super();
    // subscribe router events
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      shareReplay()
    ).subscribe(() => {
      this.updateLayout();
    })

    // subscribe theme event
    this.themesService.getActiveTheme().pipe(
      takeUntil(this.unsubscribeAll$),
      shareReplay()
    ).subscribe((value: ThemeType) => {
      this.activeThemeCssClass = value;
    });
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
