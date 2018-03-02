// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from './../../../classes/social-media-profile';

@Component({
  selector: 'app-social-media-card',
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.css']
})
export class SocialMediaCardComponent implements OnInit {

  @Input() public profile: SocialMedia;
  @Input() public ariaLabelCard = '';
  @Input() public ariaLabelLogo = '';
  @Input() public target = '_blank';
  @Input() public icon = 'account_circle';
  @Input() public showUsername = false;
  @Input() public summary = '';
  @Input() public minWidth = 0;
  @Input() public maxWidth = 300;

  private _cardClass = 'bg-color-white';

  constructor() { }

  ngOnInit() {
  }

  public displayUsername(): boolean {
    return (this.showUsername || this.profile.url.length === 0) && this.profile.username.length > 0;
  }

  public imageHeight(): number {
    return this.displayUsername() ? 50 : 30;
  }

  public onMouseEnter(): void {
    this._cardClass = 'bg-color-light';
  }

  public onMouseLeave(): void {
    this._cardClass = 'bg-color-white';
  }

}
