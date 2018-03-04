// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotImplementedDialogComponent } from './../dialogs/not-implemented-dialog/not-implemented-dialog.component';
import { Project } from '../../classes/project';


@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {

  @Input() public project: Project;
  @Input() public minWidth = 400;
  @Input() public maxWidth = 1000;
  @Input() public btIconOptions = 'more_vert';

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

  public onMouseEnter(): void {
    this._cardClass = 'bg-color-light';
  }

  public onMouseLeave(): void {
    this._cardClass = 'bg-color-white';
  }
}
