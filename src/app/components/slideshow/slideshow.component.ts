// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit } from '@angular/core';
import { ImageSlide } from './../../classes/image-slide';
import { MatDialog } from '@angular/material';
import { NotImplementedDialogComponent } from './../dialogs/not-implemented-dialog/not-implemented-dialog.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  public readonly ASSETS = Globals.ASSETS;

  @Input() public width = 200;
  @Input() public slides: ImageSlide[] = [];
  @Input() public useAssetsPath = true;
  @Input() public usePercent = false; // If false, use pixels for measurement

  public index = 0;
  public hoverLeft = false;
  public hoverRight = false;
  public hoverCenter = false;

  constructor(public expandDialog: MatDialog) { }

  ngOnInit() {
  }

  public src(): string {
    return this.slides[this.index].src;
  }

  public title(): string {
    return this.slides[this.index].title;
  }

  public alt(): string {
    return this.slides[this.index].alt;
  }

  public ariaLabel(): string {
    return this.slides[this.index].ariaLabel;
  }

  public nextProfilePic(): void {
    if (this.index >= (Globals.PROFILE_PICS.length - 1) || this.index < 0) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  public previousProfilePic(): void {
    if (this.index <= 0 || this.index >= Globals.PROFILE_PICS.length) {
      this.index = Globals.PROFILE_PICS.length - 1;
    } else {
      this.index--;
    }
  }

  public expand(): void {
    const dialogRef = this.expandDialog.open(NotImplementedDialogComponent, {
      width: '350px',
      data: {}
    });
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

  public onMouseEnterCenter(): void {
    this.hoverCenter = true;
  }

  public onMouseLeaveCenter(): void {
    this.hoverCenter = false;
  }

  public imagePath(): string {
    return this.useAssetsPath ? (this.ASSETS + this.src()) : this.src();
  }

  public widthString(): string {
    return this.width + this.units();
  }

  public widthStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws };
  }

  public heightStyle(): any {
    const ws: string = this.widthString();
    return { 'height': ws, 'maxHeight': ws, 'minHeight': ws };
  }

  public dimenStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws, 'height': ws, 'maxHeight': ws, 'minHeight': ws };
  }

  public imgStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws, 'height': 'auto',
    'paddingTop': 'fullHeight.offsetHeight > ' + this.width + ' ? (fullHeight.offsetHeight / 2) : 0' };
  }

  public units(): string {
    return this.usePercent ? '%' : 'px';
  }

}
