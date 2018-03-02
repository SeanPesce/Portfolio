// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { SocialMedia } from './../../classes/social-media-profile';

@Component({
  selector: 'app-page-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactPageComponent implements OnInit {

  public readonly profiles: SocialMedia[] = Globals.SOCIAL_MEDIA;

  private _showSocialMedia = true;

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent): void {
    if (event.index === 0) {
      this.showSocialMedia();
    } else {
      this.hideSocialMedia();
    }
  }

  showSocialMedia() {
    this._showSocialMedia = true;
  }

  hideSocialMedia() {
    this._showSocialMedia = false;
  }

}
