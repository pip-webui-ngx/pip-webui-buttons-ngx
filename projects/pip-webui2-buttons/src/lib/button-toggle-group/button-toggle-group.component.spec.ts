import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipButtonToggleGroupComponent } from './button-toggle-group.component';

describe('PipButtonToggleGroupComponent', () => {
  let component: PipButtonToggleGroupComponent;
  let fixture: ComponentFixture<PipButtonToggleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipButtonToggleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipButtonToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
