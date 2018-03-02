// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentPageComponent implements OnInit {

  public readonly ASSETS = Globals.ASSETS;

  constructor() { }

  ngOnInit() {
  }

}
