// Author: Sean Pesce
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotImplementedDialogComponent } from './not-implemented-dialog.component';

describe('NotImplementedDialogComponent', () => {
  let component: NotImplementedDialogComponent;
  let fixture: ComponentFixture<NotImplementedDialogComponent>;

  beforeEach(waitForAsync(() => {
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
