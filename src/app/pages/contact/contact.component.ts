// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';
import { SocialMedia } from './../../classes/social-media-profile';

@Component({
  selector: 'app-page-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactPageComponent implements OnInit {

  public readonly profiles: SocialMedia[] = Globals.SOCIAL_MEDIA;

  constructor() { }

  ngOnInit() {
  }

}
