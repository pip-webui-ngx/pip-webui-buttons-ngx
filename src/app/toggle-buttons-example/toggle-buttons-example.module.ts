import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PipButtonToggleGroupModule } from 'pip-webui2-buttons';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipButtonToggleGroupModule
  ],
  declarations: [ToggleButtonsExampleComponent]
})
export class ToggleButtonsExampleModule { }
