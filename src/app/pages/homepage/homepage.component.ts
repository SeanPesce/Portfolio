// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  public readonly AUTHOR = Globals.AUTHOR;
  public readonly ASSETS = Globals.ASSETS;

  private _profilePicIndex = 0;

  public profilePic = Globals.PROFILE_PICS[this._profilePicIndex];

  constructor() { }

  ngOnInit() {
  }

  nextProfilePic() {
    if (this._profilePicIndex >= (Globals.PROFILE_PICS.length - 1) || this._profilePicIndex < 0) {
      this._profilePicIndex = 0;
    } else {
      this._profilePicIndex++;
    }
    this.profilePic = Globals.PROFILE_PICS[this._profilePicIndex];
  }

  previousProfilePic() {
    if (this._profilePicIndex <= 0 || this._profilePicIndex >= Globals.PROFILE_PICS.length) {
      this._profilePicIndex = Globals.PROFILE_PICS.length - 1;
    } else {
      this._profilePicIndex--;
    }
    this.profilePic = Globals.PROFILE_PICS[this._profilePicIndex];
  }

}
