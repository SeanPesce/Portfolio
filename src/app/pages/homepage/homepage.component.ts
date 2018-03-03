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

  public readonly AUTHOR = Globals.AUTHOR;
  public readonly ASSETS = Globals.ASSETS;

  public slides: ImageSlide[] = Globals.PROFILE_PICS;

  constructor() { }

  ngOnInit() {
  }

}
