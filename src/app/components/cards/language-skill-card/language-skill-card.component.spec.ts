// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSkillCardComponent } from './language-skill-card.component';

describe('LanguageSkillCardComponent', () => {
  let component: LanguageSkillCardComponent;
  let fixture: ComponentFixture<LanguageSkillCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSkillCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
