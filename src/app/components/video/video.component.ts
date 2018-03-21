// Author: Sean Pesce
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SafeHtmlPipe } from './../../pipes/safe-html/safe-html.pipe';
import { Video } from '../../classes/video';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [ SafeHtmlPipe ]
})
export class VideoComponent implements OnInit, AfterViewInit {

  @Input() public width  = 560; // Pixels
  @Input() public height = 315; // Pixels
  @Input() public video: Video = null; // If null, this.title/this.url/this.embedUrl are used
  @Input() public title = '';
  @Input() public url = '';
  @Input() public embedUrl = '';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // Observable.interval(500)
    // .takeWhile(() => (true))
    // .subscribe(i => {
    //   const elements = document.getElementsByClassName('stm-ad-player');
    //   for (let j = 0; j < elements.length; j++) {
    //     elements[j].parentNode.removeChild(elements[j]);
    //     console.log('removed element');
    //   }
    // });
  }

}
