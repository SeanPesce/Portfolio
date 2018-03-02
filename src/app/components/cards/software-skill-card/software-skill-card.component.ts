// Author: Sean Pesce
import { Component, Input, OnInit } from '@angular/core';
import { SoftwareSkill } from './../../../classes/skill-software';

@Component({
  selector: 'app-software-skill-card',
  templateUrl: './software-skill-card.component.html',
  styleUrls: ['./software-skill-card.component.css']
})
export class SoftwareSkillCardComponent implements OnInit {

  @Input() public software: SoftwareSkill;
  @Input() public ariaLabelCard = '';
  @Input() public ariaLabelLogo = '';
  @Input() public showIcon = false;
  @Input() public target = '_blank';
  @Input() public icon = 'build';
  @Input() public btIconOptions = 'more_vert';
  @Input() public btIconLeft = 'info_outline';
  @Input() public btIconRight = 'folder_open';
  @Input() public minWidth = 0;
  @Input() public maxWidth = 300;
  @Input() public showOptions = true;
  @Input() public showButtons = false;
  @Input() public showYears = false;
  @Input() public showDescription = true;

  private _cardClass = 'bg-color-white';

  constructor() { }

  ngOnInit() {
  }

  public yearsExperience(): number {
    const years = (new Date()).getFullYear() - this.software.start;
    return (years >= 0) ? years : 0;
  }

  public onMouseEnter(): void {
    this._cardClass = 'bg-color-light';
  }

  public onMouseLeave(): void {
    this._cardClass = 'bg-color-white';
  }
}
