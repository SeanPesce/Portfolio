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

  public static readonly languages: LanguageSkill[] = Globals.LANGUAGES;
  public static readonly utilities: UtilitySkill[] = Globals.UTILITIES;
  public static readonly softwares: SoftwareSkill[] = Globals.SOFTWARES;

  constructor() { }

  ngOnInit() {
  }

  isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get languages(): LanguageSkill[] {
    return SkillsPageComponent.languages;
  }

  get utilities(): UtilitySkill[] {
    return SkillsPageComponent.utilities;
  }

  get softwares(): SoftwareSkill[] {
    return SkillsPageComponent.softwares;
  }

}
