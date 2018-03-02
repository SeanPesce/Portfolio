// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotImplementedDialogComponent } from './../../dialogs/not-implemented-dialog/not-implemented-dialog.component';
import { LanguageSkill } from './../../../classes/skill-language';

@Component({
  selector: 'app-language-skill-card',
  templateUrl: './language-skill-card.component.html',
  styleUrls: ['./language-skill-card.component.css']
})
export class LanguageSkillCardComponent implements OnInit {

  @Input() public language: LanguageSkill;
  @Input() public ariaLabelCard = '';
  @Input() public ariaLabelLogo = '';
  @Input() public showIcon = false;
  @Input() public target = '_blank';
  @Input() public icon = 'code';
  @Input() public btIconOptions = 'more_vert';
  @Input() public btIconLeft = 'info_outline';
  @Input() public btIconRight = 'folder_open';
  @Input() public minWidth = 0;
  @Input() public maxWidth = 300;
  @Input() public showOptions = true;
  @Input() public showButtons = false;
  @Input() public showYearsInTopRight = false;

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

  public yearsExperience(): number {
    const years = (new Date()).getFullYear() - this.language.start;
    return (years >= 0) ? years : 0;
  }

  public onMouseEnter(): void {
    this._cardClass = 'bg-color-light';
  }

  public onMouseLeave(): void {
    this._cardClass = 'bg-color-white';
  }
}
