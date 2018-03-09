// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { SafeHtmlPipe } from './../../pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css'],
  providers: [ SafeHtmlPipe ]
})
export class YoutubeVideoComponent implements OnInit {

  @Input() public width = 560;
  @Input() public height = 315;
  @Input() public videoId = '';  // https://www.youtube.com/watch?v=videoId
  @Input() public startTime = 0; // Seconds

  constructor() { }

  ngOnInit() {
  }

  public getEmbedUrl(): string {
    return (this.videoId.length > 0) ? ('https://www.youtube.com/embed/' + this.videoId + '?start=' + this.startTime) : '';
  }

}
