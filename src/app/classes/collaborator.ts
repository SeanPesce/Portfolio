// Author: Sean Pesce

export class Collaborator {

  public name = '';
  public username = '';
  public website = '';
  public github = '';

  constructor(name: string, username: string, website: string, github: string) {
    if (name != null) {
      this.name = name;
    }
    if (username != null) {
      this.username = username;
    }
    if (website != null) {
      this.website = website;
    }
    if (github != null) {
      this.github = github;
    }
  }
}
