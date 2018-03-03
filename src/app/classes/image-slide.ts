// Author: Sean Pesce

export class ImageSlide {
  public src = '';
  public title = '';
  public alt = '';
  public ariaLabel = '';

  constructor(src: string, title: string, alt: string, ariaLabel: string) {
    if (src != null) {
      this.src = src;
    }
    if (title != null) {
      this.title = title;
    }
    if (alt != null) {
      this.alt = alt;
    }
    if (ariaLabel != null) {
      this.ariaLabel = ariaLabel;
    }
  }
}
