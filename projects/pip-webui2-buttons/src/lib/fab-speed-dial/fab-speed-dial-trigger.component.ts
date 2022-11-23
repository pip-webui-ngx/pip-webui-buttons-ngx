import { Component, Input, Output, EventEmitter, ViewEncapsulation, AfterContentInit, ElementRef, Inject, forwardRef, ContentChildren, QueryList, ContentChild, HostBinding, HostListener, Renderer2 } from '@angular/core';

import { PipFabSpeedDialComponent } from './fab-speed-dial.component';

@Component({
  selector: 'pip-fab-trigger',
  template: `<ng-content select="[md-fab], [mat-fab]"></ng-content>`
})
export class PipFabSpeedDialTriggerComponent {

  /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
  @HostBinding('class.pip-spin')
  @Input() spin = false;

  constructor(
    @Inject(forwardRef(() => PipFabSpeedDialComponent)) private _parent: PipFabSpeedDialComponent
  ) { }

  @HostListener('click', ['$event'])
  _onClick(event: any) {
    if (!this._parent.fixed) {
      this._parent.toggle();
      event.stopPropagation();
    }
  }

}
