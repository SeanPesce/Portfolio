// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { JobPosition } from './../../../classes/job-position';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() public employer = '';
  @Input() public url = '';
  @Input() public logo = '';
  @Input() public icon = 'business';
  @Input() public start = '';
  @Input() public end = '';
  @Input() public ariaLabel = this.employer;
  @Input() public target = '_blank';

  @Input() public positions: JobPosition[] = [];

  constructor() { }

  ngOnInit() {
  }

}
