import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipFabSpeedDialModule } from 'pip-webui-buttons-ngx';

import { FabSpeedDialExampleComponent } from './fab-speed-dial-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    MatButtonToggleModule,

    PipFabSpeedDialModule,
  ],
  declarations: [FabSpeedDialExampleComponent],
})
export class FabSpeedDialExampleModule {}
