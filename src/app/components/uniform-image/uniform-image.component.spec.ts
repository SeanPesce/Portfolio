// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformImageComponent } from './uniform-image.component';

describe('UniformImageComponent', () => {
  let component: UniformImageComponent;
  let fixture: ComponentFixture<UniformImageComponent>;

  beforeEach(async(() => {
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
