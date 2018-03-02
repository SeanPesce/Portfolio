// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public readonly ASSETS = Globals.ASSETS;

  constructor() { }

  ngOnInit() {
  }

}
