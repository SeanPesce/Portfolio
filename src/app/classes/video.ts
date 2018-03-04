// Author: Sean Pesce

export class Video {

  public title = '';
  public author = '';
  public description = '';
  public url = '';
  public embed = '';

  constructor(title: string, author: string, description: string, url: string, embed: string) {
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
    if (embed != null) {
      this.embed = embed;
    }
  }
}
