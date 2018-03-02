// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent implements OnInit {

  @Input() public title = '';
  @Input() public ariaLabel = this.title;
  @Input() public alt = this.title;
  @Input() public target = '_blank';
  @Input() public url = '';
  @Input() public img = '';

  constructor() { }

  ngOnInit() {
  }

}
