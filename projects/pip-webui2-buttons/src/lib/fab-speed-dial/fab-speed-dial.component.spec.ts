import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { PipFabSpeedDialComponent } from './fab-speed-dial.component';
import { PipFabSpeedDialModule } from './fab-speed-dial.module';

@Component({
  selector: 'pip-fab-speed-dial-test',
  template: `<pip-fab-speed-dial>
    <pip-fab-trigger [spin]="spin">
        <button mat-fab>
          <mat-icon>check</mat-icon>
        </button>
      </pip-fab-trigger>

      <pip-fab-actions>
        <button mat-mini-fab>
          <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab>
          <mat-icon>edit</mat-icon>
        </button>
        <button mat-mini-fab>
          <mat-icon>menu</mat-icon>
        </button>
      </pip-fab-actions>
  </pip-fab-speed-dial>`,
})
class PipFabSpeedDialWrapperComponent { }

describe('PipFabSpeedDialComponent', () => {
  let component: PipFabSpeedDialComponent;
  let fixture: ComponentFixture<PipFabSpeedDialWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipFabSpeedDialWrapperComponent],
      imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,

        PipFabSpeedDialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipFabSpeedDialWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
