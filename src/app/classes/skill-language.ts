// Author: Sean Pesce
import { Skill } from './skill';

export class LanguageSkill extends Skill {

  public logo = '';

  constructor(name: string, description: string, proficient: boolean, start: number, logo: string) {
    super(name, description, proficient, start);
    if (logo != null) {
      this.logo = logo;
    }
  }
}
