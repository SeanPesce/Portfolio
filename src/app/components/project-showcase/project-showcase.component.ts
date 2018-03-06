// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatDialog } from '@angular/material';
import { NotImplementedDialogComponent } from './../dialogs/not-implemented-dialog/not-implemented-dialog.component';
import { FORMATS } from './../../enums/project-format';
import { PLATFORMS } from './../../enums/project-platform';
import { Project } from '../../classes/project';

export enum ProjectShowcaseSection {
  OVERVIEW = 0,
  MEDIA = 1,
  TOOLS = 2,
  TEAM = 3
}

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {

  @Input() public project: Project;
  @Input() public minWidth = 400;
  @Input() public maxWidth = 1000;
  @Input() public minHeight = 200;
  @Input() public showOptionsBt = false;
  @Input() public btIconOptions = 'more_vert';

  public sectionIndex = ProjectShowcaseSection.OVERVIEW;

  private _cardClass = 'bg-color-white';

  constructor(public notImplDialog: MatDialog) { }

  ngOnInit() {
  }

  openNotImplDialog(): void {
    const dialogRef = this.notImplDialog.open(NotImplementedDialogComponent, {
      width: '350px',
      data: {}
    });
  }

  public onTabChange(event: MatTabChangeEvent): void {
    // switch (event.index) {
    //   case ProjectShowcaseSection.OVERVIEW:
    //     break;
    //   case ProjectShowcaseSection.MEDIA:
    //     break;
    //   case ProjectShowcaseSection.TOOLS:
    //     break;
    //   case ProjectShowcaseSection.TEAM:
    //     break;
    //   default:
    //     break;
    // }
    this.sectionIndex = event.index;
  }

  get PLATFORMS(): string[] {
    return PLATFORMS;
  }

  get FORMATS(): string[] {
    return FORMATS;
  }
}
