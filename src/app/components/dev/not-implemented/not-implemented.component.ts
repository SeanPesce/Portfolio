// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.css']
})
export class NotImplementedComponent implements OnInit {

  public readonly DEFAULT_MARGIN  = 5; // Default margin  (in pixels)
  public readonly DEFAULT_PADDING = 5; // Default padding (in pixels)

  @Input() public width  = 200; // Width (in pixels)
  @Input() public height = 100; // Height (in pixels)

  // Padding (in pixels)
  @Input() public paddingTop    = this.DEFAULT_PADDING;
  @Input() public paddingRight  = this.DEFAULT_PADDING;
  @Input() public paddingBottom = this.DEFAULT_PADDING;
  @Input() public paddingLeft   = this.DEFAULT_PADDING;

  // Margin (in pixels)
  @Input() public marginTop    = this.DEFAULT_MARGIN;
  @Input() public marginRight  = this.DEFAULT_MARGIN;
  @Input() public marginBottom = this.DEFAULT_MARGIN;
  @Input() public marginLeft   = this.DEFAULT_MARGIN;


  @Input() public borderRadius = 0; // Border thickness (in pixels)
  @Input() public textAlign = 'left';
  @Input() public text = 'This feature isn\'t finished yet, as the website\'s still under construction. Come back later!';
  @Input() public hoverText = 'Under construction';
  @Input() public lightText = false;

  @Input() public bgColor = 'transparent';
  @Input() public borderColor = 'transparent';

  constructor() { }

  ngOnInit() {
  }

}
