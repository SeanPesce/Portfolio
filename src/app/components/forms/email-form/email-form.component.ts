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

  public btClass = 'send-bt';
  public btPtrClass = '';
  public emailMatcher = new EmailErrorStateMatcher();
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public bodyMatcher = new EmailErrorStateMatcher();
  public bodyFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit() {
  }

  public onMouseEnter(): void {
    this.btClass = 'send-bt-hover';
    this.btPtrClass = 'cursor-ptr';
  }

  public onMouseLeave(): void {
    this.btClass = 'send-bt';
    this.btPtrClass = '';
  }

  public emailHasError(errorType: string): boolean {
    return this.emailFormControl.hasError(errorType);
  }

  public bodyHasError(errorType: string): boolean {
    return this.bodyFormControl.hasError(errorType);
  }

}
