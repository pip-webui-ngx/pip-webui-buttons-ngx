import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-action-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./action-list.component.scss'],
})
export class PipActionListComponent {
  @HostBinding('class.pip-action-list') klass = true;
}
