// Author: Sean Pesce
export class SocialMedia {
  public title = '';
  public url = '';
  public website = '';
  public icon = '';
  public logo = '';
  public username = '';
  public isPrivate = false;

  constructor(title: string, url: string, website: string, icon: string, logo: string, username: string, isPrivate: boolean) {
    if (title != null) {
      this.title = title;
    }
    if (url != null) {
      this.url = url;
    }
    if (website != null) {
      this.website = website;
    }
    if (icon != null) {
      this.icon = icon;
    }
    if (logo != null) {
      this.logo = logo;
    }
    if (username != null) {
      this.username = username;
    }
    this.isPrivate = isPrivate;
  }
}
