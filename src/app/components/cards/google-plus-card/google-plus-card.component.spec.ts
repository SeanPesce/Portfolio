// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlusCardComponent } from './google-plus-card.component';

describe('GooglePlusCardComponent', () => {
  let component: GooglePlusCardComponent;
  let fixture: ComponentFixture<GooglePlusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
