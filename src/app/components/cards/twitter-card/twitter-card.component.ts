// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.css']
})
export class TwitterCardComponent implements OnInit {

  @Input() public followButton = true;
  @Input() public tweetButton = !this.followButton;
  @Input() public timeline = false;
  @Input() public large = true;

  constructor() { }

  ngOnInit() {
  }

}
