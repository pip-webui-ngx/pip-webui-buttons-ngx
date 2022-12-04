import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipActionListModule } from 'pip-webui-buttons-ngx';

import { ActionListExampleComponent } from './action-list-example.component';

describe('ActionListExampleComponent', () => {
  let component: ActionListExampleComponent;
  let fixture: ComponentFixture<ActionListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionListExampleComponent],
      imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule, PipActionListModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
