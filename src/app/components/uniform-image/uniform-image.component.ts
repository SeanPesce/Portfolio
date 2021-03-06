// Author: Sean Pesce
import * as Globals from './../../globals';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';


@Component({
  selector: 'app-uniform-image',
  templateUrl: './uniform-image.component.html',
  styleUrls: ['./uniform-image.component.css']
})
export class UniformImageComponent implements OnInit, AfterViewInit {

  public static readonly ASSETS = Globals.ASSETS;

  @Input() public width = 200;
  @Input() public src = '';
  @Input() public title = '';
  @Input() public alt = '';
  @Input() public ariaLabel = '';
  @Input() public backgroundColor = 'transparent';
  @Input() public borderWidth = 0;
  @Input() public borderColor = 'transparent';
  @Input() public useAssetsPath = true;
  @Input() public usePercent = false; // If false, use pixels for measurement
  @Input() public forceWidth = false; // If true, width is always 100% (if height is greater, top and bottom overflow and are hidden)

  @ViewChild('fullImage', { static: true }) public fullImg: ElementRef;

  private _naturalWidth  = 0;
  private _naturalHeight = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // Observable.interval(50)
    // .takeWhile(() => ((this._naturalWidth <= 0 || this._naturalHeight <= 0) && this.fullImg.nativeElement.offsetParent != null))
    // .subscribe(i => {
    //   // console.log('Full height: ' + this.fullImg.nativeElement.offsetHeight);
    //   this._naturalHeight = this.fullImg.nativeElement.offsetHeight;
    //   this._naturalWidth  = this.fullImg.nativeElement.offsetWidth;
    //   console.log('resize (' + (this.fullImg.nativeElement.offsetParent == null) + ')');
    // });
  }

  public imagePath(): string {
    return this.useAssetsPath ? (UniformImageComponent.ASSETS + this.src) : this.src;
  }

  public widthString(): string {
    return this.width + this.units();
  }

  public widthStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws };
  }

  public heightStyle(): any {
    const ws: string = this.widthString();
    return { 'height': ws, 'maxHeight': ws, 'minHeight': ws };
  }

  public dimenStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws, 'height': ws, 'maxHeight': ws, 'minHeight': ws };
  }

  public imgStyle(): any {
    const ws: string = this.widthString();
    return { 'width': ws, 'maxWidth': ws, 'minWidth': ws, 'height': 'auto',
    'paddingTop': 'fullHeight.offsetHeight > ' + this.width + ' ? (fullHeight.offsetHeight / 2) : 0' };
  }

  public units(): string {
    return this.usePercent ? '%' : 'px';
  }

  public get naturalHeight(): number {
    // if (this._naturalHeight <= 0) {
      this._naturalHeight = this.fullImg.nativeElement.offsetHeight;
    // }
    // console.log('Full height = ' + this._naturalHeight);
    return this._naturalHeight;
  }

  public get naturalWidth(): number {
    // if (this._naturalWidth <= 0) {
      this._naturalWidth = this.fullImg.nativeElement.offsetWidth;
    // }
    // console.log('Full width = ' + this._naturalWidth);
    return this._naturalWidth;
  }

  public onImageError(): void {

  }

  get ASSETS(): string {
    return UniformImageComponent.ASSETS;
  }

}
