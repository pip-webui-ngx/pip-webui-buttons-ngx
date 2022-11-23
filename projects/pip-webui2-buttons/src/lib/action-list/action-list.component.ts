import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pip-action-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./action-list.component.scss']
})
export class PipActionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
