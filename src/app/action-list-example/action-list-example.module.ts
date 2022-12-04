import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipActionListModule } from 'pip-webui-buttons-ngx';

import { ActionListExampleComponent } from './action-list-example.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule, PipActionListModule],
  declarations: [ActionListExampleComponent],
})
export class ActionListExampleModule {}
