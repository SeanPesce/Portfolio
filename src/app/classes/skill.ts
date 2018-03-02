// Author: Sean Pesce
export class Skill {
  public name = '';
  public description = '';
  public proficient = true;
  public start: number = (new Date()).getFullYear() - 1; // Year I started developing this skill

  constructor(name: string, description: string, proficient: boolean, start: number) {
    if (name != null) {
      this.name = name;
    }
    if (description != null) {
      this.description = description;
    }
    this.proficient = proficient;
    if (start >= 2010) {
      this.start = start;
    }
  }
}
