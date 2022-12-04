import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipDrilldownListComponent } from './drilldown-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PipDrilldownListComponent],
  exports: [PipDrilldownListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipDrilldownListModule {}
