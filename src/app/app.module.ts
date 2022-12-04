import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { ActionListExampleModule } from './action-list-example/action-list-example.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrilldownListExampleModule } from './drilldown-list-example/drilldown-list-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { FabSpeedDialExampleModule } from './fab-speed-dial-example/fab-speed-dial-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';
import { TranslocoRootModule } from './transloco-root.module';

export const CustomBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS],
  multi: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    PipThemesModule.forRoot({
      themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
    }),
    AppRoutingModule,
    ActionListExampleModule,
    ExamplesListModule,
    DrilldownListExampleModule,
    FabSpeedDialExampleModule,
    ToggleButtonsExampleModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
