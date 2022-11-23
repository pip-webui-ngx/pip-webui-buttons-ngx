import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipDrilldownListModule } from 'pip-webui2-buttons';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,

    PipDrilldownListModule
  ],
  declarations: [DrilldownListExampleComponent],
  exports: [DrilldownListExampleComponent]
})
export class DrilldownListExampleModule { }
