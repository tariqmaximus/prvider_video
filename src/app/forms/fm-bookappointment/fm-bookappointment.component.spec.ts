import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmBookappointmentComponent } from './fm-bookappointment.component';

describe('FmBookappointmentComponent', () => {
  let component: FmBookappointmentComponent;
  let fixture: ComponentFixture<FmBookappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmBookappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmBookappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
