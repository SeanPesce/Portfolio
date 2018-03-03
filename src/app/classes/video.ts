// Author: Sean Pesce

export class Video {

  public title = '';
  public description = '';
  public url = '';

  constructor(title: string, description: string, url: string) {
    if (title != null) {
      this.title = title;
    }
    if (description != null) {
      this.description = description;
    }
    if (url != null) {
      this.url = url;
    }
  }
}
