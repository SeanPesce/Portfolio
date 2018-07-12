// Author: Sean Pesce
import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { SafeHtmlPipe } from './../../pipes/safe-html/safe-html.pipe';
import { Video } from '../../classes/video';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [ SafeHtmlPipe ]
})
export class VideoComponent implements OnInit, OnChanges {

  @Input() public width  = 560; // Pixels
  @Input() public height = 315; // Pixels
  @Input() public video: Video = null; // If null, this.title/this.url/this.embedUrl are used
  @Input() public title = '';
  @Input() public url = '';
  @Input() public embedUrl = '';
  @Input() public preview = '';
  @Input() public displayTitle = true;

  @ViewChild('videoElement') public videoElementRef: ElementRef;

  private _playing = false;
  private _mouseHoverVideo  = false;
  private _mouseHoverParent = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.playing = false;
  }

  public log(msg: string): void {
    console.log(msg);
  }

  // Returns true if mouse cursor is hovering over the video element
  public getHoverStatus(): boolean {
    return this._mouseHoverVideo || this._mouseHoverParent;
  }

  // Returns true if title element should be displayed
  private getShowTitlePref(): boolean {
    if (this.video) {
      return (this.displayTitle && this.video.title && this.video.title.length > 0
        && !(this.video.embedUrl && this.video.embedUrl.toLowerCase().indexOf('youtube.com') >= 0));
    } else {
      return (this.displayTitle && this.title && this.title.length > 0
        && !(this.embedUrl && this.embedUrl.toLowerCase().indexOf('youtube.com') >= 0));
    }
  }

  // Returns true if title element should be displayed
  public showTitle(): boolean {
    return this.getShowTitlePref()
           && (this.getHoverStatus()
               || (!this.playing));
  }

  // Returns true if title text should be a hyperlink
  public useHyperlinkTitle(): boolean {
    if (this.video) {
      return (this.video.url.length + this.video.embedUrl.length) > 0;
    } else {
      return (this.url.length + this.embedUrl.length) > 0;
    }
  }

  // Returns the error message to be displayed if the user's browser doesn't support HTML5 video
  public notSupported(): string {
    return 'Your browser doesn\'t support HTML5 video.';
  }

  public getEmbedUrl(): string {
    if (this.video) {
      return ((this.video.embedUrl.length > 0) ? this.video.embedUrl : this.video.url ? this.video.url : '');
    } else {
      return ((this.embedUrl.length > 0) ? this.embedUrl : this.url ? this.url : '');
    }
  }

  public getVideoElement(): HTMLVideoElement {
    return this.videoElementRef ? this.videoElementRef.nativeElement : null;
  }

  public pausePlayBack(): void {
    this.playing = false;
    const vid: HTMLVideoElement = this.getVideoElement();
    if (vid) {
      vid.pause();
    }
  }

  public resumePlayBack(): void {
    const vid: HTMLVideoElement = this.getVideoElement();
    if (vid && vid.paused) {
      this.playing = true;
      vid.play();
    }
  }

  public updateMediaControls(): void {
    const vid: HTMLVideoElement = this.getVideoElement();
    if (vid) {
      if (this.showTitle() && !vid.webkitDisplayingFullscreen) {
        // Re-apply focus on video element to display media controls
        vid.blur();
        vid.focus();
      } else {
        // Remove focus to hide media controls
        vid.blur();
      }
    }
  }

  public onMouseEnterVideo(event: MouseEvent): void {
    this._mouseHoverVideo = true;
  }

  public onMouseLeaveVideo(event: MouseEvent): void {
    this._mouseHoverVideo = false;
  }

  public onMouseEnterParent(event: MouseEvent): void {
    this._mouseHoverParent = true;
  }

  public onMouseLeaveParent(event: MouseEvent): void {
    this._mouseHoverParent = false;
  }

  get playing(): boolean {
    return this._playing;
  }

  set playing(playing: boolean) {
    this._playing = playing;
  }

}
