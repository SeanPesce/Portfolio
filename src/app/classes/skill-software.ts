// Author: Sean Pesce
import { Skill } from './skill';

export class SoftwareSkill extends Skill {

  public url = '';

  constructor(name: string, description: string, proficient: boolean, start: number, logo: string, url: string) {
    super(name, description, proficient, start, logo);
    if (url != null) {
      this.url = url;
    }
  }
}
