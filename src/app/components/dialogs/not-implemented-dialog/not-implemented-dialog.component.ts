// Author: Sean Pesce
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-not-implemented-dialog',
  templateUrl: './not-implemented-dialog.component.html',
  styleUrls: ['./not-implemented-dialog.component.css']
})
export class NotImplementedDialogComponent {

  private _btBgClass = 'bg-color-light';

  constructor(public dialogRef: MatDialogRef<NotImplementedDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onMouseEnterBt(): void {
    this._btBgClass = 'bg-color-light-hover';
  }

  onMouseLeaveBt(): void {
    this._btBgClass = 'bg-color-light';
  }

}
