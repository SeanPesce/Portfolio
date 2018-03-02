// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitySkillCardComponent } from './utility-skill-card.component';

describe('UtilitySkillCardComponent', () => {
  let component: UtilitySkillCardComponent;
  let fixture: ComponentFixture<UtilitySkillCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitySkillCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitySkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
