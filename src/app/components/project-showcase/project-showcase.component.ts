// Author: Sean Pesce
import * as Globals from './../../globals';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NotImplementedDialogComponent } from './../dialogs/not-implemented-dialog/not-implemented-dialog.component';
import { FORMATS } from './../../enums/project-format';
import { PLATFORMS } from './../../enums/project-platform';
import { Project } from '../../classes/project';
import { VideoSlideshowComponent } from '../../components/video-slideshow/video-slideshow.component';

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

  @ViewChild('videosSlideshow') public videoSlideshowComponent: VideoSlideshowComponent;

  public sectionIndex = ProjectShowcaseSection.OVERVIEW;

  private _cardClass = 'bg-color-white';

  constructor(public notImplDialog: MatDialog) { }

  ngOnInit() {
  }

  public openNotImplDialog(): void {
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
    // Pause any currently-playing videos when switching tabs
    if (this.videoSlideshowComponent) {
      this.videoSlideshowComponent.pausePlayBack();
    }
    this.sectionIndex = event.index;
  }

  public isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get mediaWidth(): number {
    if (this.isMobile()) {
      return (window.innerWidth * 0.8);
    } else {
      return 315;
    }
  }

  get videoHeight(): number {
    return (this.mediaWidth * 0.5625);
  }

  get PLATFORMS(): string[] {
    return PLATFORMS;
  }

  get FORMATS(): string[] {
    return FORMATS;
  }
}
