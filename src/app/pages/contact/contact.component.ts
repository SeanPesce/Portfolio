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

  public showSocial = true;

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
    this.showSocial = true;
  }

  hideSocialMedia() {
    this.showSocial = false;
  }

}
