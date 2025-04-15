import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmAttachmentComponent } from './fm-attachment.component';

describe('FmAttachmentComponent', () => {
  let component: FmAttachmentComponent;
  let fixture: ComponentFixture<FmAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmAttachmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
