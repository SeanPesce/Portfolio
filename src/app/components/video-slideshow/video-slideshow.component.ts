// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../classes/video';

@Component({
  selector: 'app-video-slideshow',
  templateUrl: './video-slideshow.component.html',
  styleUrls: ['./video-slideshow.component.css']
})
export class VideoSlideshowComponent implements OnInit {

  @Input() public width  = 560; // Pixels
  @Input() public height = 315; // Pixels
  @Input() public containerWidth  = 560; // Pixels
  @Input() public containerHeight = 315; // Pixels
  @Input() public vidPaddingTop = 0; // Pixels
  @Input() public videos: Video[] = [];
  @Input() public backgroundColor = 'transparent';
  @Input() public borderWidth = 0;
  @Input() public borderColor = 'transparent';
  @Input() public forceShowButtons = false;
  @Input() public useBottomButtons = false;

  public index = 0;
  public hover = false;
  public hoverButtons = false;
  public hoverVideo = false;

  private swipeCoord?: [number, number];
  private swipeTime?:  number;
  private swipeVideoCoord?: [number, number];
  private swipeVideoTime?:  number;

  constructor() { }

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
        this.nextVideo();
      } else {
        this.previousVideo();
      }
    }
  }

  public swipeVideoStart(event: TouchEvent): void {
    const coord: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
    const time = new Date().getTime();
    this.swipeVideoCoord = coord;
    this.swipeVideoTime = time;
    event.stopPropagation();
  }

  public swipeVideoEnd(event: TouchEvent): void {
    const coord: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
    const time = new Date().getTime();
    const direction = [coord[0] - this.swipeVideoCoord[0], coord[1] - this.swipeVideoCoord[1]];
    const duration = time - this.swipeVideoTime;

    if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
      if (direction[0] < 0) {
        this.nextVideo();
      } else {
        this.previousVideo();
      }
    }
    event.stopPropagation();
  }

  public nextVideo(): void {
    if (this.index >= (this.videos.length - 1) || this.index < 0) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  public previousVideo(): void {
    if (this.index <= 0 || this.index >= this.videos.length) {
      this.index = this.videos.length - 1;
    } else {
      this.index--;
    }
  }

  public isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  public onMouseEnter(): void {
    this.hover = true;
  }

  public onMouseLeave(): void {
    this.hover = false;
  }

  public onMouseEnterButtons(): void {
    this.hoverButtons = true;
  }

  public onMouseLeaveButtons(): void {
    this.hoverButtons = false;
  }

  public onMouseEnterVideo(): void {
    this.hoverVideo = true;
  }

  public onMouseLeaveVideo(): void {
    this.hoverVideo = false;
  }

}
