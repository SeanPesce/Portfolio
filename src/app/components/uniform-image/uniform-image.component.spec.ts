// Author: Sean Pesce
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UniformImageComponent } from './uniform-image.component';

describe('UniformImageComponent', () => {
  let component: UniformImageComponent;
  let fixture: ComponentFixture<UniformImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UniformImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
