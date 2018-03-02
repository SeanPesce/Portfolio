// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';
import { LanguageSkill } from './../../classes/skill-language';
import { SoftwareSkill } from './../../classes/skill-software';
import { UtilitySkill } from './../../classes/skill-utility';

@Component({
  selector: 'app-page-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsPageComponent implements OnInit {

  public readonly languages: LanguageSkill[] = Globals.LANGUAGES;
  public readonly utilities: UtilitySkill[] = Globals.UTILITIES;
  public readonly softwares: SoftwareSkill[] = Globals.SOFTWARES;

  constructor() { }

  ngOnInit() {
  }

}
