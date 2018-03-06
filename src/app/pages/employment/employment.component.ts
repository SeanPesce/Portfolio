// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentPageComponent implements OnInit {

  public static readonly ASSETS = Globals.ASSETS;

  constructor() { }

  ngOnInit() {
  }

  isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get ASSETS(): string {
    return EmploymentPageComponent.ASSETS;
  }

}
