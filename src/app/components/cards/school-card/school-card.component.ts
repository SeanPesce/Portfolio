// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {

  @Input() public school = '';
  @Input() public degree = '';
  @Input() public url = '';
  @Input() public logo = '';
  @Input() public icon = 'school';
  @Input() public start = '';
  @Input() public end = '';
  @Input() public ariaLabel = this.school;
  @Input() public target = '_blank';
  @Input() public summary = '';

  @Input() public schoolLabel = false;
  @Input() public degreeLabel = false;

  constructor() { }

  ngOnInit() {
  }

}
