// Author: Sean Pesce
import { Skill } from './skill';

export class LanguageSkill extends Skill {

  constructor(name: string, description: string, proficient: boolean, start: number, logo: string) {
    super(name, description, proficient, start, logo);
  }
}
