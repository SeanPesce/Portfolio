// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSkillCardComponent } from './software-skill-card.component';

describe('SoftwareSkillCardComponent', () => {
  let component: SoftwareSkillCardComponent;
  let fixture: ComponentFixture<SoftwareSkillCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSkillCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
