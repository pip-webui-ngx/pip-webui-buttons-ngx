import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipFabSpeedDialModule } from 'pip-webui-buttons-ngx';

import { FabSpeedDialExampleComponent } from './fab-speed-dial-example.component';

describe('FabSpeedDialExampleComponent', () => {
  let component: FabSpeedDialExampleComponent;
  let fixture: ComponentFixture<FabSpeedDialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FabSpeedDialExampleComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatIconModule,
        MatButtonToggleModule,

        PipFabSpeedDialModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpeedDialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
