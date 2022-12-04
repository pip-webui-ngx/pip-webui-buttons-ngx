import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionListExampleModule } from './action-list-example/action-list-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { DrilldownListExampleModule } from './drilldown-list-example/drilldown-list-example.module';
import { FabSpeedDialExampleModule } from './fab-speed-dial-example/fab-speed-dial-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,

        PipThemesModule.forRoot(),

        AppRoutingModule,
        ActionListExampleModule,
        ExamplesListModule,
        DrilldownListExampleModule,
        FabSpeedDialExampleModule,
        ToggleButtonsExampleModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
