// Author: Sean Pesce
import { Skill } from './skill';

export class UtilitySkill extends Skill {

  public languages: string[] = [];
  public url = '';

  constructor(name: string, description: string, proficient: boolean, start: number, logo: string, languages: string[], url: string) {
    super(name, description, proficient, start, logo);
    if (languages != null) {
      this.languages = languages;
    }
    if (url != null) {
      this.url = url;
    }
  }
}
