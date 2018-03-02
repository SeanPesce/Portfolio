// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationPageComponent implements OnInit {

  public readonly ASSETS = Globals.ASSETS;

  constructor() { }

  ngOnInit() {
  }

}
