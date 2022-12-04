import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PipButtonToggleGroupComponent } from './button-toggle-group.component';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [PipButtonToggleGroupComponent],
  exports: [PipButtonToggleGroupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipButtonToggleGroupModule {}
