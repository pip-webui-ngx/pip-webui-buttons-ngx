import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PipButtonToggleGroupModule } from 'pip-webui2-buttons';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';

describe('ToggleButtonsExampleComponent', () => {
  let component: ToggleButtonsExampleComponent;
  let fixture: ComponentFixture<ToggleButtonsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleButtonsExampleComponent],
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,

        PipButtonToggleGroupModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
