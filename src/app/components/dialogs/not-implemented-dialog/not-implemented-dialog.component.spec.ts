// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementedDialogComponent } from './not-implemented-dialog.component';

describe('NotImplementedDialogComponent', () => {
  let component: NotImplementedDialogComponent;
  let fixture: ComponentFixture<NotImplementedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImplementedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
