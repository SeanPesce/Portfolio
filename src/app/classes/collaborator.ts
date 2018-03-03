// Author: Sean Pesce

export class Collaborator {

  public name = '';
  public username = '';
  public website = '';
  public portfolio = ''; // GitHub, GitLab, BitBucket, etc

  constructor(name: string, username: string, website: string, portfolio: string) {
    if (name != null) {
      this.name = name;
    }
    if (username != null) {
      this.username = username;
    }
    if (website != null) {
      this.website = website;
    }
    if (portfolio != null) {
      this.portfolio = portfolio;
    }
  }
}
