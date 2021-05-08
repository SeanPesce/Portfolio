// Author: Sean Pesce
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LanguageSkillCardComponent } from './language-skill-card.component';

describe('LanguageSkillCardComponent', () => {
  let component: LanguageSkillCardComponent;
  let fixture: ComponentFixture<LanguageSkillCardComponent>;

  beforeEach(waitForAsync(() => {
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
