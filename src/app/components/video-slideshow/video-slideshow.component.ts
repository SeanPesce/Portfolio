// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Video } from '../../classes/video';
import { VideoComponent } from '../../components/video/video.component';

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

  @ViewChild('childVidComponent') public videoComponent: VideoComponent;

  public index = 0;
  public hover = false;
  public hoverButtons = false;
  public hoverVideo   = false;

  private swipeCoord?: [number, number];
  private swipeTime?:  number;
  private swipeVideoCoord?: [number, number];
  private swipeVideoTime?:  number;

  constructor() { }

  ngOnInit() {
  }

  public pausePlayBack(): void {
    if (this.videoComponent) {
      this.videoComponent.pausePlayBack();
    }
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

  // Sets flag indicating that mouse cursor is hovering over the VideoComponent child element
  public setMouseEnterVidComponent(event: MouseEvent): void {
    if (this.videoComponent) {
      this.videoComponent.onMouseEnterParent(event);
    }
  }

  // Sets flag indicating that mouse cursor is no longer hovering over the VideoComponent child element
  public setMouseLeaveVidComponent(event: MouseEvent): void {
    if (this.videoComponent) {
      this.videoComponent.onMouseLeaveParent(event);
    }
  }

  public onMouseEnter(event: MouseEvent): void {
    this.setMouseEnterVidComponent(event);
    this.hover = true;
  }

  public onMouseLeave(event: MouseEvent): void {
    this.setMouseLeaveVidComponent(event);
    this.hover = false;
  }

  public onMouseEnterButtons(event: MouseEvent): void {
    this.setMouseEnterVidComponent(event);
    this.hoverButtons = true;
  }

  public onMouseLeaveButtons(event: MouseEvent): void {
    this.setMouseLeaveVidComponent(event);
    this.hoverButtons = false;
  }

  public onMouseEnterVideo(event: MouseEvent): void {
    this.setMouseEnterVidComponent(event);
    this.hoverVideo = true;
  }

  public onMouseLeaveVideo(event: MouseEvent): void {
    this.setMouseLeaveVidComponent(event);
    this.hoverVideo = false;
  }

}
