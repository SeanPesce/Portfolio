// Author: Sean Pesce

export class Video {

  public title = '';
  public author = '';
  public description ? = '';
  public url = '';
  public embedUrl = '';

  constructor(title: string, author: string, description: string, url: string, embedUrl: string) {
    if (title != null) {
      this.title = title;
    }
    if (author != null) {
      this.author = author;
    }
    if (description != null) {
      this.description = description;
    }
    if (url != null) {
      this.url = url;
    }
    if (embedUrl != null) {
      this.embedUrl = embedUrl;
    }
  }
}
