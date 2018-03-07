// Author: Sean Pesce
import * as Globals from './globals';
import { Component } from '@angular/core';
import { PRODUCTION_MODE } from './globals';
import { VERSION as NG_MAT_VERSION } from '@angular/material';
import { VERSION as NG_COMPILER_VERSION } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public static readonly title = Globals.AUTHOR;

  constructor() {
    if (!PRODUCTION_MODE) {
      console.log(`Angular:\n\tCompiler v${NG_COMPILER_VERSION.full}\n\tMaterial v${NG_MAT_VERSION.full}`);
    }
  }

  get windowWidth(): number {
    return window.innerWidth;
  }
}
