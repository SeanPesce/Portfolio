// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit } from '@angular/core';
import { ImageSlide } from './../../classes/image-slide';
import { MatDialog } from '@angular/material';
import { ImageExpandDialogComponent } from './../dialogs/image-expand-dialog/image-expand-dialog.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  public static readonly ASSETS = Globals.ASSETS;

  @Input() public width = 200;
  @Input() public slides: ImageSlide[] = [];
  @Input() public backgroundColor = 'transparent';
  @Input() public borderWidth = 0;
  @Input() public borderColor = 'transparent';
  @Input() public useAssetsPath = true;
  @Input() public forceShowButtons = false;
  @Input() public usePercent = false; // If false, use pixels for measurement
  @Input() public forceWidth = false;

  public index = 0;
  public hover = false;
  public hoverBottom = false;
  public hoverLeft = false;
  public hoverRight = false;
  public hoverCenter = false;

  private swipeCoord?: [number, number];
  private swipeTime?:  number;

  constructor(public expandDialog: MatDialog) { }

  ngOnInit() {
  }

  public swipeStart(event: TouchEvent): void {
    const coord: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
    const time = new Date().getTime();
    this.swipeCoord = coord;
    this.swipeTime = time;
  }

  public swipeEnd(event: TouchEvent): void {
    // Source: https://stackoverflow.com/a/44511007/7891239
    const coord: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
    const time = new Date().getTime();
    const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
    const duration = time - this.swipeTime;

    if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
      if (direction[0] < 0) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    }
  }

  public isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
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

  public nextSlide(): void {
    if (this.index >= (this.slides.length - 1) || this.index < 0) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  public previousSlide(): void {
    if (this.index <= 0 || this.index >= this.slides.length) {
      this.index = this.slides.length - 1;
    } else {
      this.index--;
    }
  }

  public expand(): void {
    const dialogRef = this.expandDialog.open(ImageExpandDialogComponent, {
      data: {
        src: this.slides[this.index].src,
        title: this.slides[this.index].title,
        useAssetsPath: this.useAssetsPath
      }
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

  public onMouseEnter(): void {
    this.hover = true;
  }

  public onMouseLeave(): void {
    this.hover = false;
  }

  public onMouseEnterBottom(): void {
    this.hoverBottom = true;
  }

  public onMouseLeaveBottom(): void {
    this.hoverBottom = false;
  }

  public imagePath(): string {
    return this.useAssetsPath ? (SlideshowComponent.ASSETS + this.src()) : this.src();
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

  get ASSETS(): string {
    return SlideshowComponent.ASSETS;
  }

}
