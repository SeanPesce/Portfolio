// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.css']
})
export class NotImplementedComponent implements OnInit {

  public static readonly DEFAULT_MARGIN  = 5; // Default margin  (in pixels)
  public static readonly DEFAULT_PADDING = 5; // Default padding (in pixels)

  @Input() public width  = 200; // Width (in pixels)
  @Input() public height = 100; // Height (in pixels)

  // Padding (in pixels)
  @Input() public paddingTop    = NotImplementedComponent.DEFAULT_PADDING;
  @Input() public paddingRight  = NotImplementedComponent.DEFAULT_PADDING;
  @Input() public paddingBottom = NotImplementedComponent.DEFAULT_PADDING;
  @Input() public paddingLeft   = NotImplementedComponent.DEFAULT_PADDING;

  // Margin (in pixels)
  @Input() public marginTop    = NotImplementedComponent.DEFAULT_MARGIN;
  @Input() public marginRight  = NotImplementedComponent.DEFAULT_MARGIN;
  @Input() public marginBottom = NotImplementedComponent.DEFAULT_MARGIN;
  @Input() public marginLeft   = NotImplementedComponent.DEFAULT_MARGIN;


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

  get DEFAULT_MARGIN(): number {
    return NotImplementedComponent.DEFAULT_MARGIN;
  }

  get DEFAULT_PADDING(): number {
    return NotImplementedComponent.DEFAULT_PADDING;
  }

}
