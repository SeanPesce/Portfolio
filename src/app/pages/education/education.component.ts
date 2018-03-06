// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationPageComponent implements OnInit {

  public static readonly ASSETS = Globals.ASSETS;

  constructor() { }

  ngOnInit() {
  }

  isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get ASSETS(): string {
    return EducationPageComponent.ASSETS;
  }

}
