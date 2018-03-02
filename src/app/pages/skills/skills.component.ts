// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';
import { LanguageSkill } from './../../classes/skill-language';
import { UtilitySkill } from './../../classes/skill-utility';

@Component({
  selector: 'app-page-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsPageComponent implements OnInit {

  public readonly languages: LanguageSkill[] = Globals.LANGUAGES;
  public readonly utilities: UtilitySkill[] = Globals.UTILITIES;

  constructor() { }

  ngOnInit() {
  }

}
