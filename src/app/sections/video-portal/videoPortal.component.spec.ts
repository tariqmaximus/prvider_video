import { ComponentFixture, TestBed } from '@angular/core/testing';

import { videoPortalComponent } from './videoPortal.component';

describe('videoPortalComponent', () => {
  let component: videoPortalComponent;
  let fixture: ComponentFixture<videoPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [videoPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(videoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
