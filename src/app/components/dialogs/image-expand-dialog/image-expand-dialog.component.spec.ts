// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageExpandDialogComponent } from './image-expand-dialog.component';

describe('ImageExpandDialogComponent', () => {
  let component: ImageExpandDialogComponent;
  let fixture: ComponentFixture<ImageExpandDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageExpandDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageExpandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
