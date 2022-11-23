import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pip-button-toggle-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-toggle-group.component.scss']
})
export class PipButtonToggleGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
