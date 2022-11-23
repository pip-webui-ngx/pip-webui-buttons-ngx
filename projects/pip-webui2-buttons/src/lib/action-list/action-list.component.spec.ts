import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipActionListComponent } from './action-list.component';

describe('PipActionListComponent', () => {
  let component: PipActionListComponent;
  let fixture: ComponentFixture<PipActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
