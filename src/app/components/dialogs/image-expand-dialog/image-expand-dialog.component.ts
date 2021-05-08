// Author: Sean Pesce
import * as Globals from './../../../globals';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-expand-dialog',
  templateUrl: './image-expand-dialog.component.html',
  styleUrls: ['./image-expand-dialog.component.css']
})
export class ImageExpandDialogComponent implements OnInit {

  public src = '';
  public title = '';
  public useAssetsPath = true;

  constructor(public dialogRef: MatDialogRef<ImageExpandDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {
    if (data != null) {
      if (data.src != null) {
        this.src = data.src;
      }
      if (data.title != null) {
        this.title = data.title;
      }
      if (data.useAssetsPath != null) {
        this.useAssetsPath = data.useAssetsPath;
      }
    }

  }

  ngOnInit() {
  }

  public isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  public imagePath(): string {
    return this.useAssetsPath ? (Globals.ASSETS + this.src) : this.src;
  }

  public maxWidth(): string {
    return (window.innerWidth * 0.7) + 'px';
  }

  public maxHeight(): string {
    return (window.innerHeight * 0.6) + 'px';
  }

}
