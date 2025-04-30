import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumnailComponent } from './video-thumnail.component';

describe('VideoThumnailComponent', () => {
  let component: VideoThumnailComponent;
  let fixture: ComponentFixture<VideoThumnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoThumnailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoThumnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
