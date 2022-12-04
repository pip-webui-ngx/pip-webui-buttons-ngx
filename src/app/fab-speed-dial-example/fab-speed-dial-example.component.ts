import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fab-speed-dial-example',
  templateUrl: './fab-speed-dial-example.component.html',
})
export class FabSpeedDialExampleComponent implements OnInit {
  public open = false;
  public spin = false;
  public direction = 'up';
  public animationMode = 'fling';
  public fixed = false;

  constructor() {}

  ngOnInit() {}
}
