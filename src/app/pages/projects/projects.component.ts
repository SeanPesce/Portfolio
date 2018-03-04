// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from './../../classes/project';


@Component({
  selector: 'app-page-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsPageComponent implements OnInit {

  @Input() public projects: Project[] = Globals.PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
