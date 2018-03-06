// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';
import { ImageSlide } from './../../classes/image-slide';

@Component({
  selector: 'app-page-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  public static readonly AUTHOR = Globals.AUTHOR;
  public static readonly ASSETS = Globals.ASSETS;

  public slides: ImageSlide[] = Globals.PROFILE_PICS;

  constructor() { }

  ngOnInit() {
  }

  isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get ASSETS(): string {
    return HomePageComponent.ASSETS;
  }

  get AUTHOR(): string {
    return HomePageComponent.AUTHOR;
  }

  get windowWidth(): number {
    return window.innerWidth;
  }

}
