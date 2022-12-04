import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipDrilldownListComponent } from './drilldown-list.component';

describe('PipDrilldownListComponent', () => {
  let component: PipDrilldownListComponent;
  let fixture: ComponentFixture<PipDrilldownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipDrilldownListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipDrilldownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
