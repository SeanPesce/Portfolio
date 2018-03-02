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

  public profilePicIndex = 0;
  public profilePic = Globals.PROFILE_PICS[this.profilePicIndex];
  public hoverLeft  = false;
  public hoverRight = false;

  constructor() { }

  ngOnInit() {
  }

  public nextProfilePic(): void {
    if (this.profilePicIndex >= (Globals.PROFILE_PICS.length - 1) || this.profilePicIndex < 0) {
      this.profilePicIndex = 0;
    } else {
      this.profilePicIndex++;
    }
    this.profilePic = Globals.PROFILE_PICS[this.profilePicIndex];
  }

  public previousProfilePic(): void {
    if (this.profilePicIndex <= 0 || this.profilePicIndex >= Globals.PROFILE_PICS.length) {
      this.profilePicIndex = Globals.PROFILE_PICS.length - 1;
    } else {
      this.profilePicIndex--;
    }
    this.profilePic = Globals.PROFILE_PICS[this.profilePicIndex];
  }

  public onMouseEnterLeft(): void {
    this.hoverLeft = true;
  }

  public onMouseLeaveLeft(): void {
    this.hoverLeft = false;
  }

  public onMouseEnterRight(): void {
    this.hoverRight = true;
  }

  public onMouseLeaveRight(): void {
    this.hoverRight = false;
  }

}
