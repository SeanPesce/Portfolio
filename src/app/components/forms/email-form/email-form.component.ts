// Author: Sean Pesce

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class EmailErrorStateMatcher implements ErrorStateMatcher {
  /*
    Source:
      https://material.angular.io/components/input/overview
      https://stackblitz.com/angular/vkgmbaepodbg?file=app%2Finput-error-state-matcher-example.ts
  */
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() public minWidth = -1;
  @Input() public maxWidth = -1;
  @Input() public minHeight = -1;
  @Input() public maxHeight = -1;
  @Input() public bodyFieldHeight = -1;
  @Input() public hintEmail = 'Your email address';
  @Input() public hintBody = 'Message';
  @Input() public txtSendBt = 'Send';

  private _btClass = 'send-bt';
  private _btPtrClass = '';
  private _emailMatcher = new EmailErrorStateMatcher();
  private _emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  private _bodyMatcher = new EmailErrorStateMatcher();
  private _bodyFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit() {
  }

  public onMouseEnter(): void {
    this._btClass = 'send-bt-hover';
    this._btPtrClass = 'cursor-ptr';
  }

  public onMouseLeave(): void {
    this._btClass = 'send-bt';
    this._btPtrClass = '';
  }

  public emailHasError(errorType: string): boolean {
    return this._emailFormControl.hasError(errorType);
  }

  public bodyHasError(errorType: string): boolean {
    return this._bodyFormControl.hasError(errorType);
  }

}
