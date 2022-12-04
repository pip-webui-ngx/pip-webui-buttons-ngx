import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipFabSpeedDialComponent } from './fab-speed-dial.component';
import { PipFabSpeedDialTriggerComponent } from './fab-speed-dial-trigger.component';

describe('PipFabSpeedDialTriggerComponent', () => {
  let component: PipFabSpeedDialTriggerComponent;
  let fixture: ComponentFixture<PipFabSpeedDialTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipFabSpeedDialTriggerComponent],
      providers: [
        {
          provide: PipFabSpeedDialComponent,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipFabSpeedDialTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
