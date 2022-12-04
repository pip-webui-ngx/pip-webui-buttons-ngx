import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-button-toggle-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-toggle-group.component.scss'],
})
export class PipButtonToggleGroupComponent {
  @HostBinding('class.pip-button-toggle-group') klass = true;
}
