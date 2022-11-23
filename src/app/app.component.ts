import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PipThemesService, Theme } from 'pip-webui2-themes';

import { ExmapleListItem } from './examples-list/shared/ExampleListItem';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public listIndex = 0;
    public themes: Theme[];
    public theme: Theme;
    public activeMediaQuery: boolean;
    public mode: string;
    public app = 'Buttons';
    public url: string;

    public themesLocalNames: any = {
        'candy-theme': 'Candy',
        'unicorn-dark-theme': 'Unicorn Dark',
        'pip-blue-theme': 'Blue',
        'pip-grey-theme': 'Grey',
        'pip-pink-theme': 'Pink',
        'pip-green-theme': 'Green',
        'pip-navy-theme': 'Navy',
        'pip-amber-theme': 'Amber',
        'pip-orange-theme': 'Orange',
        'pip-dark-theme': 'Dark',
        'pip-black-theme': 'Black',
        'bootbarn-warm-theme': 'Bootbarn Warm',
        'bootbarn-cool-theme': 'Bootbarn Cool',
        'bootbarn-mono-theme': 'Bootbarn Mono',
        'mst-black-theme': 'MST Black',
        'mst-black-dark-theme': 'MST Black Dark',
        'mst-mono-theme': 'MST Mono',
        'mst-orange-theme': 'MST Orange',
        'mst-orange-dark-theme': 'MST Orange Dark',
        'mst-elegant-theme': 'MST Elegant'
    };

    public list: ExmapleListItem[] = [
        {
            name: 'Drilldown list',
            id: 'drilldown_list',
            route: 'drilldown_list'
        },
        {
            name: 'Action list',
            id: 'action_list',
            route: 'action_list'
        },
        {
            name: 'Toggle buttons',
            id: 'toggle_buttons',
            route: 'toggle_buttons'
        },
        {
            name: 'Fab speed dial',
            id: 'fab_speed_dial',
            route: 'fab_speed_dial'
        }
    ];
    @ViewChild('sidenav') sidenav: MatSidenav;

    public constructor(
        private service: PipThemesService,
        private router: Router,
        private location: Location,
        public media: MediaObserver
    ) {
        this.themes = this.service.themes;
        this.theme = this.service.selectedTheme;

        this.media.asObservable().subscribe((change: any) => {
            this.activeMediaQuery = change && change.mqAlias === 'xs' ? true : false;
            this.mode = change && change.mqAlias === 'xs' ? null : 'side';
        });
    }

    public ngOnInit() {
        this.listIndex = Math.max(0, this.list.findIndex((item) => {
            return '/' + item.route === this.location.path();
        }));
    }

    public onListItemIndexChanged(index: number) {
        this.listIndex = index;
        this.sidenav.close();
    }

    public changeTheme(theme) {
        this.theme = theme;
        this.service.selectedTheme = theme;
    }
}
