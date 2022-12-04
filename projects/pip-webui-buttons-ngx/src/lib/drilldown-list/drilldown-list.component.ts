import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-drilldown-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./drilldown-list.component.scss'],
})
export class PipDrilldownListComponent {
  @HostBinding('class.pip-drilldown-list') klass = true;
}
