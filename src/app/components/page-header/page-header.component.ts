// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() public title = '';

  constructor() { }

  ngOnInit() {
  }

  get MOBILE_WIDTH_CUTOFF(): number {
    return Globals.MOBILE_WIDTH_CUTOFF;
  }

  get windowWidth(): number {
    return window.innerWidth;
  }

}
