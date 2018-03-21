// Author: Sean Pesce
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSlideshowComponent } from './video-slideshow.component';

describe('VideoSlideshowComponent', () => {
  let component: VideoSlideshowComponent;
  let fixture: ComponentFixture<VideoSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
