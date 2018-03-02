// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-plus-card',
  templateUrl: './google-plus-card.component.html',
  styleUrls: ['./google-plus-card.component.css']
})
export class GooglePlusCardComponent implements OnInit {

  @Input() public badge = true;
  @Input() public landscape = true;
  @Input() public darkTheme = false;
  @Input() public coverPhoto = true;
  @Input() public tagLine = false;
  @Input() public large = false;
  @Input() public small = false;
  @Input() public customName = '';
  @Input() public dynamicScript = false;

  constructor() { }

  ngOnInit() {
  }

}
