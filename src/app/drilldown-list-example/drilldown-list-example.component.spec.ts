import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipDrilldownListModule } from 'pip-webui2-buttons';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';

describe('DrilldownListExampleComponent', () => {
  let component: DrilldownListExampleComponent;
  let fixture: ComponentFixture<DrilldownListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrilldownListExampleComponent],
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,

        PipDrilldownListModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
