import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { combineLatest, map, Observable, tap } from 'rxjs';

import { ExmapleListItem } from './examples-list/shared/ExampleListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ctx$: Observable<{
    currentTheme: Theme;
    themes: Theme[];
  }>;
  public listIndex = 0;
  public themes: Theme[];
  public theme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public url: string;

  public list: ExmapleListItem[] = [
    {
      name: 'Drilldown list',
      id: 'drilldown_list',
      route: 'drilldown_list',
    },
    {
      name: 'Action list',
      id: 'action_list',
      route: 'action_list',
    },
    {
      name: 'Toggle buttons',
      id: 'toggle_buttons',
      route: 'toggle_buttons',
    },
    {
      name: 'Fab speed dial',
      id: 'fab_speed_dial',
      route: 'fab_speed_dial',
    },
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private location: Location,
    private pipThemes: PipThemesService,
    public media: MediaObserver,
    public translate: TranslocoService,
  ) {
    this.pipThemes.selectTheme(this.pipThemes.config.defaultThemeName);
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      themes: this.pipThemes.themes$.pipe(map((themes) => Array.from(themes.values()))),
    });

    this.media.asObservable().subscribe((change: any) => {
      this.activeMediaQuery = change && change.mqAlias === 'xs' ? true : false;
      this.mode = change && change.mqAlias === 'xs' ? null : 'side';
    });
  }

  public ngOnInit() {
    this.listIndex = Math.max(
      0,
      this.list.findIndex((item) => {
        return '/' + item.route === this.location.path();
      }),
    );
  }

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.close().then();
  }

  changeTheme(theme: Theme) {
    this.pipThemes.selectTheme(theme.name);
  }
}
